'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var _ = require('lodash').noConflict();

var Question = require('./question');

var QuestionSet = (function (_React$Component) {
  _inherits(QuestionSet, _React$Component);

  function QuestionSet() {
    _classCallCheck(this, QuestionSet);

    _get(Object.getPrototypeOf(QuestionSet.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(QuestionSet, [{
    key: 'render',
    value: function render() {
      var _this = this;

      var questions = this.props.questions.map(function (question) {
        return React.createElement(Question, { key: question.questionId,
          questionSetId: _this.props.id,
          questionId: question.questionId,
          question: question.question,
          validateOn: question.validateOn,
          validations: question.validations,
          text: question.text,
          postText: question.postText,
          value: _this.props.questionAnswers[question.questionId],
          input: question.input,
          classes: _this.props.classes,
          renderError: _this.props.renderError,
          renderRequiredAsterisk: _this.props.renderRequiredAsterisk,
          questionAnswers: _this.props.questionAnswers,
          validationErrors: _this.props.validationErrors,
          onAnswerChange: _this.props.onAnswerChange,
          onQuestionBlur: _this.props.onQuestionBlur,
          onKeyDown: _this.props.onKeyDown });
      });

      return React.createElement(
        'div',
        { className: this.props.classes.questionSet },
        typeof this.props.questionSetHeader !== 'undefined' || typeof this.props.questionSetText !== 'undefined' ? React.createElement(
          'div',
          { className: this.props.classes.questionSetHeaderContainer },
          typeof this.props.questionSetHeader !== 'undefined' ? React.createElement(
            'h4',
            { className: this.props.classes.questionSetHeader },
            this.props.questionSetHeader
          ) : undefined,
          typeof this.props.questionSetText !== 'undefined' ? React.createElement(
            'p',
            { className: this.props.classes.questionSetText },
            this.props.questionSetText
          ) : undefined
        ) : undefined,
        questions
      );
    }
  }]);

  return QuestionSet;
})(React.Component);

;

QuestionSet.defaultProps = {
  id: undefined,
  name: '',
  questionSetHeader: undefined,
  questionSetText: undefined,
  questions: [],
  questionAnswers: {},
  classes: {},
  validationErrors: {},
  renderError: undefined,
  renderRequiredAsterisk: undefined,
  onAnswerChange: function onAnswerChange() {},
  onQuestionBlur: function onQuestionBlur() {},
  onKeyDown: function onKeyDown() {}
};

module.exports = QuestionSet;