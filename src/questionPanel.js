var React = require('react');
var _     = require('lodash');

var QuestionSet = require('./questionSet');

class QuestionPanel extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      validationErrors : this.props.validationErrors
    };
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
      </div>
    );
  }

};

QuestionPanel.defaultProps = {
  validationErrors : {},
  schema           : {},
  panelId          : undefined,
  panelIndex       : undefined,
  action           : {
    default    : {},
    conditions : []
  },
  button           : {
    text : 'Submit'
  },
  questionSets     : [],
  questionAnswers  : {},
  onAnswerChange   : () => {}
};

module.exports = QuestionPanel;