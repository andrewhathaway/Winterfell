import React, { useRef, useState } from 'react';
import _ from 'lodash';
import SwitchComponent from './components/Switch';
import Question from './question';
import { isOptionalQuestions } from './lib/utils';

const QuestionSet = props => {
    const iconRef = useRef(null);
    const [tooltip, setTooltip] = useState();

    const questions = props.questions.map(question => {
        return (
            <Question
                key={question.questionId}
                questionSetId={props.id}
                questionId={question.questionId}
                question={question.question}
                validateOn={question.validateOn}
                validations={question.validations}
                text={question.text}
                postText={question.postText}
                value={props.questionAnswers[question.questionId]}
                input={question.input}
                nested={false}
                classes={props.classes}
                renderError={props.renderError}
                renderRequiredAsterisk={props.renderRequiredAsterisk}
                readOnly={props.readOnly}
                applicationId={props.applicationId}
                customiseView={props.customiseView}
                questionAnswers={props.questionAnswers}
                questionStatus={props.questionStatus}
                questionActions={props.questionActions}
                validationErrors={props.validationErrors}
                onSwitchChange={props.onSwitchChange}
                onAnswerChange={props.onAnswerChange}
                onQuestionBlur={props.onQuestionBlur}
                onQuestionFocus={props.onQuestionFocus}
                onQuestionClick={props.onQuestionClick}
                onQuestionAction={props.onQuestionAction}
                onKeyDown={props.onKeyDown}
                counts={question.counts}
                lockedToolTip={question.lockedToolTip}
                lockedQuestion={question.lockedQuestion}
                defaultQuestion={question.defaultQuestion}
                icons={props.icons}
            />
        );
    });

    React.useEffect(() => {
        if (iconRef?.current) {
            const iconTooltip = tippy(iconRef.current);
            iconTooltip.enable();

            iconTooltip.setContent('This section contains mandatory questions, so it cannot be excluded from this application');

            setTooltip(iconTooltip);
        }

        return () => {
            if (tooltip) {
                tooltip.disable();
                setTooltip(null);
            }
        };
    }, [iconRef]);

    return (
        <div className={props.classes.questionSet}>
            {typeof props.questionSetHeader !== 'undefined' || typeof props.questionSetText !== 'undefined' ? (
                <>
                    <div className={`${props.classes.questionSetHeaderContainer} questionset-heading`}>
                        {props.questionSetHeader && <h4 className={props.classes.questionSetHeader}>{props.questionSetHeader}</h4>}

                        {props.questionSetText && <p className={props.classes.questionSetText}>{props.questionSetText}</p>}

                        {props.customiseView && isOptionalQuestions(props.questions, props.questionStatus) && (
                            <>
                                <div className='question-switch'>
                                    <SwitchComponent
                                        checked={!!props.questionSetStatus[props.id]}
                                        className='react-switch'
                                        onChange={e => props.onQuestionsetSwitchChange(e, props.id)}
                                    />
                                    This section is optional
                                </div>
                            </>
                        )}
                        {props.customiseView && !isOptionalQuestions(props.questions, props.questionStatus) && (
                            <div className='question-switch'>
                                This section must be included
                                <i className='far fa-question-circle' ref={iconRef} />
                            </div>
                        )}
                    </div>
                    {props.customiseView && isOptionalQuestions(props.questions, props.questionStatus) && (
                        <div className='question-wrap'>{props.messageOptionalQuestionSet({ on: !!props.questionSetStatus[props.id] })}</div>
                    )}
                </>
            ) : undefined}
            {questions}
        </div>
    );
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
