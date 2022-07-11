import React from 'react';
import _ from 'lodash';
import KeyCodez from 'keycodez';
import Validation from './lib/validation';
import ErrorMessages from './lib/errors';
import Button from './button';
import QuestionSet from './questionSet';

class QuestionPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            validationErrors: this.props.validationErrors,
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            validationErrors: nextProps.validationErrors,
        });
    }

    handleAnswerValidate(questionId, questionAnswer, validations) {
        if (typeof validations === 'undefined' || validations.length === 0 || this.props.disableValidation) {
            return;
        }

        /*
         * Run the question through its validations and
         * show any error messages if invalid.
         */
        const questionValidationErrors = [];
        validations.forEach(validation => {
            if (Validation.validateAnswer(questionAnswer, validation, this.props.questionAnswers)) {
                return;
            }

            questionValidationErrors.push({
                type: validation.type,
                message: ErrorMessages.getErrorMessage(validation),
            });
        });

        const validationErrors = _.chain(this.state.validationErrors).set(questionId, questionValidationErrors).value();

        this.setState({
            validationErrors,
        });
    }

    handleMainButtonClick() {
        let action = this.props.action.default;
        const conditions = this.props.action.conditions || [];

        /*
         * We need to get all the question sets for this panel.
         * Collate a list of the question set IDs required
         * and run through the schema to grab the question sets.
         */
        const questionSetIds = this.props.questionSets.map(qS => qS.questionSetId);
        const questionSets = _.chain(this.props.schema.questionSets)
            .filter(qS => questionSetIds.indexOf(qS.questionSetId) > -1)
            .value();

        /*
         * Get any incorrect fields that need error messages.
         */
        const invalidQuestions = Validation.getQuestionPanelInvalidQuestions(questionSets, this.props.questionAnswers);

        /*
         * If the panel isn't valid...
         */
        if (Object.keys(invalidQuestions).length > 0) {
            const validationErrors = _.mapValues(invalidQuestions, validations => {
                return validations.map(validation => {
                    return {
                        type: validation.type,
                        message: ErrorMessages.getErrorMessage(validation),
                    };
                });
            });

            this.setState({
                validationErrors,
            });
            return;
        }

        /*
         * Panel is valid. So what do we do next?
         * Check our conditions and act upon them, or the default.
         */
        conditions.forEach(condition => {
            const answer = this.props.questionAnswers[condition.questionId];

            action =
                answer == condition.value
                    ? {
                          action: condition.action,
                          target: condition.target,
                      }
                    : action;
        });

        /*
         * Decide which action to take depending on
         * the action decided upon.
         */
        switch (action.action) {
            case 'GOTO':
                this.props.onSwitchPanel(action.target);
                break;

            case 'SUBMIT':
                this.props.onSubmit(action.target);
                break;
        }
    }

    handleBackButtonClick() {
        if (this.props.panelHistory.length == 0) {
            return;
        }

        this.props.onPanelBack();
    }

    handleAnswerChange(questionId, questionAnswer, validations, validateOn) {
        this.props.onAnswerChange(questionId, questionAnswer);

        this.setState({
            validationErrors: _.chain(this.state.validationErrors).set(questionId, []).value(),
        });

        if (validateOn === 'change') {
            this.handleAnswerValidate(questionId, questionAnswer, validations);
        }
    }

    handleQuestionBlur(questionId, questionAnswer, validations, validateOn) {
        if (validateOn === 'blur') {
            this.handleAnswerValidate(questionId, questionAnswer, validations);
        }
    }

    handleQuestionFocus(questionId) {
        this.props.onQuestionFocus(questionId);
    }

    handleQuestionClick(questionSetId, questionId) {
        this.props.onQuestionClick(questionSetId, questionId);
    }

    handleQuestionAction(e, questionSetId, questionId, key, counts) {
        this.props.onQuestionAction(e, questionSetId, questionId, key, counts);
    }

    handleInputKeyDown(e) {
        if (KeyCodez[e.keyCode] === 'enter') {
            e.preventDefault();
            this.handleMainButtonClick.call(this);
        }
    }

    render() {
        const questionSets = this.props.questionSets.map(questionSetMeta => {
            const questionSet = _.find(this.props.schema.questionSets, {
                questionSetId: questionSetMeta.questionSetId,
            });

            if (!questionSet) {
                return undefined;
            }

            return (
                <QuestionSet
                    key={questionSet.questionSetId}
                    id={questionSet.questionSetId}
                    name={questionSet.name}
                    questionSetHeader={questionSet.questionSetHeader}
                    questionSetText={questionSet.questionSetText}
                    questions={questionSet.questions}
                    classes={this.props.classes}
                    questionAnswers={this.props.questionAnswers}
                    questionStatus={this.props.questionStatus}
                    questionSetStatus={this.props.questionSetStatus}
                    questionActions={this.props.questionActions}
                    renderError={this.props.renderError}
                    renderRequiredAsterisk={this.props.renderRequiredAsterisk}
                    readOnly={this.props.readOnly}
                    messageOptionalQuestionSet={this.props.messageOptionalQuestionSet}
                    applicationId={this.props.applicationId}
                    customiseView={this.props.customiseView}
                    validationErrors={this.state.validationErrors}
                    onSwitchChange={this.props.onSwitchChange}
                    onQuestionsetSwitchChange={this.props.onQuestionsetSwitchChange}
                    exclude={questionSet.exclude}
                    onAnswerChange={this.handleAnswerChange.bind(this)}
                    onQuestionFocus={this.handleQuestionFocus.bind(this)}
                    onQuestionClick={this.handleQuestionClick.bind(this)}
                    onQuestionAction={this.handleQuestionAction.bind(this)}
                    onQuestionBlur={this.handleQuestionBlur.bind(this)}
                    onKeyDown={this.handleInputKeyDown.bind(this)}
                    icons={this.props.icons}
                />
            );
        });

        return (
            <div className={this.props.classes.questionPanel}>
                {typeof this.props.panelHeader !== 'undefined' || typeof this.props.panelText !== 'undefined' ? (
                    <div className={this.props.classes.questionPanelHeaderContainer}>
                        {typeof this.props.panelHeader !== 'undefined' ? (
                            <h3 className={this.props.classes.questionPanelHeaderText}>{this.props.panelHeader}</h3>
                        ) : undefined}
                        {typeof this.props.panelText !== 'undefined' ? (
                            <p className={this.props.classes.questionPanelText}>{this.props.panelText}</p>
                        ) : undefined}
                    </div>
                ) : undefined}
                <div className={this.props.classes.questionSets}>{questionSets}</div>
                <div className={this.props.classes.buttonBar}>
                    {this.props.panelHistory.length > 1 && !this.props.backButton.disabled ? (
                        <Button
                            text={this.props.backButton.text || 'Back'}
                            onClick={this.handleBackButtonClick.bind(this)}
                            className={this.props.classes.backButton}
                        />
                    ) : undefined}
                    {!this.props.button.disabled ? (
                        <Button
                            text={this.props.button.text}
                            onClick={this.handleMainButtonClick.bind(this)}
                            className={this.props.classes.controlButton}
                        />
                    ) : undefined}
                </div>
            </div>
        );
    }
}

QuestionPanel.defaultProps = {
    validationErrors: {},
    schema: {},
    classes: {},
    panelId: undefined,
    panelIndex: undefined,
    panelHeader: undefined,
    panelText: undefined,
    action: {
        default: {},
        conditions: [],
    },
    button: {
        text: 'Submit',
    },
    backButton: {
        text: 'Back',
    },
    questionSets: [],
    questionAnswers: {},
    questionStatus: {},
    questionActions: [],
    renderError: undefined,
    renderRequiredAsterisk: undefined,
    readOnly: false,
    applicationId: '',
    customiseView: false,
    disableValidation: false,
    onSwitchChange: () => {},
    onAnswerChange: () => {},
    onQuestionFocus: () => {},
    onQuestionClick: () => {},
    onQuestionAction: () => {},
    onSwitchPanel: () => {},
    onPanelBack: () => {},
    panelHistory: [],
};

export default QuestionPanel;
