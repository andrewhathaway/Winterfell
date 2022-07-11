import React, { useRef, useState } from 'react';
import _ from 'lodash';
import KeyCodez from 'keycodez';
import Validator from 'validator';
import ReactSwitch from 'react-switch';

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var StringParser = (function (template, params) {
  template = template || '';
  params = params || {};
  /*
   * Split up template in to array of characters
   */

  var characters = template.split('');
  var buffer = '';
  var parsedTemplate = '';
  var collecting = false;

  for (var i = 0; i < characters.length; i++) {
    var currentChar = characters[i];
    /*
     * If we're not collecting and we're not
     * and opening or closing brace then
     * append the charater to the
     * parsedTemplate and move on
     */

    if (!collecting && currentChar != '{' && currentChar != '}') {
      parsedTemplate += currentChar;
      continue;
    }
    /*
     * If we're an opening brace,
     * start collecting for the buffer
     */


    if (currentChar == '{') {
      collecting = true;
    }
    /*
     * If we're here, we're collecting so if
     * we're not a brace of any sort then add
     * the character to the buffer
     */


    if (currentChar != '{' && currentChar != '}') {
      buffer += currentChar;
    }
    /*
     * If we're a closing brace, then we
     * attempt to get the value with the
     * buffers name from the params object
     * and add it to the parsedTemplate
     */


    if (currentChar == '}') {
      var value = '';

      if (typeof params[buffer] !== 'undefined') {
        value = params[buffer];
      }

      parsedTemplate += value;
      /*
       * Stop collecting and reset
       * the buffer to nothing
       */

      collecting = false;
      buffer = '';
    }
  }

  return parsedTemplate;
});

var extraValidators = {
  /*
   * isAccepted Validation Mehod
   */
  isAccepted: function isAccepted(value, expected) {
    return value == expected;
  },

  /*
   * isAllIn Validation Method
   */
  isAllIn: function isAllIn(value, options) {
    if (!value) {
      return false;
    }

    return _.every(value, function (item) {
      return options.indexOf(item) > -1;
    });
  }
};
/**
 * Validate a value against a validation item
 *
 * @param  any     value          Value being tested
 * @param  object  validationItem Rule set for validator
 * @return boolean                Valid?
 */

var validateAnswer = function validateAnswer(value, validationItem, questionAnswers) {
  var validationMethod = typeof extraValidators[validationItem.type] !== 'undefined' ? extraValidators[validationItem.type] : Validator.hasOwnProperty(validationItem.type) && typeof Validator[validationItem.type] === 'function' ? Validator[validationItem.type] : undefined;

  if (!validationMethod) {
    throw new Error("Winterfell: Attempted to validate for undefined method \"".concat(validationItem.type, "\""));
  }
  /*
   * Clone the validation parameters so it doesn't effect the
   * parameters elsewhere by reference.
   */


  var validationParameters = (validationItem.params || []).slice(0);
  /*
   * Run the parameters through the stringParser with the
   * questionAnswers so that it sets the questionAnswer
   * as the parameter.
   */

  validationParameters = validationParameters.map(function (p) {
    return typeof p === 'string' ? StringParser(p, questionAnswers) : p;
  });
  /*
   * Push the value of the question we're validating to
   * the first parameter of the validationParameters
   */

  validationParameters.unshift(value);
  /*
   * Return the result of the validation method running
   * wtih the validationParameters.
   */

  return validationMethod.apply(null, validationParameters);
};
/**
 * Get active questions from an array of questions,
 * recursively. Follows active conditions.
 *
 * @param  array  questions       Questions to run through
 * @param  object questionAnswers Current answers for questions
 * @param  array  activeQuestions
 * @return array                  All active questions
 */


var getActiveQuestions = function getActiveQuestions(questions, questionAnswers, activeQuestions, questionSetId) {
  activeQuestions = activeQuestions || [];
  questions.forEach(function (question) {
    activeQuestions.push({
      questionId: question.questionId,
      validations: question.validations,
      questionSetId: questionSetId
    });

    if (typeof question.input.options === 'undefined' || question.input.options.length === 0) {
      return;
    }

    question.input.options.forEach(function (option) {
      if (typeof option.conditionalQuestions === 'undefined' || option.conditionalQuestions.length == 0 || questionAnswers[question.questionId] != option.value) {
        return;
      }

      activeQuestions = getActiveQuestions(option.conditionalQuestions, questionAnswers, activeQuestions, questionSetId);
    });
  });
  return activeQuestions;
};
/**
 * Get active questions from multiple question sets
 *
 * @param  array  questionSets    All question sets
 * @param  object questionAnswers Current answers for questions
 * @return array                  All active questions
 */


var getActiveQuestionsFromQuestionSets = function getActiveQuestionsFromQuestionSets(questionSets, questionAnswers) {
  var questionsToCheck = [];
  questionSets.forEach(function (questionSet) {
    Array.prototype.push.apply(questionsToCheck, getActiveQuestions(questionSet.questions, questionAnswers, [], questionSet.questionSetId));
  });
  return questionsToCheck;
};
/**
 * Get all invalid questions from question sets
 *
 * @param  array  questionSets     All question sets
 * @param  object questionAnswers  Current answers for questions
 * @return object                  Set of questions and their invalidations
 */


var getQuestionPanelInvalidQuestions = function getQuestionPanelInvalidQuestions(questionSets, questionAnswers) {
  var masterQuestionsToCheck = getActiveQuestionsFromQuestionSets(questionSets, questionAnswers).slice();
  var questionsToCheck = masterQuestionsToCheck.slice().filter(function (question) {
    return question.validations instanceof Array && question.validations.length > 0;
  });
  /*
   * Now we run validations for the questions
   * we need to check for errors.
   *
   * Go through every question, and its validations
   * then run the question and answer through
   * the validation method required.
   */

  var errors = {};
  questionsToCheck.forEach(function (_ref) {
    var questionId = _ref.questionId,
        validations = _ref.validations,
        questionSetId = _ref.questionSetId;
    return [].forEach.bind(validations, function (validation) {
      var valid = validateAnswer(questionAnswers[questionId], validation, questionAnswers);

      if (valid) {
        return;
      }
      /*
       * If we got here, the validation failed. Add
       * an validation error and continue to the next!
       */


      if (typeof errors[questionId] === 'undefined') {
        errors[questionId] = [];
      }

      errors[questionId].push(Object.assign(validation, {
        questionSetId: questionSetId
      }));
    })();
  });
  return errors;
};
/**
 * Add a single validation method
 *
 * @param  string   name   Name of validation method
 * @param  function method Validation method
 */


var addValidationMethod = function addValidationMethod(name, method) {
  if (typeof name !== 'string') {
    throw new Error('Winterfell: First parameter of addValidationMethod ' + 'must be of type string');
  }

  if (typeof method !== 'function') {
    throw new Error('Winterfell: Second parameter of addValidationMethod ' + 'must be of type function');
  }

  extraValidators[name] = method;
};
/**
 * Add multiple validation methods
 *
 * @param  array methods Methods to add. name => func
 */


var addValidationMethods = function addValidationMethods(methods) {
  if (_typeof(methods) !== 'object') {
    throw new Error('Winterfell: First parameter of addValidationMethods ' + 'must be of type object');
  }

  for (var methodName in methods) {
    addValidationMethod(methodName, methods[methodName]);
  }
};

var Validation = {
  validateAnswer: validateAnswer,
  getActiveQuestions: getActiveQuestions,
  getActiveQuestionsFromQuestionSets: getActiveQuestionsFromQuestionSets,
  getQuestionPanelInvalidQuestions: getQuestionPanelInvalidQuestions,
  addValidationMethod: addValidationMethod,
  addValidationMethods: addValidationMethods
};

var Validation$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Validation
});

