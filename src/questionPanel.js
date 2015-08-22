var React = require('react');
var _     = require('lodash');

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
                       onAnswerChange={this.props.onAnswerChange} />
        </div>
      );
    });

    return (
      <div>
        {questionSets}
        <div className={this.props.buttonBarClassName}>
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
  buttonBarClassName : ''
};

module.exports = QuestionPanel;