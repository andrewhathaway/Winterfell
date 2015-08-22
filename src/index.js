var React = require('react');
var _     = require('lodash');

var QuestionPanel = require('./questionPanel');

class Winterfell extends React.Component {

  constructor(props) {
    super(props);

    this.panelHistory = [];

    var schema = this.props.schema; //@todo: Validate. Order things.

    var currentPanel = typeof schema !== 'undefined'
                         && typeof schema.formPanels !== 'undefined'
                         ? _.find(schema.formPanels,
                               panel => panel.panelId == this.props.panelId)
                         : undefined;


    this.state = {
      schema          : schema,
      currentPanel    : currentPanel,
      action          : this.props.action,
      questionAnswers : this.props.questionAnswers
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      action          : nextProps.action,
      schema          : nextProps.schema,
      questionAnswers : nextProps.questionAnswers
    });
  }

  handleAnswerChange(questionId, questionAnswer) {
    var questionAnswers = _.chain(this.state.questionAnswers)
                           .set(questionId, questionAnswer)
                           .value();

    this.setState({
      questionAnswers : questionAnswers,
    }, this.props.onUpdate.bind(null, questionAnswers));
  }

  handleSwitchPanel(panelId, preventHistory) {
    var panel = _.find(this.props.schema.formPanels, {
      panelId : panelId
    });

    if (!panel) {
      throw new Error('Winterfell: Tried to switch to panel "'
                      + panelId + '", which does not exist.');
    }

    if (!preventHistory) {
      this.panelHistory.push(panel.panelId);
    }

    this.setState({
      currentPanel : panel
    }, this.props.onSwitchPanel.bind(null, panel));
  }

  handleBackButtonClick() {
    this.panelHistory.pop();

    this.handleSwitchPanel.call(
      this, this.panelHistory[this.panelHistory.length - 1], true
    );
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
    this.setState({
      action : action
    }, () => {
      React.findDOMNode(this.refs[this.props.ref])
           .submit();
    });
  }

  render() {
    var currentPanel = _.find(this.state.schema.questionPanels,
                          panel => panel.panelId == this.state.currentPanel.panelId);

    return (
      <form method={this.props.method}
            encType={this.props.encType}
            action={this.state.action}
            ref={this.props.ref}
            className={this.props.formClass}>
        <div className={this.props.wrapperClass}>
          <QuestionPanel schema={this.state.schema}
                         panelId={currentPanel.panelId}
                         panelIndex={currentPanel.panelIndex}
                         action={currentPanel.action}
                         button={currentPanel.button}
                         questionSets={currentPanel.questionSets}
                         questionAnswers={this.state.questionAnswers}
                         panelHistory={this.panelHistory}
                         onAnswerChange={this.handleAnswerChange.bind(this)}
                         onPanelBack={this.handleBackButtonClick.bind(this)}
                         onSwitchPanel={this.handleSwitchPanel.bind(this)}
                         onSubmit={this.handleSubmit.bind(this)} />
        </div>
      </form>
    );
  }

  componentDidMount() {
    this.panelHistory.push(this.state.currentPanel.panelId);
    this.props.onRender();
  }

};

// @todo: Proptypes

Winterfell.defaultProps = {
  schema          : {
    formPanels     : [],
    questionPanels : [],
    questionSets   : []
  },
  encType         : 'application/x-www-form-urlencoded',
  method          : 'POST',
  action          : '',
  ref             : 'form',
  formClass       : '',
  panelId         : 'panel-1',
  wrapperClass    : '',
  questionAnswers : {},
  disableSubmit   : false,
  onSubmit        : () => {},
  onUpdate        : () => {},
  onSwitchPanel   : () => {},
  onRender        : () => {}
};

Winterfell.inputTypes    = require('./inputTypes');
Winterfell.errorMessages = require('./lib/errors');
Winterfell.validation    = require('./lib/validation');

module.exports = Winterfell;