var errorMessages = {
  /*
   * Fallback Error Message
   */
  "default": 'Please correct the field below',

  /*
   * Min and Max string left message
   */
  isLength: function isLength(validationItem) {
    switch (validationItem.params.length) {
      case 1:
        return "Please enter a value with at least ".concat(validationItem.params[0], " character").concat(validationItem.params[0] != 1 ? 's' : '');

      case 2:
        return "Please enter a value between ".concat(validationItem.params[0], " and ").concat(validationItem.params[1], " characters long");

      default:
        return errorMessages["default"];
    }
  },

  /*
   * Valid email address
   */
  isEmail: 'Please enter a valid email address',

  /*
   * String contains seed
   */
  contains: function contains(validationItem) {
    return "Please enter a value that contains \"".concat(validationItem.params[0], "\"");
  },

  /*
   * String equals string
   */
  equals: function equals(validationItem) {
    return "Value must equal ".concat(validationItem.params[0]);
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
  isMobilePhone: 'Please enter a valid mobile number',

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
  if (_typeof(messages) !== 'object') {
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
  var errorMessage = typeof validationItem.message !== 'undefined' ? validationItem.message : typeof errorMessages[validationItem.type] !== 'undefined' ? errorMessages[validationItem.type] : errorMessages["default"];
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

var Button = /*#__PURE__*/function (_React$Component) {
  _inherits(Button, _React$Component);

  var _super = _createSuper(Button);

  function Button() {
    _classCallCheck(this, Button);

    return _super.apply(this, arguments);
  }

  _createClass(Button, [{
    key: "handleClick",
    value: function handleClick(e) {
      e.preventDefault();
      this.props.onClick();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("button", {
        href: "#",
        className: this.props.className,
        onClick: this.handleClick.bind(this)
      }, this.props.text);
    }
  }]);

  return Button;
}(React.Component);

Button.defaultProps = {
  text: 'Submit',
  className: undefined,
  onClick: function onClick() {}
};

var Switch = function Switch(_ref) {
  var checked = _ref.checked,
      onChange = _ref.onChange;

  var handleChange = function handleChange(checked) {
    onChange(checked);
  };

  return /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement(ReactSwitch, {
    onChange: handleChange,
    checked: checked,
    onColor: "#3db28c",
    offColor: "#c2303d",
    handleDiameter: 20,
    uncheckedIcon: false,
    checkedIcon: false,
    height: 26,
    width: 48
  }));
};

Switch.defaultProps = {
  checked: false,
  onChnage: function onChnage() {}
};

var iconMapper = {
  WARNING: 'fas fa-exclamation-circle',
  DANGER: 'fas fa-exclamation-circle',
  SUCCESS: 'fas fa-check'
};
var alertClassMapper = {
  WARNING: 'alert alert-warning',
  DANGER: 'alert alert-danger',
  SUCCESS: 'alert alert-success'
};

var Alert = /*#__PURE__*/function (_React$Component) {
  _inherits(Alert, _React$Component);

  var _super = _createSuper(Alert);

  function Alert() {
    _classCallCheck(this, Alert);

    return _super.apply(this, arguments);
  }

  _createClass(Alert, [{
    key: "handleClick",
    value: function handleClick(e, action) {
      e.preventDefault();
      this.props.handleQuestionAction(e, this.props.questionSetId, this.props.questionId, action);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props$alert = this.props.alert,
          _this$props$alert$sta = _this$props$alert.status,
          status = _this$props$alert$sta === void 0 ? '' : _this$props$alert$sta,
          _this$props$alert$tex = _this$props$alert.text,
          text = _this$props$alert$tex === void 0 ? '' : _this$props$alert$tex,
          _this$props$alert$opt = _this$props$alert.options,
          options = _this$props$alert$opt === void 0 ? [] : _this$props$alert$opt;

      var renderIcon = function renderIcon() {
        var icon = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        if (!_.isEmpty(icon)) {
          return /*#__PURE__*/React.createElement("i", {
            className: iconMapper[icon]
          });
        }

        return '';
      };

      var renderOptions = function renderOptions(options) {
        if (!_.isEmpty(options)) {
          return _toConsumableArray(options).map(function (option) {
            var _option$text = option.text,
                text = _option$text === void 0 ? '' : _option$text,
                _option$action = option.action,
                action = _option$action === void 0 ? '' : _option$action,
                _option$icon = option.icon,
                icon = _option$icon === void 0 ? '' : _option$icon;
            return /*#__PURE__*/React.createElement("div", {
              onClick: function onClick(e) {
                return _this.handleClick(e, action);
              }
            }, !_.isEmpty(icon) ? /*#__PURE__*/React.createElement("i", {
              className: icon
            }) : '', " ", /*#__PURE__*/React.createElement("div", null, text));
          });
        }
      };

      return /*#__PURE__*/React.createElement("div", {
        className: alertClassMapper[status]
      }, /*#__PURE__*/React.createElement("div", {
        className: "alert-wrap"
      }, /*#__PURE__*/React.createElement("div", null, renderIcon(status), " ", text), ' ', renderOptions(options)));
    }
  }]);

  return Alert;
}(React.Component);

Alert.defaultProps = {
  status: '',
  text: '',
  options: []
};

var CheckboxInput = /*#__PURE__*/function (_React$Component) {
  _inherits(CheckboxInput, _React$Component);

  var _super = _createSuper(CheckboxInput);

  function CheckboxInput(props) {
    var _this;

    _classCallCheck(this, CheckboxInput);

    _this = _super.call(this, props);
    _this.state = {
      checked: props.defaultChecked
    };
    return _this;
  }

  _createClass(CheckboxInput, [{
    key: "handleChange",
    value: function handleChange(e) {
      var _this2 = this;

      if (e) {
        this.setState({
          checked: !this.state.checked
        }, function () {
          _this2.props.onChange(_this2.state.checked ? _this2.props.value : undefined);
        });
      } else {
        this.props.onChange(this.state.checked ? this.props.value : undefined);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.state.checked) {
        this.handleChange();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: this.props.classes.checkboxInput
      }, /*#__PURE__*/React.createElement("label", {
        className: this.props.classes.checkboxLabel,
        id: this.props.labelId
      }, /*#__PURE__*/React.createElement("input", {
        type: "checkbox",
        name: this.props.name,
        "aria-labelledby": this.props.labelId,
        className: this.props.classes.checkbox,
        defaultChecked: this.state.checked,
        value: this.props.value,
        required: this.props.required ? 'required' : undefined,
        disabled: this.props.readOnly || this.props.disabled,
        onChange: this.handleChange.bind(this),
        onFocus: this.props.onFocus.bind(this),
        onBlur: this.props.onBlur.bind(null, this.state.checked ? this.props.value : undefined)
      }), this.props.text));
    }
  }]);

  return CheckboxInput;
}(React.Component);

CheckboxInput.defaultProps = {
  text: '',
  defaultChecked: false,
  classes: {},
  name: '',
  value: '',
  readOnly: false,
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  onFocus: function onFocus() {}
};

var cloneArray = (function (array) {
  return array.slice(0);
});

var CheckboxOptionsInput = /*#__PURE__*/function (_React$Component) {
  _inherits(CheckboxOptionsInput, _React$Component);

  var _super = _createSuper(CheckboxOptionsInput);

  function CheckboxOptionsInput(props) {
    var _this;

    _classCallCheck(this, CheckboxOptionsInput);

    _this = _super.call(this, props);
    _this.state = {
      value: _this.props.value.length > 0 ? cloneArray(_this.props.value) : []
    };
    return _this;
  }

  _createClass(CheckboxOptionsInput, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) this.setState({
        value: nextProps.value
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(newVal, e) {
      var currentValue = this.state.value;

      if (e.target.checked) {
        currentValue.push(newVal);
      } else {
        currentValue = currentValue.filter(function (v) {
          return v != newVal;
        });
      }

      this.setState({
        value: currentValue
      }, this.props.onChange.bind(null, currentValue));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement("ul", {
        className: this.props.classes.checkboxList
      }, this.props.options.map(function (opt) {
        return /*#__PURE__*/React.createElement("li", {
          key: opt.value,
          className: _this2.props.classes.checkboxListItem
        }, /*#__PURE__*/React.createElement("label", {
          className: _this2.props.classes.checkboxLabel,
          id: _this2.props.labelId
        }, /*#__PURE__*/React.createElement("input", {
          type: "checkbox",
          name: _this2.props.name,
          "aria-labelledby": _this2.props.labelId,
          value: opt.value,
          checked: _this2.state.value.indexOf(opt.value) > -1,
          className: _this2.props.classes.checkbox,
          required: _this2.props.required ? 'required' : undefined,
          disabled: _this2.props.readOnly || _this2.props.disabled,
          onChange: _this2.handleChange.bind(_this2, opt.value),
          onFocus: _this2.props.onFocus.bind(_this2),
          onBlur: _this2.props.onBlur.bind(null, _this2.state.value)
        }), opt.text));
      }));
    }
  }]);

  return CheckboxOptionsInput;
}(React.Component);

