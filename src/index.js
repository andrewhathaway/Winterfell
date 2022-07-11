import React from 'react';
import _ from 'lodash';
import QuestionPanel from './questionPanel';
import inputTypes from './inputTypes/index';
import errorMessages from './lib/errors';
import * as Validation from './lib/validation';

class Winterfell extends React.Component {
    constructor(props) {
        super(props);

        this.formComponent = null;

        this.panelHistory = [];

        const schema = _.extend(
            {
                classes: {},
                formPanels: [],
                questionPanels: [],
                questionSets: [],
                questionActions: [],
            },
            props.schema
        );

        schema.formPanels = schema.formPanels.sort((a, b) => a.index > b.index);

        const panelId =
            typeof props.panelId !== 'undefined' ? props.panelId : schema.formPanels.length > 0 ? schema.formPanels[0].panelId : undefined;

        const currentPanel =
            typeof schema !== 'undefined' && typeof schema.formPanels !== 'undefined' && typeof panelId !== 'undefined'
                ? _.find(schema.formPanels, panel => panel.panelId == panelId)
                : undefined;

        if (!currentPanel) {
            throw new Error('Winterfell: Could not find initial panel and failed to render.');
        }

        this.state = {
            schema,
            currentPanel,
            action: props.action,
            questionAnswers: props.questionAnswers,
            panelId: props.panelId,
            validationErrors: props.validationErrors,
        };
    }

    componentWillReceiveProps(nextProps) {
        if (typeof nextProps.panelId !== 'undefined') {
            this.setState({
                action: nextProps.action,
                schema: nextProps.schema,
                questionAnswers: nextProps.questionAnswers,
                panelId: nextProps.panelId,
                validationErrors: nextProps.validationErrors,
            });

            const panel = _.find(this.props.schema.formPanels, {
                panelId: nextProps.panelId,
            });

            if (panel) {
                this.setState(
                    {
                        currentPanel: panel,
                    },
                    this.props.onSwitchPanel.bind(null, panel)
                );
            }
        } else {
            this.setState({
                action: nextProps.action,
                schema: nextProps.schema,
                validationErrors: nextProps.validationErrors,
                questionAnswers: nextProps.questionAnswers,
            });
        }
    }

    handleAnswerChange(questionId, questionAnswer) {
        const questionAnswers = _.chain(this.state.questionAnswers).set(questionId, questionAnswer).value();

        this.setState(
            {
                questionAnswers,
            },
            this.props.onUpdate.bind(null, questionId, questionAnswers)
        );
    }

    handleSwitchPanel(panelId, preventHistory) {
        const panel = _.find(this.props.schema.formPanels, {
            panelId,
        });

        if (!panel) {
            throw new Error(`Winterfell: Tried to switch to panel "${panelId}", which does not exist.`);
        }

        if (!preventHistory) {
            this.panelHistory.push(panel.panelId);
        }

        this.setState(
            {
                currentPanel: panel,
            },
            this.props.onSwitchPanel.bind(null, panel)
        );
    }

    handleBackButtonClick() {
        this.panelHistory.pop();

        this.handleSwitchPanel.call(this, this.panelHistory[this.panelHistory.length - 1], true);
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

    handleSubmit(action) {
        if (this.props.disableSubmit) {
            this.props.onSubmit(this.state.questionAnswers, action);
            return;
        }

        /*
         * If we are not disabling the functionality of the form,
         * we need to set the action provided in the form, then submit.
         */
        this.setState(
            {
                action,
            },
            () => {
                if (!this.formComponent) {
                    return;
                }

                this.formComponent.submit();
            }
        );
    }

    render() {
        const currentPanel = _.find(this.state.schema.questionPanels, panel => panel.panelId == this.state.currentPanel.panelId);

        return (
            <form
                method={this.props.method}
                encType={this.props.encType}
                action={this.state.action}
                ref={ref => (this.formComponent = ref)}
                className={this.state.schema.classes.form}>
                <div className={this.state.schema.classes.questionPanels}>
                    <QuestionPanel
                        schema={this.state.schema}
                        classes={this.state.schema.classes}
                        panelId={currentPanel.panelId}
                        panelIndex={currentPanel.panelIndex}
                        panelHeader={currentPanel.panelHeader}
                        panelText={currentPanel.panelText}
                        action={currentPanel.action}
                        button={currentPanel.button}
                        backButton={currentPanel.backButton}
                        questionSets={currentPanel.questionSets}
                        questionAnswers={this.state.questionAnswers}
                        questionStatus={this.props.questionStatus}
                        messageOptionalQuestionSet={this.props.messageOptionalQuestionSet}
                        questionSetStatus={this.props.questionSetStatus}
                        questionActions={this.state.schema.questionActions}
                        panelHistory={this.panelHistory}
                        validationErrors={this.props.validationErrors}
                        renderError={this.props.renderError}
                        renderRequiredAsterisk={this.props.renderRequiredAsterisk}
                        readOnly={this.props.readOnly}
                        applicationId={this.props.applicationId}
                        customiseView={this.props.customiseView}
                        disableValidation={this.props.disableValidation}
                        onQuestionFocus={this.handleQuestionFocus.bind(this)}
                        onQuestionClick={this.handleQuestionClick.bind(this)}
                        onQuestionAction={this.handleQuestionAction.bind(this)}
                        onSwitchChange={this.props.onSwitchChange}
                        onAnswerChange={this.handleAnswerChange.bind(this)}
                        onPanelBack={this.handleBackButtonClick.bind(this)}
                        onSwitchPanel={this.handleSwitchPanel.bind(this)}
                        onQuestionsetSwitchChange={this.props.onQuestionsetSwitchChange}
                        onSubmit={this.handleSubmit.bind(this)}
                        icons={this.props.icons}
                    />
                </div>
            </form>
        );
    }

    componentDidMount() {
        this.panelHistory.push(this.state.currentPanel.panelId);
        this.props.onRender();
    }
}

Winterfell.inputTypes = inputTypes;
Winterfell.errorMessages = errorMessages;
Winterfell.validation = Validation;

Winterfell.addInputType = Winterfell.inputTypes.addInputType;
Winterfell.addInputTypes = Winterfell.inputTypes.addInputTypes;

Winterfell.addErrorMessage = Winterfell.errorMessages.addErrorMessage;
Winterfell.addErrorMessages = Winterfell.errorMessages.addErrorMessages;

Winterfell.addValidationMethod = Winterfell.validation.addValidationMethod;
Winterfell.addValidationMethods = Winterfell.validation.addValidationMethods;

Winterfell.defaultProps = {
    messageOptionalQuestionSet: null,
    questionAnswers: {},
    questionStatus: {},
    encType: 'application/x-www-form-urlencoded',
    method: 'POST',
    action: '',
    panelId: undefined,
    disableSubmit: false,
    renderError: undefined,
    renderRequiredAsterisk: undefined,
    readOnly: false,
    customiseView: false,
    validationErrors: {},
    disableValidation: false,
    applicationId: '',
    onSubmit: () => {},
    onUpdate: () => {},
    onSwitchPanel: () => {},
    onRender: () => {},
    onQuestionFocus: () => {},
    onQuestionClick: () => {},
    onQuestionAction: () => {},
};

export default Winterfell;
