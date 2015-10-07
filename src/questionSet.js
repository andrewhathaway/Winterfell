var React = require('react');
var _     = require('lodash').noConflict();

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
                  renderRequiredAsterisk={this.props.renderRequiredAsterisk}
                  questionAnswers={this.props.questionAnswers}
                  validationErrors={this.props.validationErrors}
                  onAnswerChange={this.props.onAnswerChange}
                  onQuestionBlur={this.props.onQuestionBlur}
                  onKeyDown={this.props.onKeyDown} />
      );
    });

    return (
      <div className={this.props.classes.questionSet}>
        {typeof this.props.questionSetHeader !== 'undefined'
           || typeof this.props.questionSetText !== 'undefined'
           ? (
               <div className={this.props.classes.questionSetHeaderContainer}>
                {typeof this.props.questionSetHeader !== 'undefined'
                  ? <h4 className={this.props.classes.questionSetHeader}>
                      {this.props.questionSetHeader}
                    </h4>
                  : undefined}
                {typeof this.props.questionSetText !== 'undefined'
                  ? <p className={this.props.classes.questionSetText}>
                      {this.props.questionSetText}
                    </p>
                  : undefined}
               </div>
             )
             : undefined}
        {questions}
      </div>
    );
  }

};

QuestionSet.defaultProps = {
  id                     : undefined,
  name                   : '',
  questionSetHeader      : undefined,
  questionSetText        : undefined,
  questions              : [],
  questionAnswers        : {},
  classes                : {},
  validationErrors       : {},
  renderError            : undefined,
  renderRequiredAsterisk : undefined,
  onAnswerChange         : () => {},
  onQuestionBlur         : () => {},
  onKeyDown              : () => {}
};

module.exports = QuestionSet;