import React from 'react';
import _ from 'lodash';
import SwitchComponent from './components/Switch';
import Question from './question';
import { isOptionalQuestions } from './lib/utils';

class QuestionSet extends React.Component {
    render() {
        console.log('This.props', this.props.included);
        const questions = this.props.questions.map(question => {
            return (
                <Question
                    key={question.questionId}
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
                    applicationId={this.props.applicationId}
                    customiseView={this.props.customiseView}
                    questionAnswers={this.props.questionAnswers}
                    questionStatus={this.props.questionStatus}
                    questionActions={this.props.questionActions}
                    validationErrors={this.props.validationErrors}
                    onSwitchChange={this.props.onSwitchChange}
                    onAnswerChange={this.props.onAnswerChange}
                    onQuestionBlur={this.props.onQuestionBlur}
                    onQuestionFocus={this.props.onQuestionFocus}
                    onQuestionClick={this.props.onQuestionClick}
                    onQuestionAction={this.props.onQuestionAction}
                    onKeyDown={this.props.onKeyDown}
                    counts={question.counts}
                    lockedToolTip={question.lockedToolTip}
                    lockedQuestion={question.lockedQuestion}
                    defaultQuestion={question.defaultQuestion}
                    icons={this.props.icons}
                />
            );
        });

        return (
            <div className={this.props.classes.questionSet}>
                {typeof this.props.questionSetHeader !== 'undefined' || typeof this.props.questionSetText !== 'undefined' ? (
                    <div className={`${this.props.classes.questionSetHeaderContainer} questionset-heading`}>
                        {this.props.questionSetHeader && (
                            <h4 className={this.props.classes.questionSetHeader}>{this.props.questionSetHeader}</h4>
                        )}

                        {this.props.questionSetText && <p className={this.props.classes.questionSetText}>{this.props.questionSetText}</p>}

                        {this.props.customiseView && isOptionalQuestions(this.props.questions, this.props.questionStatus) && (
                            <SwitchComponent
                                checked={!!this.props.questionSetStatus[this.props.id]}
                                className='react-switch'
                                onChange={e => this.props.onQuestionsetSwitchChange(e, this.props.id)}
                            />
                        )}
                    </div>
                ) : undefined}
                {questions}
            </div>
        );
    }
}

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
    onSwitchChange: () => {},
    applicationId: '',
    onAnswerChange: () => {},
    onQuestionBlur: () => {},
    onQuestionFocus: () => {},
    onQuestionClick: () => {},
    onQuestionAction: () => {},
    onKeyDown: () => {},
    onQuestionsetSwitchChange: () => {},
};

export default QuestionSet;
