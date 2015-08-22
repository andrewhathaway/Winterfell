var React = require('react');
var _     = require('lodash');

var InputTypes = require('./inputTypes');

class Question extends React.Component {

  handleInputChange(questionId, value) {
    this.props.onAnswerChange(questionId, value, this.props.validations);
  }

  render() {
    var Input = InputTypes[this.props.input.type];
    if (!Input) {
      throw new Error('Winterfell: Input Type "' + this.props.input.type +
                      '" not defined as Winterfell Input Type');
    }

    /*
     * Conditional Questions
     */
    var conditionalItems = [];
    if (typeof this.props.input.options !== 'undefined') {
      this.props.input.options
          .filter(option => {
            return this.props.value == option.value
                     && typeof option.conditionalQuestions !== 'undefined'
                     && option.conditionalQuestions.length > 0;
          })
          .forEach(option =>
            [].forEach.bind(option.conditionalQuestions, conditionalQuestion => {
              conditionalItems.push(
                <Question key={conditionalQuestion.questionId}
                          questionSetId={this.props.questionSetId}
                          questionId={conditionalQuestion.questionId}
                          question={conditionalQuestion.question}
                          validations={conditionalQuestion.validations}
                          value={this.props.questionAnswers[conditionalQuestion.questionId]}
                          input={conditionalQuestion.input}
                          classes={this.props.classes}
                          renderError={this.props.renderError}
                          questionAnswers={this.props.questionAnswers}
                          validationErrors={this.props.validationErrors}
                          onAnswerChange={this.props.onAnswerChange.bind(this)} />
              );
            }
          )());
    }

    var value = typeof this.props.value !== 'undefined'
                  ? this.props.value
                  : typeof this.props.input.default !== 'undefined'
                      ? this.props.input.default
                      : undefined;

    var validationErrors = typeof this.props.validationErrors[this.props.questionId] !== 'undefined'
                             ? this.props.validationErrors[this.props.questionId]
                                   .map(error => {
                                     return typeof this.props.renderError === 'function'
                                              ? this.props.renderError(error, this.props.questionId)
                                              : (
                                                  <div key={this.props.questionId + 'Error' + error.type}
                                                       className={this.props.classes.errorMessage}>
                                                    {error.message}
                                                  </div>
                                                );
                                   })
                             : [];

    return (
      <div className={this.props.classes.question}>
        <label className={this.props.classes.label}>
          {this.props.question}
        </label>
        {validationErrors}
        <Input name={this.props.questionId}
               value={value}
               text={this.props.input.text}
               options={this.props.input.options}
               placeholder={this.props.input.placeholder}
               classes={this.props.classes}
               onChange={this.handleInputChange.bind(this, this.props.questionId)} />
        {conditionalItems}
      </div>
    );
  }

  componentDidMount() {
    if (typeof this.props.input.default === 'undefined') {
      return;
    }

    this.handleInputChange.call(
      this,
      this.props.questionId,
      this.props.input.default
    );
  }

};

Question.defaultProps = {
  questionSetId    : undefined,
  questionId       : undefined,
  question         : '',
  validations      : [],
  value            : undefined,
  input            : {
    default     : undefined,
    type        : 'TextInput',
    limit       : undefined,
    placeholder : undefined
  },
  classes          : {},
  questionAnswers  : {},
  validationErrors : {},
  onAnswerChange   : () => {},
  renderError      : undefined
};

module.exports = Question;