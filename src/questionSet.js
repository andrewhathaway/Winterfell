import React from 'react';
import _ from 'lodash';
import Question from './question';

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
                  nested={false}
                  classes={this.props.classes}
                  renderError={this.props.renderError}
                  renderRequiredAsterisk={this.props.renderRequiredAsterisk}
                  readOnly={this.props.readOnly}
                  questionAnswers={this.props.questionAnswers}
                  questionActions={this.props.questionActions}
                  validationErrors={this.props.validationErrors}
                  onAnswerChange={this.props.onAnswerChange}
                  onQuestionBlur={this.props.onQuestionBlur}
                  onQuestionFocus={this.props.onQuestionFocus}
                  onQuestionClick={this.props.onQuestionClick}
                  onQuestionAction={this.props.onQuestionAction}
                  onKeyDown={this.props.onKeyDown} 
                  counts={question.counts}/>
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
  questionActions        : [],
  classes                : {},
  validationErrors       : {},
  renderError            : undefined,
  renderRequiredAsterisk : undefined,
  readOnly               : false, 
  onAnswerChange         : () => {},
  onQuestionBlur         : () => {},
  onQuestionFocus        : () => {},
  onQuestionClick        : () => {},
  onQuestionAction        : () => {},
  onKeyDown              : () => {}
};

export default QuestionSet;