CheckboxOptionsInput.defaultProps = {
  classes: {},
  name: '',
  value: [],
  options: [],
  readOnly: false,
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  onFocus: function onFocus() {}
};

var EmailInput = /*#__PURE__*/function (_React$Component) {
  _inherits(EmailInput, _React$Component);

  var _super = _createSuper(EmailInput);

  function EmailInput(props) {
    var _this;

    _classCallCheck(this, EmailInput);

    _this = _super.call(this, props);
    _this.state = {
      value: _this.props.value
    };
    return _this;
  }

  _createClass(EmailInput, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) this.setState({
        value: nextProps.value
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        value: e.target.value
      }, this.props.onChange.bind(null, e.target.value));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("input", {
        type: "email",
        name: this.props.name,
        id: this.props.id,
        "aria-labelledby": this.props.labelId,
        className: this.props.classes.input,
        placeholder: this.props.placeholder,
        value: this.state.value,
        disabled: this.props.disabled || this.props.readOnly,
        required: this.props.required ? 'required' : undefined,
        onChange: this.handleChange.bind(this),
        onFocus: this.props.onFocus.bind(this),
        onBlur: this.props.onBlur.bind(null, this.state.value),
        onKeyDown: this.props.onKeyDown
      });
    }
  }]);

  return EmailInput;
}(React.Component);

EmailInput.defaultProps = {
  classes: {},
  name: '',
  id: '',
  value: '',
  placeholder: '',
  disabled: undefined,
  readOnly: false,
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  onKeyDown: function onKeyDown() {},
  onFocus: function onFocus() {}
};

var FileInput = /*#__PURE__*/function (_React$Component) {
  _inherits(FileInput, _React$Component);

  var _super = _createSuper(FileInput);

  function FileInput(props) {
    var _this;

    _classCallCheck(this, FileInput);

    _this = _super.call(this, props);
    _this.state = {
      value: _this.props.value
    };
    return _this;
  }

  _createClass(FileInput, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        value: e.target.value
      }, this.props.onChange.bind(null, e.target.value));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("input", {
        type: "file",
        name: this.props.name,
        id: this.props.id,
        "aria-labelledby": this.props.labelId,
        className: this.props.classes.file,
        required: this.props.required ? 'required' : undefined,
        disabled: this.props.readOnly || this.props.disabled,
        onChange: this.handleChange.bind(this),
        onFocus: this.props.onFocus.bind(this),
        onBlur: this.props.onBlur.bind(null, this.state.value)
      });
    }
  }]);

  return FileInput;
}(React.Component);

FileInput.defaultProps = {
  classes: {},
  name: '',
  id: '',
  value: '',
  readOnly: false,
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  onFocus: function onFocus() {}
};

var HiddenInput = /*#__PURE__*/function (_React$Component) {
  _inherits(HiddenInput, _React$Component);

  var _super = _createSuper(HiddenInput);

  function HiddenInput(props) {
    var _this;

    _classCallCheck(this, HiddenInput);

    _this = _super.call(this, props);
    _this.state = {
      value: _this.props.value
    };
    return _this;
  }

  _createClass(HiddenInput, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("input", {
        type: "hidden",
        name: this.props.name,
        value: this.state.value
      });
    }
  }]);

  return HiddenInput;
}(React.Component);

HiddenInput.defaultProps = {
  name: '',
  value: ''
};

var PasswordInput = /*#__PURE__*/function (_React$Component) {
  _inherits(PasswordInput, _React$Component);

  var _super = _createSuper(PasswordInput);

  function PasswordInput(props) {
    var _this;

    _classCallCheck(this, PasswordInput);

    _this = _super.call(this, props);
    _this.state = {
      value: _this.props.value
    };
    return _this;
  }

  _createClass(PasswordInput, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        value: e.target.value
      }, this.props.onChange.bind(null, e.target.value));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("input", {
        type: "password",
        name: this.props.name,
        id: this.props.id,
        "aria-labelledby": this.props.labelId,
        className: this.props.classes.input,
        placeholder: this.props.placeholder,
        value: this.state.value,
        required: this.props.required ? 'required' : undefined,
        readOnly: this.props.readOnly || this.props.disabled,
        onChange: this.handleChange.bind(this),
        onFocus: this.props.onFocus.bind(this),
        onBlur: this.props.onBlur.bind(null, this.state.value),
        onKeyDown: this.props.onKeyDown
      });
    }
  }]);

  return PasswordInput;
}(React.Component);

PasswordInput.defaultProps = {
  classes: {},
  name: '',
  id: '',
  value: '',
  placeholder: '',
  readOnly: false,
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  onKeyDown: function onKeyDown() {},
  onFocus: function onFocus() {}
};

var RadioOptionsInput = /*#__PURE__*/function (_React$Component) {
  _inherits(RadioOptionsInput, _React$Component);

  var _super = _createSuper(RadioOptionsInput);

  function RadioOptionsInput(props) {
    var _this;

    _classCallCheck(this, RadioOptionsInput);

    _this = _super.call(this, props);
    _this.state = {
      value: _this.props.value
    };
    return _this;
  }

  _createClass(RadioOptionsInput, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) this.setState({
        value: nextProps.value
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(value) {
      this.setState({
        value: value
      }, this.props.onChange.bind(null, value));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement("ul", {
        className: this.props.classes.radioList
      }, this.props.options.map(function (opt) {
        return /*#__PURE__*/React.createElement("li", {
          key: opt.value,
          className: _this2.props.classes.radioListItem
        }, /*#__PURE__*/React.createElement("label", {
          className: _this2.props.classes.radioLabel,
          id: _this2.props.labelId
        }, /*#__PURE__*/React.createElement("input", {
          type: "radio",
          name: _this2.props.name,
          "aria-labelledby": _this2.props.labelId,
          checked: _this2.state.value == opt.value,
          className: _this2.props.classes.radio,
          required: _this2.props.required ? 'required' : undefined,
          disabled: _this2.props.readOnly || _this2.props.disabled,
          value: opt.value,
          onChange: _this2.handleChange.bind(_this2, opt.value),
          onFocus: _this2.props.onFocus.bind(_this2),
          onBlur: _this2.props.onBlur.bind(null, _this2.state.value)
        }), /*#__PURE__*/React.createElement("span", null, opt.text)));
      }));
    }
  }]);

  return RadioOptionsInput;
}(React.Component);

RadioOptionsInput.defaultProps = {
  classes: {},
  name: '',
  value: '',
  options: [],
  readOnly: false,
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  onFocus: function onFocus() {}
};

var SelectInput = /*#__PURE__*/function (_React$Component) {
  _inherits(SelectInput, _React$Component);

  var _super = _createSuper(SelectInput);

  function SelectInput(props) {
    var _this;

    _classCallCheck(this, SelectInput);

    _this = _super.call(this, props);
    _this.state = {
      value: _this.props.value
    };
    return _this;
  }

  _createClass(SelectInput, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) this.setState({
        value: nextProps.value
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        value: e.target.value
      }, this.props.onChange.bind(null, e.target.value));
    }
  }, {
    key: "render",
    value: function render() {
      var options = this.props.options.map(function (opt) {
        return /*#__PURE__*/React.createElement("option", {
          key: opt.value,
          value: opt.value
        }, opt.text);
      });
      return /*#__PURE__*/React.createElement("select", {
        name: this.props.name,
        id: this.props.id,
        className: this.props.classes.select,
        value: this.state.value,
        required: this.props.required ? 'required' : undefined,
        disabled: this.props.readOnly || this.props.disabled,
        onChange: this.handleChange.bind(this),
        onFocus: this.props.onFocus.bind(this),
        onBlur: this.props.onBlur.bind(null, this.state.value)
      }, options);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      /*
       * Selects automatically pick the first item, so
       * make sure we set it.
       */
      this.handleChange({
        target: {
          value: this.props.options[0].value
        }
      });
    }
  }]);

  return SelectInput;
}(React.Component);

