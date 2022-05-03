import React, { Fragment } from 'react';
import _ from 'lodash';
import Alert from './components/Alert';
import SwitchComponent from './components/Switch';
import inputTypes from './inputTypes/index';

const isQuestionLocked = ({ questionStatus, questionId }) => {
    return questionStatus[questionId] === 2;
};

const isQuestionStatus = ({ questionStatus, questionId }) => {
    return questionStatus[questionId] === 1;
};

const isField = ({ type }) => {
    return type === 'emailInput' || type === 'fileInput' || type === 'selectInput' || type === 'textInput' || type === 'passwordInput';
};

class Question extends React.Component {
    handleInputChange(questionId, value) {
        this.props.onAnswerChange(questionId, value, this.props.validations, this.props.validateOn);
    }

    handleSwitchChange(questionId, value) {
        this.props.onSwitchChange(questionId, value, this.props.validations, this.props.validateOn);
    }

    handleInputBlur(questionId, value) {
        this.props.onQuestionBlur(questionId, value, this.props.validations, this.props.validateOn);
    }

    handleInputFocus(questionId) {
        this.props.onQuestionFocus(questionId);
    }

    handleInputClick(questionSetId, questionId) {
        this.props.onQuestionClick(questionSetId, questionId);
    }

    handleQuestionAction(e, questionSetId = '', questionId = '', key = '', counts = {}) {
        e.preventDefault();
        this.props.onQuestionAction(e, questionSetId, questionId, key, counts);
    }

    handleRefChanged(node) {
        if (isQuestionLocked(this.props)) {
            tippy(node, {
                content: this.props.lockedToolTip || 'This question is mandatory for all applicants and cannot be excluded',
            });
        }
    }

    handleGuidanceRefChanged(node, content) {
        tippy(node, {
            content,
        });
    }

