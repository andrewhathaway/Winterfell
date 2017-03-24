const React = require('react');
const InputTypes = require('./inputTypes');

class Question extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this, this.props.questionId);
    this.handleInputBlur = this.handleInputBlur.bind(this, this.props.questionId);
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

  getConditionalQuestions() {
    /*
     * Conditional Questions
     */
    const conditionalItems = [];

    if (typeof this.props.input.options !== 'undefined') {
      this.props.input.options
          .filter((option) => {
            if (this.props.value instanceof Array) {
              return this.props.value.indexOf(option.value) > -1;
            }

            return this.props.value === option.value;
          })
          .filter(option =>
             typeof option.conditionalQuestions !== 'undefined'
                     && option.conditionalQuestions.length > 0
          )
          .forEach(option =>
            [].forEach.bind(option.conditionalQuestions, (conditionalQuestion) => {
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

  handleInputBlur(questionId, value) {
    this.props.onQuestionBlur(
      questionId,
      value,
      this.props.validations,
      this.props.validateOn
    );
  }

  handleInputChange(questionId, value) {
    this.props.onAnswerChange(
      questionId,
      value,
      this.props.validations,
      this.props.validateOn
    );
  }

  render() {
    const Input = InputTypes[this.props.input.type];

    if (!Input) {
      throw new Error(`Winterfell: Input Type "${this.props.input.type
                      }" not defined as Winterfell Input Type`);
    }

    let value = this.props.value;

    if (typeof this.props.input.default !== 'undefined') {
      value = this.props.input.default;
    }

    const validationErrors = typeof this.props.validationErrors[this.props.questionId] !== 'undefined'
      ? this.props.validationErrors[this.props.questionId]
        .map((error) => {
          if (typeof this.props.renderError === 'function') {
            return this.props.renderError(error, this.props.questionId);
          }

          return (
            <div key={`${this.props.questionId}Error${error.type}`} className={this.props.classes.errorMessage}>
              {error.message}
            </div>);
        })
     : [];

    let extraprops = {};

    if (this.props.input.props) {
      extraprops = this.props.input.props;
    }

    const labelId = `${this.props.questionId}-label`;

    const question = (
      <div className={this.props.classes.question}>
        {this.props.question
            ? (
              <label
                className={this.props.classes.label}
                id={labelId}
                htmlFor={this.props.questionId}
              >
                {this.props.question}
                {typeof this.props.renderRequiredAsterisk !== 'undefined'
                     && this.props.input.required
                     ? this.props.renderRequiredAsterisk()
                     : undefined}
              </label>
              )
            : null}
        {this.props.text
            ? (
              <p className={this.props.classes.questionText}>
                {this.props.text}
              </p>
              )
            : null}
        {validationErrors}
        <Input
          name={this.props.questionId}
          id={this.props.questionId}
          labelId={labelId}
          value={value}
          text={this.props.input.text}
          options={this.props.input.options}
          placeholder={this.props.input.placeholder}
          required={this.props.input.required}
          classes={this.props.classes}
          onChange={this.handleInputChange}
          onBlur={this.handleInputBlur}
          onKeyDown={this.props.onKeyDown}
          {...extraprops}
        />
        {this.props.postText
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

}

Question.propTypes = {
  questionSetId: React.PropTypes.string,
  questionId: React.PropTypes.string,
  question: React.PropTypes.string,
  validateOn: React.PropTypes.string,
  validations: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      type: React.PropTypes.string
    })
  ),
  text: React.PropTypes.string,
  postText: React.PropTypes.string,
  value: React.PropTypes.any, // eslint-disable-line react/forbid-prop-types
  input: {
    default: React.PropTypes.string,
    type: React.PropTypes.string,
    limit: React.PropTypes.string,
    placeholder: React.PropTypes.string
  },
  /* eslint-disable react/forbid-prop-types */
  classes: React.PropTypes.object, // object with keys as Winterfell elements eg. question, input etc.
  questionAnswers: React.PropTypes.object, // object with keys of questionId
  validationErrors: React.PropTypes.object, // object with keys of questionId
  /* eslint-enable react/forbid-prop-types */
  onAnswerChange: React.PropTypes.func,
  onQuestionBlur: React.PropTypes.func,
  onKeyDown: React.PropTypes.func,
  renderError: React.PropTypes.string,
  renderRequiredAsterisk: React.PropTypes.func
};

Question.defaultProps = {
  questionSetId: '',
  questionId: '',
  question: '',
  validateOn: 'blur',
  validations: [],
  text: '',
  postText: '',
  value: null,
  input: {
    default: '',
    type: 'textInput',
    limit: '',
    placeholder: ''
  },
  classes: {},
  questionAnswers: {},
  validationErrors: {},
  onAnswerChange: () => {},
  onQuestionBlur: () => {},
  onKeyDown: () => {},
  renderError: '',
  renderRequiredAsterisk: undefined
};

module.exports = Question;