SelectInput.defaultProps = {
  classes: {},
  name: '',
  id: '',
  value: '',
  options: [],
  readOnly: false,
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  onFocus: function onFocus() {}
};

var TextareaInput = /*#__PURE__*/function (_React$Component) {
  _inherits(TextareaInput, _React$Component);

  var _super = _createSuper(TextareaInput);

  function TextareaInput(props) {
    var _this;

    _classCallCheck(this, TextareaInput);

    _this = _super.call(this, props);
    _this.state = {
      value: _this.props.value
    };
    return _this;
  }

  _createClass(TextareaInput, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) this.setState({
        value: nextProps.value
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        value: e.target.value
      }, this.props.onChange.bind(null, e.target.value));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("textarea", {
        type: "text",
        name: this.props.name,
        id: this.props.id,
        "aria-labelledby": this.props.labelId,
        className: this.props.classes.input,
        placeholder: this.props.placeholder,
        value: this.state.value,
        disabled: this.props.readOnly || this.props.disabled,
        required: this.props.required ? 'required' : undefined,
        onChange: this.handleChange.bind(this),
        onFocus: this.props.onFocus.bind(this),
        onBlur: this.props.onBlur.bind(null, this.state.value)
      });
    }
  }]);

  return TextareaInput;
}(React.Component);

TextareaInput.defaultProps = {
  classes: {},
  name: '',
  id: '',
  value: '',
  placeholder: '',
  disabled: undefined,
  readOnly: false,
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  onFocus: function onFocus() {}
};

var TextInput = /*#__PURE__*/function (_React$Component) {
  _inherits(TextInput, _React$Component);

  var _super = _createSuper(TextInput);

  function TextInput(props) {
    var _this;

    _classCallCheck(this, TextInput);

    _this = _super.call(this, props);
    _this.state = {
      value: _this.props.value
    };
    return _this;
  }

  _createClass(TextInput, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) this.setState({
        value: nextProps.value
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        value: e.target.value
      }, this.props.onChange.bind(null, e.target.value));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: this.props.name,
        id: this.props.id,
        "aria-labelledby": this.props.labelId,
        className: this.props.classes.input,
        placeholder: this.props.placeholder,
        value: this.state.value,
        disabled: this.props.readOnly || this.props.disabled,
        required: this.props.required ? 'required' : undefined,
        onChange: this.handleChange.bind(this),
        onBlur: this.props.onBlur.bind(null, this.state.value),
        onFocus: this.props.onFocus.bind(this),
        onKeyDown: this.props.onKeyDown
      });
    }
  }]);

  return TextInput;
}(React.Component);

TextInput.defaultProps = {
  classes: {},
  name: '',
  id: '',
  value: '',
  placeholder: '',
  disabled: undefined,
  readOnly: false,
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  onKeyDown: function onKeyDown() {},
  onFocus: function onFocus() {}
};

var ButtonInput = /*#__PURE__*/function (_React$Component) {
  _inherits(ButtonInput, _React$Component);

  var _super = _createSuper(ButtonInput);

  function ButtonInput() {
    _classCallCheck(this, ButtonInput);

    return _super.apply(this, arguments);
  }

  _createClass(ButtonInput, [{
    key: "handleClick",
    value: function handleClick(e) {
      e.preventDefault();
      this.props.onClick(this.props.questionSetId, this.props.id);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("button", {
        className: this.props["class"],
        disabled: this.props.readOnly,
        onClick: this.handleClick.bind(this)
      }, this.props.text);
    }
  }]);

  return ButtonInput;
}(React.Component);

ButtonInput.defaultProps = {
  questionSetId: undefined,
  id: undefined,
  action: undefined,
  text: 'Add',
  placeholder: undefined,
  "class": '',
  icon: undefined,
  readOnly: false,
  onClick: function onClick() {}
};

var inputTypes = {
  checkboxInput: CheckboxInput,
  checkboxOptionsInput: CheckboxOptionsInput,
  emailInput: EmailInput,
  fileInput: FileInput,
  hiddenInput: HiddenInput,
  passwordInput: PasswordInput,
  radioOptionsInput: RadioOptionsInput,
  selectInput: SelectInput,
  textareaInput: TextareaInput,
  textInput: TextInput,
  buttonInput: ButtonInput
};
/**
 * Add an input type
 *
 * @param  type      name     Name of InputType
 * @param  Component instance Input Type Component
 */

inputTypes.addInputType = function (name, instance) {
  if (typeof name !== 'string') {
    throw new Error('Winterfell: First parameter of addInputType ' + 'must be of type string');
  }

  if (!React.Component instanceof instance.constructor) {
    throw new Error('Winterfell: Cannot not assign "' + name + '" as an inputType. ' + 'Second paramter expects a React component');
  }

  inputTypes[name] = instance;
};
/**
 * Add multiple InputTypes
 *
 * @param  object types InputTypes to add. string => Component
 */


inputTypes.addInputTypes = function (types) {
  if (_typeof(types) !== 'object') {
    throw new Error('Winterfell: First parameter of addInputTypes ' + 'must be of type object');
  }

  for (var type in types) {
    inputTypes.addInputType(type, types[type]);
  }
};

var isQuestionLocked = function isQuestionLocked(_ref) {
  var questionStatus = _ref.questionStatus,
      questionId = _ref.questionId;
  return questionStatus[questionId] === 2;
};
var isQuestionOn = function isQuestionOn(_ref2) {
  var questionStatus = _ref2.questionStatus,
      questionId = _ref2.questionId;
  return questionStatus[questionId] === 1;
};
var isOptionalQuestions = function isOptionalQuestions(questions, questionStatus) {
  return !questions.filter(function (_ref4) {
    var questionId = _ref4.questionId;
    return isQuestionLocked({
      questionStatus: questionStatus,
      questionId: questionId
    });
  }).length;
};

var hasConditionalQuestions = function hasConditionalQuestions(_ref) {
  var options = _ref.input.options;
  return !!(options || []).filter(function (option) {
    return option.conditionalQuestions && option.conditionalQuestions.length > 0;
  }).length;
};

var getConditionalQuestions = function getConditionalQuestions(_ref2) {
  var options = _ref2.input.options,
      value = _ref2.value;
  return (options || []).filter(function (option) {
    return value instanceof Array ? value.indexOf(option.value) > -1 : value === option.value;
  }).filter(function (option) {
    return option.conditionalQuestions && option.conditionalQuestions.length > 0;
  });
};

var isField = function isField(_ref3) {
  var type = _ref3.type;
  return type === 'emailInput' || type === 'fileInput' || type === 'selectInput' || type === 'textInput' || type === 'passwordInput';
};

