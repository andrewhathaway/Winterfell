var React = require('react');
var _     = require('lodash');

var Question = require('./question');

class QuestionSet extends React.Component {

  render() {
    var questions = this.props.questions.map(question => {
      return (
        <Question key={question.questionId}
                  questionSetId={this.props.id}
                  questionId={question.questionId}
                  question={question.question}
                  validateOn={question.validateOn}
                  validations={question.validations}
                  text={question.text}
                  postText={question.postText}
                  value={this.props.questionAnswers[question.questionId]}
                  input={question.input}
                  classes={this.props.classes}
                  renderError={this.props.renderError}
                  questionAnswers={this.props.questionAnswers}
                  validationErrors={this.props.validationErrors}
                  onAnswerChange={this.props.onAnswerChange}
                  onQuestionBlur={this.props.onQuestionBlur}
                  onKeyDown={this.props.onKeyDown} />
      );
    });

    return (
      <div className={this.props.classes.questionSet}>
        {questions}
      </div>
    );
  }

};

QuestionSet.defaultProps = {
  id               : undefined,
  name             : '',
  questions        : [],
  questionAnswers  : {},
  classes          : {},
  validationErrors : {},
  renderError      : undefined,
  onAnswerChange   : () => {},
  onQuestionBlur   : () => {},
  onKeyDown        : () => {}
};

module.exports = QuestionSet;