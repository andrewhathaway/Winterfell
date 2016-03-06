'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var errorMessages = {

  /*
   * Fallback Error Message
   */
  default: 'Please correct the field below',

  /*
   * Min and Max string left message
   */
  isLength: function isLength(validationItem) {
    switch (validationItem.params.length) {

      case 1:
        return 'Please enter a value with at least ' + validationItem.params[0] + ' character' + (validationItem.params[0] != 1 ? 's' : '');
        break;

      case 2:
        return 'Please enter a valiue between ' + validationItem.params[0] + ' and ' + validationItem.params[1] + ' characters long';
        break;

      default:
        return errorMessages.default;
        break;

    }

    return errorMessage;
  },

  /*
   * Valid email address
   */
  isEmail: 'Please enter a valid email address',

  /*
   * String contains seed
   */
  contains: function contains(validationItem) {
    return 'Please enter a value that contains "' + validationItem.params[0] + '"';
  },

  /*
   * String equals string
   */
  equals: function equals(validationItem) {
    return 'Value must equal ' + validationItem.params[0];
  },

  /*
   * Characters A-Z only
   */
  isAlpha: 'Please only enter letters',

  /*
   * Characters A-Z and 1-9 only
   */
  isAlphanumeric: 'Please only enter letters and numbers',

  /*
   * Credit card
   */
  isCreditCard: 'Please enter a valid credit card number',

  /*
   * Currency
   */
  isCurrency: 'Please enter a current value only',

  /*
   * Date
   */
  isDate: 'Please enter a valid date',

  /*
   * Decimal value
   */
  isDecimal: 'Please enter a decimal value only',

  /*
   * Float value
   */
  isFloat: 'Please enter a float value only',

  /*
   * IP value
   */
  isIP: 'Please enter a valid IP address',

  /*
   * isIn array of items
   */
  isIn: 'Please enter one of the allowed values',

  /*
   * isAllIn array of items
   */
  isAllIn: 'Please enter one of the allowed values',

  /*
   * JSON Value
   */
  isJSON: 'Please enter a valid JSON string',

  /*
   * Lowercase values only
   */
  isLowercase: 'Please enter lowercase characters only',

  /*
   * Uppercase values only
   */
  isUppercase: 'Please enter uppercase characters only',

  /*
   * Mobile phone
   */
  isMobilePhone: 'Please enter a valid mobile phone',

  /*
   * MongoId only
   */
  isMongoId: 'Please enter a valid MongoId',

  /*
   * Numbers only
   */
  isNumeric: 'Please enter numbers only',

  /*
   * URL Only
   */
  isURL: 'Please enter a valid URL',

  /*
   * isAccepted - checkbox
   */
  isAccepted: 'Please accept by clicking the checkbox'
};

/**
 * Add a single error message
 *
 * @param  string          type    Error message type
 * @param  string|function message Message or function to get message
 */
errorMessages.addErrorMessage = function (type, message) {
  if (typeof type !== 'string') {
    throw new Error('Winterfell: First parameter of addErrorMessage ' + 'must be of type string');
  }

  if (typeof message !== 'function' && typeof message !== 'string') {
    throw new Error('Winterfell: Second parameter of addErrorMessage ' + 'must be of type function or string');
  }

  setErrorMessage(type, message);
};

/**
 * Add multiple error messages
 *
 * @param  object messages Error messages to add. type => func|string
 */
errorMessages.addErrorMessages = function (messages) {
  if ((typeof messages === 'undefined' ? 'undefined' : _typeof(messages)) !== 'object') {
    throw new Error('Winterfell: First parameter of addErrorMessages ' + 'must be of type object');
  }

  for (var type in messages) {
    errorMessages.addErrorMessage(type, messages[type]);
  }
};

/**
 * Get an error message for a validationItem
 *
 * @param  object  validationItem Validation error item
 * @return string                 Error message to display
 */
errorMessages.getErrorMessage = function (validationItem) {
  var errorMessage = typeof validationItem.message !== 'undefined' ? validationItem.message : typeof errorMessages[validationItem.type] !== 'undefined' ? errorMessages[validationItem.type] : errorMessages.default;

  return typeof errorMessage === 'function' ? errorMessage(validationItem) : errorMessage;
};

/**
 * setErrorMessage
 *
 * @param  string          type    Error message type
 * @param  stirng|function message essage or function to get message
 */
var setErrorMessage = function setErrorMessage(type, message) {
  errorMessages[type] = message;
};

module.exports = errorMessages;