var Question = /*#__PURE__*/function (_React$Component) {
  _inherits(Question, _React$Component);

  var _super = _createSuper(Question);

  function Question(props) {
    var _this;

    _classCallCheck(this, Question);

    _this = _super.call(this, props);
    _this.questionRef = /*#__PURE__*/React.createRef();
    return _this;
  }

  _createClass(Question, [{
    key: "handleInputChange",
    value: function handleInputChange(questionId, value) {
      this.props.onAnswerChange(questionId, value, this.props.validations, this.props.validateOn);
    }
  }, {
    key: "handleSwitchChange",
    value: function handleSwitchChange(questionId, value) {
      // this.handleRefChanged(this.questionRef);
      this.props.onSwitchChange(questionId, value, this.props.validations, this.props.validateOn);
    }
  }, {
    key: "handleInputBlur",
    value: function handleInputBlur(questionId, value) {
      this.props.onQuestionBlur(questionId, value, this.props.validations, this.props.validateOn);
    }
  }, {
    key: "handleInputFocus",
    value: function handleInputFocus(questionId) {
      this.props.onQuestionFocus(questionId);
    }
  }, {
    key: "handleInputClick",
    value: function handleInputClick(questionSetId, questionId) {
      this.props.onQuestionClick(questionSetId, questionId);
    }
  }, {
    key: "handleQuestionAction",
    value: function handleQuestionAction(e) {
      var questionSetId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var questionId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var key = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
      var counts = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      // e.preventDefault();
      this.props.onQuestionAction(e, questionSetId, questionId, key, counts);
    }
  }, {
    key: "handleRefChanged",
    value: function handleRefChanged(node) {
      this.questionRef = node;
      if (!this.inputTooltip) this.inputTooltip = tippy(node);
      this.inputTooltip.enable();

      if (isQuestionLocked(this.props)) {
        this.inputTooltip.setContent(this.props.lockedToolTip || 'This question is mandatory for all applicants and cannot be excluded');
      } else if (isQuestionOn(this.props)) {
        var optionalTooltip;

        if (hasConditionalQuestions(this.props)) {
          optionalTooltip = document.createElement('div');
          optionalTooltip.innerHTML = '<p>This question is optional. Click the switch to add or remove from the DAR application form.</p><p>NOTE: This question contains either contextual answers which will be presented to the applicant dependant on their selection or, in some cases, there may be additional fields to be completed.</p><p style="margin-bottom: 0;">The guidance for each contextual answer or additional field(s) is editable. Simply click each option to reveal the field(s) and to edit the guidance.</p>';
        } else {
          optionalTooltip = 'The question is optional. Click the switch to add or remove from DAR application form';
        }

        this.inputTooltip.setContent(this.props.toggleTooltip || optionalTooltip);
      } else {
        this.inputTooltip.disable();
      }
    }
  }, {
    key: "handleGuidanceRefChanged",
    value: function handleGuidanceRefChanged(node, content) {
      if (!this.guidanceTooltip) this.guidanceTooltip = tippy(node);
      this.guidanceTooltip.setContent(content);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var Input = inputTypes[this.props.input.type];

      if (!Input) {
        throw new Error("Winterfell: Input Type ".concat(this.props.input.type, " not defined as Winterfell Input Type"));
      }

      var conditionalItems = [];
      getConditionalQuestions(this.props).forEach(function (option) {
        return [].forEach.bind(option.conditionalQuestions, function (conditionalQuestion) {
          conditionalItems.push( /*#__PURE__*/React.createElement(Question, {
            key: conditionalQuestion.questionId,
            questionSetId: _this2.props.questionSetId,
            questionId: conditionalQuestion.questionId,
            question: conditionalQuestion.question,
            text: conditionalQuestion.text,
            postText: conditionalQuestion.postText,
            validateOn: conditionalQuestion.validateOn,
            validations: conditionalQuestion.validations,
            value: _this2.props.questionAnswers[conditionalQuestion.questionId],
            input: conditionalQuestion.input,
            classes: _this2.props.classes,
            nested: true,
            renderError: _this2.props.renderError,
            readOnly: _this2.props.readOnly,
            customiseView: _this2.props.customiseView,
            applicationId: _this2.props.applicationId,
            questionAnswers: _this2.props.questionAnswers,
            questionStatus: _this2.props.questionStatus,
            questionActions: _this2.props.questionActions,
            questionNotifications: _this2.props.questionNotifications,
            validationErrors: _this2.props.validationErrors,
            onAnswerChange: _this2.props.onAnswerChange,
            onQuestionFocus: _this2.props.onQuestionFocus,
            onQuestionClick: _this2.props.onQuestionClick,
            onQuestionAction: _this2.props.onQuestionAction,
            onQuestionBlur: _this2.props.onQuestionBlur,
            onKeyDown: _this2.props.onKeyDown,
            counts: conditionalQuestion.counts,
            type: "conditionalQuestion"
          }));
        })();
      }); // Get the current value. If none is set, then use
      // the default if given.

      var value = typeof this.props.value !== 'undefined' ? this.props.value : typeof this.props.input["default"] !== 'undefined' ? this.props.input["default"] : typeof this.props.questionAnswers[this.props.questionId] !== 'undefined' ? this.props.questionAnswers[this.props.questionId] : undefined;
      var questionLocked = isQuestionLocked(this.props);
      var questionOn = isQuestionOn(this.props); // Disable input

      var disabled = typeof this.props.input.disabled !== 'undefined' ? this.props.input.disabled : false; // Retrieve the validation errors for the
      // current question and map them in to
      // error-message blocks.

      var validationErrors = typeof this.props.validationErrors[this.props.questionId] !== 'undefined' ? this.props.validationErrors[this.props.questionId].map(function (error) {
        return typeof _this2.props.renderError === 'function' ? _this2.props.renderError(error, _this2.props.questionId) : /*#__PURE__*/React.createElement("div", {
          key: "".concat(_this2.props.questionId, "Error").concat(error.type),
          className: _this2.props.classes.errorMessage
        }, error.message);
      }) : [];
      var questionActions = typeof this.props.questionActions !== 'undefined' && this.props.questionActions.length > 0 ? /*#__PURE__*/React.createElement("div", {
        className: this.props.classes.actionControl
      }, this.props.questionActions.map(function (action) {
        var actionCount = 0;
        var actionClass = 'toolTipHidden';

        if (action.key === 'messages' && _this2.props.counts && _this2.props.counts.messagesCount > 0) {
          actionCount = _this2.props.counts.messagesCount;
          actionClass = _this2.props.classes.toolTip;
        } else if (action.key === 'notes' && _this2.props.counts && _this2.props.counts.notesCount > 0) {
          actionCount = _this2.props.counts.notesCount;
          actionClass = _this2.props.classes.toolTip;
        }

        if (action.key === 'guidanceEdit' && questionLocked) {
          return '';
        }

        if (action.key === 'guidanceLocked' && !questionLocked) {
          return '';
        }

        return /*#__PURE__*/React.createElement("div", {
          key: action.key,
          className: actionClass
        }, actionCount > 0 ? /*#__PURE__*/React.createElement("div", {
          className: _this2.props.classes.actionCount
        }, actionCount) : '', /*#__PURE__*/React.createElement("i", {
          className: action.icon,
          style: {
            color: action.color
          },
          onClick: function onClick(e) {
            return _this2.handleQuestionAction(e, _this2.props.questionSetId, _this2.props.questionId, action.key, _this2.props.counts);
          },
          ref: function ref(node) {
            return _this2.handleGuidanceRefChanged(node, action.toolTip);
          }
        }));
      })) : '';
      var questionNotifications = '';
      var labelId = "".concat(this.props.questionId, "-label");
      var readOnly = typeof this.props.input.readOnly !== 'undefined' ? this.props.input.readOnly : this.props.readOnly;
      var customiseLayoutStyle = {
        display: 'grid',
        gridTemplateColumns: '70px 1fr'
      };
      var field = isField(this.props.input);
      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(this.props.classes.questionWrap).concat(this.props.type === 'conditionalQuestion' ? '-nested' : '').concat(hasConditionalQuestions(this.props) ? " ".concat(this.props.classes.questionWrap, "-parent") : '').concat(field ? ' question-field' : '')
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        ref: function ref(node) {
          return _this2.handleRefChanged(node);
        },
        className: "".concat(this.props.nested ? "".concat(this.props.classes.question, " ").concat(this.props.classes.question, "-").concat(this.props.classes.nested) : this.props.classes.question).concat(this.props.customiseView ? ' question-icon' : '', "\n                        "),
        style: this.props.customiseView ? customiseLayoutStyle : null,
        onClick: function onClick(e) {
          return _this2.handleQuestionAction(e, _this2.props.questionSetId, _this2.props.questionId, questionLocked ? 'guidanceLocked' : 'guidanceEdit', _this2.props.counts);
        }
      }, this.props.customiseView && this.props.type !== 'conditionalQuestion' ? /*#__PURE__*/React.createElement("div", null, questionLocked ? /*#__PURE__*/React.createElement("i", {
        className: "fas fa-lock",
        style: {
          color: '#868e96',
          fontSize: '26px'
        }
      }) : /*#__PURE__*/React.createElement("span", {
        className: "question-switch"
      }, /*#__PURE__*/React.createElement(Switch, {
        checked: questionOn,
        className: "react-switch",
        onChange: this.handleSwitchChange.bind(this, this.props.questionId)
      }))) : /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null, !!this.props.question && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
        className: this.props.classes.label,
        id: labelId,
        htmlFor: this.props.questionId
      }, this.props.question, typeof this.props.renderRequiredAsterisk !== 'undefined' && this.props.input.required ? this.props.renderRequiredAsterisk() : undefined), questionNotifications), !!this.props.text && /*#__PURE__*/React.createElement("p", {
        className: this.props.classes.questionText
      }, this.props.text), validationErrors, /*#__PURE__*/React.createElement("div", {
        className: "d-flex align-items-center"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex-grow-1"
      }, /*#__PURE__*/React.createElement(Input, _extends({
        name: this.props.questionId,
        id: this.props.questionId,
        questionSetId: this.props.questionSetId,
        labelId: labelId,
        value: value,
        disabled: this.props.customiseView && (this.props.type === 'conditionalQuestion' || !hasConditionalQuestions(this.props)) || disabled,
        text: this.props.input.text,
        icon: this.props.input.icon,
        "class": this.props.input["class"],
        action: this.props.input.action,
        options: this.props.input.options,
        placeholder: this.props.input.placeholder,
        required: this.props.input.required,
        readOnly: readOnly,
        classes: this.props.classes,
        applicationId: this.props.applicationId,
        onChange: this.handleInputChange.bind(this, this.props.questionId),
        onFocus: this.handleInputFocus.bind(this, this.props.questionId),
        onClick: this.handleInputClick.bind(this, this.props.questionSetId, this.props.questionId),
        onBlur: this.handleInputBlur.bind(this, this.props.questionId),
        onKeyDown: this.props.onKeyDown
      }, _typeof(this.props.input.props) === 'object' ? this.props.input.props : {})))), !!this.props.postText && /*#__PURE__*/React.createElement("p", {
        className: this.props.classes.questionPostText
      }, this.props.postText), typeof this.props.input.questionAlert !== 'undefined' && /*#__PURE__*/React.createElement(Alert, {
        alert: this.props.input.questionAlert,
        questionSetId: this.props.questionSetId,
        questionId: this.props.questionId,
        handleQuestionAction: this.handleQuestionAction.bind(this)
      })))), /*#__PURE__*/React.createElement("div", {
        className: "question-icons"
      }, this.props.icons && this.props.icons({
        questionId: this.props.questionId,
        questionStatus: this.props.questionStatus[this.props.questionId]
      })), conditionalItems, !!this.props.question && questionActions);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof this.props.input["default"] === 'undefined' || this.props.input.type === 'checkboxInput' && typeof this.props.questionAnswers[this.props.questionId] === 'undefined') {
        return;
      }

      this.handleInputChange.call(this, this.props.questionId, this.props.input["default"]);
    }
  }]);

  return Question;
}(React.Component);

