var React = require('react');
var _     = require('lodash');

var Validation    = require('./lib/validation');
var ErrorMessages = require('./lib/errors');

var Button      = require('./button');
var QuestionSet = require('./questionSet');

class QuestionPanel extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      validationErrors : this.props.validationErrors
    };
  }

  handleMainButtonClick() {
    var action     = this.props.action.default;
    var conditions = this.props.action.conditions || [];

    /*
     * We need to get all the question sets for this panel.
     * Collate a list of the question set IDs required
     * and run through the schema to grab the question sets.
     */
    var questionSetIds = this.props.questionSets.map(qS => qS.questionSetId);
    var questionSets   = _.chain(this.props.schema.questionSets)
                          .filter(qS => questionSetIds.indexOf(qS.questionSetId) > -1)
                          .value();

    /*
     * Get any incorrect fields that need erorr messages.
     */
    var invalidQuestions = Validation.getQuestionPanelInvalidQuestions(
      questionSets, this.props.questionAnswers, this.state.validationErrors
    );

    /*
     * If the panel isn't valid...
     */
    if (Object.keys(invalidQuestions).length > 0) {
      var validationErrors = _.mapValues(invalidQuestions, validations => {
        return validations.map(validation => {
          return {
            type    : validation.type,
            message : ErrorMessages.getErrorMessage(validation)
          };
        })
      });

      this.setState({
        validationErrors : validationErrors
      });
      return;
    }

    // if (!Validation.getQuestionPanelInvalidQuestions(
    //       questionSets,
    //       this.props.questionAnswers,
    //       this.state.validationErrors)) {
    //   console.log('invalid panel');
    //   return;
    // }
    // console.log('good');
    // return;
    /*
     * Panel is valid. So what do we do next?
     * Check our conditions and act upon them, or the default.
     */
    conditions
      .forEach(condition => {
        var answer = this.props.questionAnswers[condition.questionId];

        action = answer == condition.value
                   ? {
                       action : condition.action,
                       target : condition.target
                     }
                   : action;
      });

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

  handleAnswerChange(questionId, questionAnswer, validations) {
    this.props.onAnswerChange(questionId, questionAnswer);

    if (typeof validations === 'undefined'
         || validations.length === 0) {
      return;
    }

    var questionValidationErrors = [];
    validations
      .forEach(validation => {
        if (Validation.validateAnswer(questionAnswer, validation)) {
          return;
        }

        questionValidationErrors.push({
          type    : validation.type,
          message : ErrorMessages.getErrorMessage(validation)
        });
      });

    var validationErrors = _.chain(this.state.validationErrors)
                            .set(questionId, questionValidationErrors)
                            .value();

    this.setState({
      validationErrors : validationErrors
    });
  }

  render() {
    var questionSets = this.props.questionSets.map(questionSetMeta => {
      var questionSet = _.find(this.props.schema.questionSets, {
        questionSetId : questionSetMeta.questionSetId
      });

      if (!questionSet) {
        return undefined;
      }

      return (
        <div key={questionSet.questionSetId}>
          <QuestionSet id={questionSet.questionSetId}
                       name={questionSet.name}
                       questions={questionSet.questions}
                       questionAnswers={this.props.questionAnswers}
                       validationErrors={this.state.validationErrors}
                       onAnswerChange={this.handleAnswerChange.bind(this)} />
        </div>
      );
    });

    return (
      <div>
        {questionSets}
        <div className={this.props.buttonBarClassName}>
          {this.props.panelHistory.length > 1
            ? (
                <Button text={this.props.backButtonText}
                        onClick={this.handleBackButtonClick.bind(this)} />
              )
            : undefined}
          <Button text={this.props.button.text}
                  onClick={this.handleMainButtonClick.bind(this)} />
        </div>
      </div>
    );
  }

};

QuestionPanel.defaultProps = {
  validationErrors   : {},
  schema             : {},
  panelId            : undefined,
  panelIndex         : undefined,
  action             : {
    default    : {},
    conditions : []
  },
  button             : {
    text : 'Submit'
  },
  questionSets       : [],
  questionAnswers    : {},
  onAnswerChange     : () => {},
  onSwitchPanel      : () => {},
  onPanelBack        : () => {},
  buttonBarClassName : '',
  panelHistory       : [],
  backButtonText     : 'Back'
};

module.exports = QuestionPanel;