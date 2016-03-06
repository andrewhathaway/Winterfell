'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var _ = require('lodash').noConflict();

var InputTypes = require('./inputTypes');

var Question = function (_React$Component) {
  _inherits(Question, _React$Component);

  function Question() {
    _classCallCheck(this, Question);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Question).apply(this, arguments));
  }

  _createClass(Question, [{
    key: 'handleInputChange',
    value: function handleInputChange(questionId, value) {
      this.props.onAnswerChange(questionId, value, this.props.validations, this.props.validateOn);
    }
  }, {
    key: 'handleInputBlur',
    value: function handleInputBlur(questionId, value) {
      this.props.onQuestionBlur(questionId, value, this.props.validations, this.props.validateOn);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var Input = InputTypes[this.props.input.type];
      if (!Input) {
        throw new Error('Winterfell: Input Type "' + this.props.input.type + '" not defined as Winterfell Input Type');
      }

      /*
       * Conditional Questions
       */
      var conditionalItems = [];
      if (typeof this.props.input.options !== 'undefined') {
        this.props.input.options.filter(function (option) {
          return _this2.props.value instanceof Array ? _this2.props.value.indexOf(option.value) > -1 : _this2.props.value == option.value;
        }).filter(function (option) {
          return typeof option.conditionalQuestions !== 'undefined' && option.conditionalQuestions.length > 0;
        }).forEach(function (option) {
          return [].forEach.bind(option.conditionalQuestions, function (conditionalQuestion) {
            conditionalItems.push(React.createElement(Question, { key: conditionalQuestion.questionId,
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
              renderError: _this2.props.renderError,
              questionAnswers: _this2.props.questionAnswers,
              validationErrors: _this2.props.validationErrors,
              onAnswerChange: _this2.props.onAnswerChange,
              onQuestionBlur: _this2.props.onQuestionBlur,
              onKeyDown: _this2.props.onKeyDown }));
          })();
        });
      }

      var value = typeof this.props.value !== 'undefined' ? this.props.value : typeof this.props.input.default !== 'undefined' ? this.props.input.default : undefined;

      var validationErrors = typeof this.props.validationErrors[this.props.questionId] !== 'undefined' ? this.props.validationErrors[this.props.questionId].map(function (error) {
        return typeof _this2.props.renderError === 'function' ? _this2.props.renderError(error, _this2.props.questionId) : React.createElement(
          'div',
          { key: _this2.props.questionId + 'Error' + error.type,
            className: _this2.props.classes.errorMessage },
          error.message
        );
      }) : [];

      var extraprops = {};

      if (this.props.input.props) {
        extraprops = this.props.input.props;
      }

      var labelId = this.props.questionId + '-label';

      return React.createElement(
        'div',
        { className: this.props.classes.question },
        !!this.props.question ? React.createElement(
          'label',
          { className: this.props.classes.label,
            id: labelId,
            htmlFor: this.props.questionId },
          this.props.question,
          typeof this.props.renderRequiredAsterisk !== 'undefined' && this.props.input.required ? this.props.renderRequiredAsterisk() : undefined
        ) : undefined,
        !!this.props.text ? React.createElement(
          'p',
          { className: this.props.classes.questionText },
          this.props.text
        ) : undefined,
        validationErrors,
        React.createElement(Input, _extends({ name: this.props.questionId,
          id: this.props.questionId,
          labelId: labelId,
          value: value,
          text: this.props.input.text,
          options: this.props.input.options,
          placeholder: this.props.input.placeholder,
          required: this.props.input.required,
          classes: this.props.classes,
          onChange: this.handleInputChange.bind(this, this.props.questionId),
          onBlur: this.handleInputBlur.bind(this, this.props.questionId),
          onKeyDown: this.props.onKeyDown
        }, extraprops)),
        !!this.props.postText ? React.createElement(
          'p',
          { className: this.props.classes.questionPostText },
          this.props.postText
        ) : undefined,
        conditionalItems
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (typeof this.props.input.default === 'undefined' || this.props.input.type === 'checkboxInput' && typeof this.props.questionAnswers[this.props.questionId] === 'undefined') {
        return;
      }

      this.handleInputChange.call(this, this.props.questionId, this.props.input.default);
    }
  }]);

  return Question;
}(React.Component);

;

Question.defaultProps = {
  questionSetId: undefined,
  questionId: undefined,
  question: '',
  validateOn: 'blur',
  validations: [],
  text: undefined,
  postText: undefined,
  value: undefined,
  input: {
    default: undefined,
    type: 'textInput',
    limit: undefined,
    placeholder: undefined
  },
  classes: {},
  questionAnswers: {},
  validationErrors: {},
  onAnswerChange: function onAnswerChange() {},
  onQuestionBlur: function onQuestionBlur() {},
  onKeyDown: function onKeyDown() {},
  renderError: undefined,
  renderRequiredAsterisk: undefined
};

module.exports = Question;