Question.defaultProps = {
  guidanceChanged: [],
  questionSetId: undefined,
  questionId: undefined,
  question: '',
  validateOn: 'blur',
  validations: [],
  text: undefined,
  postText: undefined,
  value: undefined,
  input: {
    "default": undefined,
    type: 'textInput',
    limit: undefined,
    placeholder: undefined,
    icon: undefined,
    "class": undefined,
    action: undefined,
    disabled: undefined,
    questionAlert: undefined,
    readOnly: undefined,
    applicationId: ''
  },
  classes: {},
  questionAnswers: {},
  questionStatus: {},
  questionActions: [],
  questionNotifications: [],
  validationErrors: {},
  onAnswerChange: function onAnswerChange() {},
  onQuestionBlur: function onQuestionBlur() {},
  onQuestionFocus: function onQuestionFocus() {},
  onKeyDown: function onKeyDown() {},
  renderError: undefined,
  renderRequiredAsterisk: undefined,
  readOnly: false,
  customiseView: false,
  applicationId: '',
  nested: false,
  counts: undefined
};

var QuestionSet = function QuestionSet(props) {
  var iconRef = useRef(null);

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      tooltip = _useState2[0],
      setTooltip = _useState2[1];

  var questions = props.questions.map(function (question) {
    return /*#__PURE__*/React.createElement(Question, {
      key: question.questionId,
      questionSetId: props.id,
      questionId: question.questionId,
      question: question.question,
      validateOn: question.validateOn,
      validations: question.validations,
      text: question.text,
      postText: question.postText,
      value: props.questionAnswers[question.questionId],
      input: question.input,
      nested: false,
      classes: props.classes,
      renderError: props.renderError,
      renderRequiredAsterisk: props.renderRequiredAsterisk,
      readOnly: props.readOnly,
      applicationId: props.applicationId,
      customiseView: props.customiseView,
      questionAnswers: props.questionAnswers,
      questionStatus: props.questionStatus,
      questionActions: props.questionActions,
      validationErrors: props.validationErrors,
      onSwitchChange: props.onSwitchChange,
      onAnswerChange: props.onAnswerChange,
      onQuestionBlur: props.onQuestionBlur,
      onQuestionFocus: props.onQuestionFocus,
      onQuestionClick: props.onQuestionClick,
      onQuestionAction: props.onQuestionAction,
      onKeyDown: props.onKeyDown,
      counts: question.counts,
      lockedToolTip: question.lockedToolTip,
      lockedQuestion: question.lockedQuestion,
      defaultQuestion: question.defaultQuestion,
      icons: props.icons
    });
  });
  React.useEffect(function () {
    if (iconRef === null || iconRef === void 0 ? void 0 : iconRef.current) {
      var iconTooltip = tippy(iconRef.current);
      iconTooltip.enable();
      iconTooltip.setContent('This section contains mandatory questions, so it cannot be excluded from this application');
      setTooltip(iconTooltip);
    }

    return function () {
      if (tooltip) {
        tooltip.disable();
        setTooltip(null);
      }
    };
  }, [iconRef]);
  return /*#__PURE__*/React.createElement("div", {
    className: props.classes.questionSet
  }, typeof props.questionSetHeader !== 'undefined' || typeof props.questionSetText !== 'undefined' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "".concat(props.classes.questionSetHeaderContainer, " questionset-heading")
  }, props.questionSetHeader && /*#__PURE__*/React.createElement("h4", {
    className: props.classes.questionSetHeader
  }, props.questionSetHeader), props.questionSetText && /*#__PURE__*/React.createElement("p", {
    className: props.classes.questionSetText
  }, props.questionSetText), props.customiseView && isOptionalQuestions(props.questions, props.questionStatus) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "question-switch"
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: !!props.questionSetStatus[props.id],
    className: "react-switch",
    onChange: function onChange(e) {
      return props.onQuestionsetSwitchChange(e, props.id);
    }
  }), "This section is optional")), props.customiseView && !isOptionalQuestions(props.questions, props.questionStatus) && /*#__PURE__*/React.createElement("div", {
    className: "question-switch"
  }, "This section must be included", /*#__PURE__*/React.createElement("i", {
    className: "far fa-question-circle",
    ref: iconRef
  }))), props.customiseView && isOptionalQuestions(props.questions, props.questionStatus) && /*#__PURE__*/React.createElement("div", {
    className: "question-wrap"
  }, props.messageOptionalQuestionSet({
    on: !!props.questionSetStatus[props.id]
  }))) : undefined, questions);
};

QuestionSet.defaultProps = {
  id: undefined,
  name: '',
  questionSetHeader: undefined,
  questionSetText: undefined,
  questions: [],
  questionAnswers: {},
  questionStatus: {},
  questionActions: [],
  classes: {},
  validationErrors: {},
  renderError: undefined,
  renderRequiredAsterisk: undefined,
  readOnly: false,
  customiseView: false,
  onSwitchChange: function onSwitchChange() {},
  applicationId: '',
  onAnswerChange: function onAnswerChange() {},
  onQuestionBlur: function onQuestionBlur() {},
  onQuestionFocus: function onQuestionFocus() {},
  onQuestionClick: function onQuestionClick() {},
  onQuestionAction: function onQuestionAction() {},
  onKeyDown: function onKeyDown() {},
  onQuestionsetSwitchChange: function onQuestionsetSwitchChange() {}
};

