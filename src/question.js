var React = require('react');
var _     = require('lodash').noConflict();

var Components = require('./components');

class Question extends React.Component {

  handleInputChange(questionId, value) {
    this.props.onAnswerChange(
      questionId,
      value,
      this.props.validations,
      this.props.validateOn
    );
  }

  handleInputBlur(questionId, value) {
    this.props.onQuestionBlur(
      questionId,
      value,
      this.props.validations,
      this.props.validateOn
    );
  }

  getConditionalQuestions() {
    /*
     * Conditional Questions
     */
    var conditionalItems = [];
    if (typeof this.props.input.options !== 'undefined') {
      this.props.input.options
          .filter(option => {
            return this.props.value instanceof Array
                     ? this.props.value.indexOf(option.value) > -1
                     : this.props.value == option.value;
          })
          .filter(option => {
            return typeof option.conditionalQuestions !== 'undefined'
                     && option.conditionalQuestions.length > 0;
          })
          .forEach(option =>
            [].forEach.bind(option.conditionalQuestions, conditionalQuestion => {
              conditionalItems.push(
                <Question 
                  key={conditionalQuestion.questionId}
                  questionSetId={this.props.questionSetId}
                  questionId={conditionalQuestion.questionId}
                  question={conditionalQuestion.question}
                  text={conditionalQuestion.text}
                  postText={conditionalQuestion.postText}
                  validateOn={conditionalQuestion.validateOn}
                  validations={conditionalQuestion.validations}
                  value={this.props.questionAnswers[conditionalQuestion.questionId]}
                  input={conditionalQuestion.input}
                  classes={this.props.classes}
                  renderError={this.props.renderError}
                  questionAnswers={this.props.questionAnswers}
                  validationErrors={this.props.validationErrors}
                  onAnswerChange={this.props.onAnswerChange}
                  onQuestionBlur={this.props.onQuestionBlur}
                  onKeyDown={this.props.onKeyDown} 
                />
              );
            }
          )());
    }

    return conditionalItems;
  }

  getLabel(labelId) {
    const Label = Components.Label || 'label';

    const props = {
      /**
       * Additional class names coming from schema
       */
      className: this.props.classes.label,

      /**
       * id for the label
       **/
      id: labelId,

      /**
       * HTML "for" attribute
       **/
      htmlFor: this.props.questionId,

      /**
       * This will indicate required field (will add asterisk to label)
       **/
      required: this.props.input.required
    }

    return (
      <Label {...props} >
       { this.props.question }
      </Label>
    )
}

  render() {
    const Input = Components[this.props.input.type];
    const labelId = `${this.props.questionId}-label`;
    const label = this.getLabel(labelId);
    if (!Input) {
      throw new Error('Winterfell: Input Type "' + this.props.input.type +
                      '" not defined as Winterfell Input Type');
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
                                                  <span key={this.props.questionId + 'Error' + error.type}
                                                       className={this.props.classes.errorMessage}>
                                                    {error.message}
                                                  </span>
                                                );
                                   })
                             : [];

    const question = (
      <div className={this.props.classes.question}>
          {!!this.props.question ? label : null}
          {!!this.props.text
            ? (
                <p className={this.props.classes.questionText}>
                  {this.props.text}
                </p>
              )
            : null}
          <Input name={this.props.questionId}
                 id={this.props.questionId}
                 labelId={labelId}
                 value={value}
                 text={this.props.input.text}
                 options={this.props.input.options}
                 placeholder={this.props.input.placeholder}
                 required={this.props.input.required}
                 classes={this.props.classes}
                 onChange={this.handleInputChange.bind(this, this.props.questionId)}
                 onBlur={this.handleInputBlur.bind(this, this.props.questionId)}
                 onKeyDown={this.props.onKeyDown}
                 hasError={!!validationErrors.length}
                 {...this.props.input.props}
          >
          {validationErrors}
          </Input>
          {!!this.props.postText
            ? (
                <p className={this.props.classes.questionPostText}>
                  {this.props.postText}
                </p>
              )
            : null}
          
        </div>
      );

    const conditionalItems = this.getConditionalQuestions();

    const output = conditionalItems.length ? (
      <div className="conditional-questions">
        {question}
        {conditionalItems}
      </div>
    ) : question;

    return (
     output
    );
  }

  componentDidMount() {
    if (typeof this.props.input.default === 'undefined'
          || (this.props.input.type === 'checkboxInput'
                && typeof this.props.questionAnswers[this.props.questionId] === 'undefined')) {
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
  questionSetId          : undefined,
  questionId             : undefined,
  question               : '',
  validateOn             : 'blur',
  validations            : [],
  text                   : undefined,
  postText               : undefined,
  value                  : undefined,
  input                  : {
    default     : undefined,
    type        : 'textInput',
    limit       : undefined,
    placeholder : undefined,
    props: {}
  },
  classes                : {},
  questionAnswers        : {},
  validationErrors       : {},
  onAnswerChange         : () => {},
  onQuestionBlur         : () => {},
  onKeyDown              : () => {},
  renderError            : undefined
};

module.exports = Question;