    render() {
        var Input = inputTypes[this.props.input.type];
        if (!Input) {
            throw new Error('Winterfell: Input Type "' + this.props.input.type + '" not defined as Winterfell Input Type');
        }

        /*
         * Conditional Questions
         *
         * Go through the inputs options and filter them down
         * to options where the value matches the current questions
         * value. If we have conditional questions on a given option,
         * then render this component with the props for the conditional
         * question.
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
                    return typeof option.conditionalQuestions !== 'undefined' && option.conditionalQuestions.length > 0;
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
                                nested={true}
                                renderError={this.props.renderError}
                                readOnly={this.props.readOnly}
                                customiseView={this.props.customiseView}
                                applicationId={this.props.applicationId}
                                questionAnswers={this.props.questionAnswers}
                                questionStatus={this.props.questionStatus}
                                questionActions={this.props.questionActions}
                                questionNotifications={this.props.questionNotifications}
                                validationErrors={this.props.validationErrors}
                                onAnswerChange={this.props.onAnswerChange}
                                onQuestionFocus={this.props.onQuestionFocus}
                                onQuestionClick={this.props.onQuestionClick}
                                onQuestionAction={this.props.onQuestionAction}
                                onQuestionBlur={this.props.onQuestionBlur}
                                onKeyDown={this.props.onKeyDown}
                                counts={conditionalQuestion.counts}
                                type='conditionalQuestion'
                            />
                        );
                    })()
                );
        }

        // Get the current value. If none is set, then use
        // the default if given.
        var value =
            typeof this.props.value !== 'undefined'
                ? this.props.value
                : typeof this.props.input.default !== 'undefined'
                ? this.props.input.default
                : typeof this.props.questionAnswers[this.props.questionId] !== 'undefined'
                ? this.props.questionAnswers[this.props.questionId]
                : undefined;

        let questionLocked = isQuestionLocked(this.props);
        let questionStatus = isQuestionStatus(this.props);

        // Disable input
        var disabled = typeof this.props.input.disabled !== 'undefined' ? this.props.input.disabled : false;

        // Retrieve the validation errors for the
        // current question and map them in to
        // error-message blocks.
        var validationErrors =
            typeof this.props.validationErrors[this.props.questionId] !== 'undefined'
                ? this.props.validationErrors[this.props.questionId].map(error => {
                      return typeof this.props.renderError === 'function' ? (
                          this.props.renderError(error, this.props.questionId)
                      ) : (
                          <div key={this.props.questionId + 'Error' + error.type} className={this.props.classes.errorMessage}>
                              {error.message}
                          </div>
                      );
                  })
                : [];

        var questionActions =
            typeof this.props.questionActions !== 'undefined' && this.props.questionActions.length > 0 ? (
                <div className={this.props.classes.actionControl}>
                    {this.props.questionActions.map(action => {
                        let actionCount = 0;
                        let actionClass = 'toolTipHidden';
                        if (action.key === 'messages' && this.props.counts && this.props.counts.messagesCount > 0) {
                            actionCount = this.props.counts.messagesCount;
                            actionClass = this.props.classes.toolTip;
                        } else if (action.key === 'notes' && this.props.counts && this.props.counts.notesCount > 0) {
                            actionCount = this.props.counts.notesCount;
                            actionClass = this.props.classes.toolTip;
                        }

                        if (action.key === 'guidanceEdit' && questionLocked) {
                            return '';
                        }

                        if (action.key === 'guidanceLocked' && !questionLocked) {
                            return '';
                        }

                        return (
                            <div key={action.key} className={actionClass}>
                                {actionCount > 0 ? <div className={this.props.classes.actionCount}>{actionCount}</div> : ''}
                                <i
                                    className={action.icon}
                                    style={{ color: action.color }}
                                    onClick={e =>
                                        this.handleQuestionAction(
                                            e,
                                            this.props.questionSetId,
                                            this.props.questionId,
                                            action.key,
                                            this.props.counts
                                        )
                                    }
                                    ref={node => this.handleGuidanceRefChanged(node, action.toolTip)}
                                />
                            </div>
                        );
                    })}
                </div>
            ) : (
                ''
            );

        let questionNotifications = '';
        let labelId = `${this.props.questionId}-label`;
        let readOnly = typeof this.props.input.readOnly !== 'undefined' ? this.props.input.readOnly : this.props.readOnly;

        const customiseLayoutStyle = {
            display: 'grid',
            gridTemplateColumns: '70px 1fr',
        };

        const field = isField(this.props.input);

        return (
            <div
                className={`${this.props.classes.questionWrap}${this.props.type === 'conditionalQuestion' ? '-nested' : ''}${
                    field ? ' question-field' : ''
                }`}>
                <div ref={node => this.handleRefChanged(node)}>
                    <div
                        className={`${
                            this.props.nested
                                ? `${this.props.classes.question} ${this.props.classes.question}-${this.props.classes.nested}`
                                : this.props.classes.question
                        }${this.props.customiseView ? ' question-icon' : ''}
                        `}
                        style={this.props.customiseView ? customiseLayoutStyle : null}>
                        {this.props.customiseView && this.props.type !== 'conditionalQuestion' ? (
                            <div>
                                {questionLocked ? (
                                    <i className='fas fa-lock' style={{ color: '#868e96', fontSize: '26px' }} />
                                ) : (
                                    <span className='question-switch'>
                                        <SwitchComponent
                                            checked={questionStatus}
                                            className='react-switch'
                                            onChange={this.handleSwitchChange.bind(this, this.props.questionId)}
                                        />
                                    </span>
                                )}
                            </div>
                        ) : (
                            <div />
                        )}

                        <div>
                            {!!this.props.question && (
                                <>
                                    <label className={this.props.classes.label} id={labelId} htmlFor={this.props.questionId}>
                                        {this.props.question}
                                        {typeof this.props.renderRequiredAsterisk !== 'undefined' && this.props.input.required
                                            ? this.props.renderRequiredAsterisk()
                                            : undefined}
                                    </label>
                                    {questionNotifications}
                                </>
                            )}

                            {!!this.props.text && <p className={this.props.classes.questionText}>{this.props.text}</p>}

                            {validationErrors}

                            <Input
                                name={this.props.questionId}
                                id={this.props.questionId}
                                questionSetId={this.props.questionSetId}
                                labelId={labelId}
                                value={value}
                                disabled={
                                    this.props.type === 'conditionalQuestion' || this.props.customiseView ? !questionStatus : disabled
                                }
                                text={this.props.input.text}
                                icon={this.props.input.icon}
                                class={this.props.input.class}
                                action={this.props.input.action}
                                options={this.props.input.options}
                                placeholder={this.props.input.placeholder}
                                required={this.props.input.required}
                                readOnly={readOnly}
                                classes={this.props.classes}
                                applicationId={this.props.applicationId}
                                onChange={this.handleInputChange.bind(this, this.props.questionId)}
                                onFocus={this.handleInputFocus.bind(this, this.props.questionId)}
                                onClick={this.handleInputClick.bind(this, this.props.questionSetId, this.props.questionId)}
                                onBlur={this.handleInputBlur.bind(this, this.props.questionId)}
                                onKeyDown={this.props.onKeyDown}
                                {...(typeof this.props.input.props === 'object' ? this.props.input.props : {})}
                            />

                            {!!this.props.postText && <p className={this.props.classes.questionPostText}>{this.props.postText}</p>}

                            {typeof this.props.input.questionAlert !== 'undefined' && (
                                <Alert
                                    alert={this.props.input.questionAlert}
                                    questionSetId={this.props.questionSetId}
                                    questionId={this.props.questionId}
                                    handleQuestionAction={this.handleQuestionAction.bind(this)}
                                />
                            )}
                        </div>
                    </div>
                </div>
                {conditionalItems}
                {!!this.props.question && questionActions}
            </div>
        );
    }

    componentDidMount() {
        if (
            typeof this.props.input.default === 'undefined' ||
            (this.props.input.type === 'checkboxInput' && typeof this.props.questionAnswers[this.props.questionId] === 'undefined')
        ) {
            return;
        }

        this.handleInputChange.call(this, this.props.questionId, this.props.input.default);
    }
}

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
        placeholder: undefined,
        icon: undefined,
        class: undefined,
        action: undefined,
        disabled: undefined,
        questionAlert: undefined,
        readOnly: undefined,
        applicationId: '',
    },
    classes: {},
    questionAnswers: {},
    questionStatus: {},
    questionActions: [],
    questionNotifications: [],
    validationErrors: {},
    onAnswerChange: () => {},
    onQuestionBlur: () => {},
    onQuestionFocus: () => {},
    onKeyDown: () => {},
    renderError: undefined,
    renderRequiredAsterisk: undefined,
    readOnly: false,
    customiseView: false,
    applicationId: '',
    nested: false,
    counts: undefined,
};

export default Question;