var QuestionPanel = /*#__PURE__*/function (_React$Component) {
  _inherits(QuestionPanel, _React$Component);

  var _super = _createSuper(QuestionPanel);

  function QuestionPanel(props) {
    var _this;

    _classCallCheck(this, QuestionPanel);

    _this = _super.call(this, props);
    _this.state = {
      validationErrors: _this.props.validationErrors
    };
    return _this;
  }

  _createClass(QuestionPanel, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        validationErrors: nextProps.validationErrors
      });
    }
  }, {
    key: "handleAnswerValidate",
    value: function handleAnswerValidate(questionId, questionAnswer, validations) {
      var _this2 = this;

      if (typeof validations === 'undefined' || validations.length === 0 || this.props.disableValidation) {
        return;
      }
      /*
       * Run the question through its validations and
       * show any error messages if invalid.
       */


      var questionValidationErrors = [];
      validations.forEach(function (validation) {
        if (Validation.validateAnswer(questionAnswer, validation, _this2.props.questionAnswers)) {
          return;
        }

        questionValidationErrors.push({
          type: validation.type,
          message: errorMessages.getErrorMessage(validation)
        });
      });

      var validationErrors = _.chain(this.state.validationErrors).set(questionId, questionValidationErrors).value();

      this.setState({
        validationErrors: validationErrors
      });
    }
  }, {
    key: "handleMainButtonClick",
    value: function handleMainButtonClick() {
      var _this3 = this;

      var action = this.props.action["default"];
      var conditions = this.props.action.conditions || [];
      /*
       * We need to get all the question sets for this panel.
       * Collate a list of the question set IDs required
       * and run through the schema to grab the question sets.
       */

      var questionSetIds = this.props.questionSets.map(function (qS) {
        return qS.questionSetId;
      });

      var questionSets = _.chain(this.props.schema.questionSets).filter(function (qS) {
        return questionSetIds.indexOf(qS.questionSetId) > -1;
      }).value();
      /*
       * Get any incorrect fields that need error messages.
       */


      var invalidQuestions = Validation.getQuestionPanelInvalidQuestions(questionSets, this.props.questionAnswers);
      /*
       * If the panel isn't valid...
       */

      if (Object.keys(invalidQuestions).length > 0) {
        var validationErrors = _.mapValues(invalidQuestions, function (validations) {
          return validations.map(function (validation) {
            return {
              type: validation.type,
              message: errorMessages.getErrorMessage(validation)
            };
          });
        });

        this.setState({
          validationErrors: validationErrors
        });
        return;
      }
      /*
       * Panel is valid. So what do we do next?
       * Check our conditions and act upon them, or the default.
       */


      conditions.forEach(function (condition) {
        var answer = _this3.props.questionAnswers[condition.questionId];
        action = answer == condition.value ? {
          action: condition.action,
          target: condition.target
        } : action;
      });
      /*
       * Decide which action to take depending on
       * the action decided upon.
       */

      switch (action.action) {
        case 'GOTO':
          this.props.onSwitchPanel(action.target);
          break;

        case 'SUBMIT':
          this.props.onSubmit(action.target);
          break;
      }
    }
  }, {
    key: "handleBackButtonClick",
    value: function handleBackButtonClick() {
      if (this.props.panelHistory.length == 0) {
        return;
      }

      this.props.onPanelBack();
    }
  }, {
    key: "handleAnswerChange",
    value: function handleAnswerChange(questionId, questionAnswer, validations, validateOn) {
      this.props.onAnswerChange(questionId, questionAnswer);
      this.setState({
        validationErrors: _.chain(this.state.validationErrors).set(questionId, []).value()
      });

      if (validateOn === 'change') {
        this.handleAnswerValidate(questionId, questionAnswer, validations);
      }
    }
  }, {
    key: "handleQuestionBlur",
    value: function handleQuestionBlur(questionId, questionAnswer, validations, validateOn) {
      if (validateOn === 'blur') {
        this.handleAnswerValidate(questionId, questionAnswer, validations);
      }
    }
  }, {
    key: "handleQuestionFocus",
    value: function handleQuestionFocus(questionId) {
      this.props.onQuestionFocus(questionId);
    }
  }, {
    key: "handleQuestionClick",
    value: function handleQuestionClick(questionSetId, questionId) {
      this.props.onQuestionClick(questionSetId, questionId);
    }
  }, {
    key: "handleQuestionAction",
    value: function handleQuestionAction(e, questionSetId, questionId, key, counts) {
      this.props.onQuestionAction(e, questionSetId, questionId, key, counts);
    }
  }, {
    key: "handleInputKeyDown",
    value: function handleInputKeyDown(e) {
      if (KeyCodez[e.keyCode] === 'enter') {
        e.preventDefault();
        this.handleMainButtonClick.call(this);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var questionSets = this.props.questionSets.map(function (questionSetMeta) {
        var questionSet = _.find(_this4.props.schema.questionSets, {
          questionSetId: questionSetMeta.questionSetId
        });

        if (!questionSet) {
          return undefined;
        }

        return /*#__PURE__*/React.createElement(QuestionSet, {
          key: questionSet.questionSetId,
          id: questionSet.questionSetId,
          name: questionSet.name,
          questionSetHeader: questionSet.questionSetHeader,
          questionSetText: questionSet.questionSetText,
          questions: questionSet.questions,
          classes: _this4.props.classes,
          questionAnswers: _this4.props.questionAnswers,
          questionStatus: _this4.props.questionStatus,
          questionSetStatus: _this4.props.questionSetStatus,
          questionActions: _this4.props.questionActions,
          renderError: _this4.props.renderError,
          renderRequiredAsterisk: _this4.props.renderRequiredAsterisk,
          readOnly: _this4.props.readOnly,
          messageOptionalQuestionSet: _this4.props.messageOptionalQuestionSet,
          applicationId: _this4.props.applicationId,
          customiseView: _this4.props.customiseView,
          validationErrors: _this4.state.validationErrors,
          onSwitchChange: _this4.props.onSwitchChange,
          onQuestionsetSwitchChange: _this4.props.onQuestionsetSwitchChange,
          exclude: questionSet.exclude,
          onAnswerChange: _this4.handleAnswerChange.bind(_this4),
          onQuestionFocus: _this4.handleQuestionFocus.bind(_this4),
          onQuestionClick: _this4.handleQuestionClick.bind(_this4),
          onQuestionAction: _this4.handleQuestionAction.bind(_this4),
          onQuestionBlur: _this4.handleQuestionBlur.bind(_this4),
          onKeyDown: _this4.handleInputKeyDown.bind(_this4),
          icons: _this4.props.icons
        });
      });
      return /*#__PURE__*/React.createElement("div", {
        className: this.props.classes.questionPanel
      }, typeof this.props.panelHeader !== 'undefined' || typeof this.props.panelText !== 'undefined' ? /*#__PURE__*/React.createElement("div", {
        className: this.props.classes.questionPanelHeaderContainer
      }, typeof this.props.panelHeader !== 'undefined' ? /*#__PURE__*/React.createElement("h3", {
        className: this.props.classes.questionPanelHeaderText
      }, this.props.panelHeader) : undefined, typeof this.props.panelText !== 'undefined' ? /*#__PURE__*/React.createElement("p", {
        className: this.props.classes.questionPanelText
      }, this.props.panelText) : undefined) : undefined, /*#__PURE__*/React.createElement("div", {
        className: this.props.classes.questionSets
      }, questionSets), /*#__PURE__*/React.createElement("div", {
        className: this.props.classes.buttonBar
      }, this.props.panelHistory.length > 1 && !this.props.backButton.disabled ? /*#__PURE__*/React.createElement(Button, {
        text: this.props.backButton.text || 'Back',
        onClick: this.handleBackButtonClick.bind(this),
        className: this.props.classes.backButton
      }) : undefined, !this.props.button.disabled ? /*#__PURE__*/React.createElement(Button, {
        text: this.props.button.text,
        onClick: this.handleMainButtonClick.bind(this),
        className: this.props.classes.controlButton
      }) : undefined));
    }
  }]);

  return QuestionPanel;
}(React.Component);

QuestionPanel.defaultProps = {
  validationErrors: {},
  schema: {},
  classes: {},
  panelId: undefined,
  panelIndex: undefined,
  panelHeader: undefined,
  panelText: undefined,
  action: {
    "default": {},
    conditions: []
  },
  button: {
    text: 'Submit'
  },
  backButton: {
    text: 'Back'
  },
  questionSets: [],
  questionAnswers: {},
  questionStatus: {},
  questionActions: [],
  renderError: undefined,
  renderRequiredAsterisk: undefined,
  readOnly: false,
  applicationId: '',
  customiseView: false,
  disableValidation: false,
  onSwitchChange: function onSwitchChange() {},
  onAnswerChange: function onAnswerChange() {},
  onQuestionFocus: function onQuestionFocus() {},
  onQuestionClick: function onQuestionClick() {},
  onQuestionAction: function onQuestionAction() {},
  onSwitchPanel: function onSwitchPanel() {},
  onPanelBack: function onPanelBack() {},
  panelHistory: []
};

