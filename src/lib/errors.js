var errorMessages = {

  default  : 'Please correct the field below',

  isLength : (validationItem) => {
    switch (validationItem.params.length) {

      case 1:
        return 'Please enter a value with at least '
                + validationItem.params[0] + ' characters';
        // @todo: Plural checking
        break;

      case 2:
        return 'Please enter a valiue between ' + validationItem.params[0]
               + ' and ' + validationItem.params[1] + ' characters long';
        break;

      default:
        return errorMessages.default;
        break;

    }

    return errorMessage;
  },

  isEmail  : 'Please enter a valid email address'

};

/**
 * Add a single error message
 *
 * @param  string          type    Error message type
 * @param  string|function message Message or function to get message
 */
errorMessages.addErrorMessage = (type, message) => {
  if (typeof type !== 'string') {
    throw new Error('Winterfell: First parameter of addErrorMessage '
                    + 'must be of type string');
  }

  if (typeof message !== 'function'
       && typeof message !== 'string') {
    throw new Error('Winterfell: Second parameter of addErrorMessage '
                    + 'must be of type function or string');
  }

  setErrorMessage(type, message);
};

/**
 * Add multiple error messages
 *
 * @param  object messages Error messages to add. type => func|string
 */
errorMessages.addErrorMessages = (messages) => {
  if (typeof messages !== 'object') {
    throw new Error('Winterfell: First parameter of addErrorMessages '
                    + 'must be of type object');
  }

  for (type in messages) {
    errorMessages.addErrorMessage(type, messages[type]);
  }
};

/**
 * Get an error message for a validationItem
 *
 * @param  object  validationItem Validation error item
 * @return string                 Error message to display
 */
errorMessages.getErrorMessage = (validationItem) => {
  var errorMessage = typeof validationItem.message !== 'undefined'
                       ? validationItem.message
                       : typeof errorMessages[validationItem.type] !== 'undefined'
                           ? errorMessages[validationItem.type]
                           : errorMessages.default;

  return typeof errorMessage === 'function'
           ? errorMessage(validationItem)
           : errorMessage;
};

/**
 * [description]
 * @param  {[type]} type    [description]
 * @param  {[type]} message [description]
 * @return {[type]}         [description]
 */
var setErrorMessage = (type, message) => {
  errorMessages[type] = message;
};

module.exports = errorMessages;