var Winterfell = /*#__PURE__*/function (_React$Component) {
  _inherits(Winterfell, _React$Component);

  var _super = _createSuper(Winterfell);

  function Winterfell(props) {
    var _this;

    _classCallCheck(this, Winterfell);

    _this = _super.call(this, props);
    _this.formComponent = null;
    _this.panelHistory = [];

    var schema = _.extend({
      classes: {},
      formPanels: [],
      questionPanels: [],
      questionSets: [],
      questionActions: []
    }, props.schema);

    schema.formPanels = schema.formPanels.sort(function (a, b) {
      return a.index > b.index;
    });
    var panelId = typeof props.panelId !== 'undefined' ? props.panelId : schema.formPanels.length > 0 ? schema.formPanels[0].panelId : undefined;
    var currentPanel = typeof schema !== 'undefined' && typeof schema.formPanels !== 'undefined' && typeof panelId !== 'undefined' ? _.find(schema.formPanels, function (panel) {
      return panel.panelId == panelId;
    }) : undefined;

    if (!currentPanel) {
      throw new Error('Winterfell: Could not find initial panel and failed to render.');
    }

    _this.state = {
      schema: schema,
      currentPanel: currentPanel,
      action: props.action,
      questionAnswers: props.questionAnswers,
      panelId: props.panelId,
      validationErrors: props.validationErrors
    };
    return _this;
  }

  _createClass(Winterfell, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (typeof nextProps.panelId !== 'undefined') {
        this.setState({
          action: nextProps.action,
          schema: nextProps.schema,
          questionAnswers: nextProps.questionAnswers,
          panelId: nextProps.panelId,
          validationErrors: nextProps.validationErrors
        });

        var panel = _.find(this.props.schema.formPanels, {
          panelId: nextProps.panelId
        });

        if (panel) {
          this.setState({
            currentPanel: panel
          }, this.props.onSwitchPanel.bind(null, panel));
        }
      } else {
        this.setState({
          action: nextProps.action,
          schema: nextProps.schema,
          validationErrors: nextProps.validationErrors,
          questionAnswers: nextProps.questionAnswers
        });
      }
    }
  }, {
    key: "handleAnswerChange",
    value: function handleAnswerChange(questionId, questionAnswer) {
      var questionAnswers = _.chain(this.state.questionAnswers).set(questionId, questionAnswer).value();

      this.setState({
        questionAnswers: questionAnswers
      }, this.props.onUpdate.bind(null, questionId, questionAnswers));
    }
  }, {
    key: "handleSwitchPanel",
    value: function handleSwitchPanel(panelId, preventHistory) {
      var panel = _.find(this.props.schema.formPanels, {
        panelId: panelId
      });

      if (!panel) {
        throw new Error("Winterfell: Tried to switch to panel \"".concat(panelId, "\", which does not exist."));
      }

      if (!preventHistory) {
        this.panelHistory.push(panel.panelId);
      }

      this.setState({
        currentPanel: panel
      }, this.props.onSwitchPanel.bind(null, panel));
    }
  }, {
    key: "handleBackButtonClick",
    value: function handleBackButtonClick() {
      this.panelHistory.pop();
      this.handleSwitchPanel.call(this, this.panelHistory[this.panelHistory.length - 1], true);
    }
  }, {
    key: "handleQuestionFocus",
    value: function handleQuestionFocus(questionId) {
      this.props.onQuestionFocus(questionId);
    }
  }, {
    key: "handleQuestionClick",
    value: function handleQuestionClick(questionSetId, questionId) {
      this.props.onQuestionClick(questionSetId, questionId);
    }
  }, {
    key: "handleQuestionAction",
    value: function handleQuestionAction(e, questionSetId, questionId, key, counts) {
      this.props.onQuestionAction(e, questionSetId, questionId, key, counts);
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(action) {
      var _this2 = this;

      if (this.props.disableSubmit) {
        this.props.onSubmit(this.state.questionAnswers, action);
        return;
      }
      /*
       * If we are not disabling the functionality of the form,
       * we need to set the action provided in the form, then submit.
       */


      this.setState({
        action: action
      }, function () {
        if (!_this2.formComponent) {
          return;
        }

        _this2.formComponent.submit();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var currentPanel = _.find(this.state.schema.questionPanels, function (panel) {
        return panel.panelId == _this3.state.currentPanel.panelId;
      });

      return /*#__PURE__*/React.createElement("form", {
        method: this.props.method,
        encType: this.props.encType,
        action: this.state.action,
        ref: function ref(_ref) {
          return _this3.formComponent = _ref;
        },
        className: this.state.schema.classes.form
      }, /*#__PURE__*/React.createElement("div", {
        className: this.state.schema.classes.questionPanels
      }, /*#__PURE__*/React.createElement(QuestionPanel, {
        schema: this.state.schema,
        classes: this.state.schema.classes,
        panelId: currentPanel.panelId,
        panelIndex: currentPanel.panelIndex,
        panelHeader: currentPanel.panelHeader,
        panelText: currentPanel.panelText,
        action: currentPanel.action,
        button: currentPanel.button,
        backButton: currentPanel.backButton,
        questionSets: currentPanel.questionSets,
        questionAnswers: this.state.questionAnswers,
        questionStatus: this.props.questionStatus,
        messageOptionalQuestionSet: this.props.messageOptionalQuestionSet,
        questionSetStatus: this.props.questionSetStatus,
        questionActions: this.state.schema.questionActions,
        panelHistory: this.panelHistory,
        validationErrors: this.props.validationErrors,
        renderError: this.props.renderError,
        renderRequiredAsterisk: this.props.renderRequiredAsterisk,
        readOnly: this.props.readOnly,
        applicationId: this.props.applicationId,
        customiseView: this.props.customiseView,
        disableValidation: this.props.disableValidation,
        onQuestionFocus: this.handleQuestionFocus.bind(this),
        onQuestionClick: this.handleQuestionClick.bind(this),
        onQuestionAction: this.handleQuestionAction.bind(this),
        onSwitchChange: this.props.onSwitchChange,
        onAnswerChange: this.handleAnswerChange.bind(this),
        onPanelBack: this.handleBackButtonClick.bind(this),
        onSwitchPanel: this.handleSwitchPanel.bind(this),
        onQuestionsetSwitchChange: this.props.onQuestionsetSwitchChange,
        onSubmit: this.handleSubmit.bind(this),
        icons: this.props.icons
      })));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.panelHistory.push(this.state.currentPanel.panelId);
      this.props.onRender();
    }
  }]);

  return Winterfell;
}(React.Component);

Winterfell.inputTypes = inputTypes;
Winterfell.errorMessages = errorMessages;
Winterfell.validation = Validation$1;
Winterfell.addInputType = Winterfell.inputTypes.addInputType;
Winterfell.addInputTypes = Winterfell.inputTypes.addInputTypes;
Winterfell.addErrorMessage = Winterfell.errorMessages.addErrorMessage;
Winterfell.addErrorMessages = Winterfell.errorMessages.addErrorMessages;
Winterfell.addValidationMethod = Winterfell.validation.addValidationMethod;
Winterfell.addValidationMethods = Winterfell.validation.addValidationMethods;
Winterfell.defaultProps = {
  messageOptionalQuestionSet: null,
  questionAnswers: {},
  questionStatus: {},
  encType: 'application/x-www-form-urlencoded',
  method: 'POST',
  action: '',
  panelId: undefined,
  disableSubmit: false,
  renderError: undefined,
  renderRequiredAsterisk: undefined,
  readOnly: false,
  customiseView: false,
  validationErrors: {},
  disableValidation: false,
  applicationId: '',
  onSubmit: function onSubmit() {},
  onUpdate: function onUpdate() {},
  onSwitchPanel: function onSwitchPanel() {},
  onRender: function onRender() {},
  onQuestionFocus: function onQuestionFocus() {},
  onQuestionClick: function onQuestionClick() {},
  onQuestionAction: function onQuestionAction() {}
};

export { Winterfell as default };
