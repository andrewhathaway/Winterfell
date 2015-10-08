var React = require('react');
var _     = require('lodash').noConflict();

var QuestionPanel = require('./questionPanel');

class Winterfell extends React.Component {

  constructor(props) {
    super(props);

    this.panelHistory = [];

    var schema = _.extend({
      classes        : {},
      formPanels     : [],
      questionPanels : [],
      questionSets   : [],
    }, this.props.schema);

    schema.formPanels = schema.formPanels
                              .sort((a, b) => a.index > b.index);

    var panelId = (typeof this.props.panelId !== 'undefined'
                     ? this.props.panelId
                     : schema.formPanels.length > 0
                         ? schema.formPanels[0].panelId
                         : undefined);

    var currentPanel = typeof schema !== 'undefined'
                         && typeof schema.formPanels !== 'undefined'
                         && typeof panelId !== 'undefined'
                         ? _.find(schema.formPanels,
                               panel => panel.panelId == panelId)
                         : undefined;

    if (!currentPanel) {
      throw new Error('Winterfell: Could not find initial panel and failed to render.');
    }

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
            className={this.state.schema.classes.form}>
        <div className={this.state.schema.classes.questionPanels}>
          <QuestionPanel schema={this.state.schema}
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
                         panelHistory={this.panelHistory}
                         renderError={this.props.renderError}
                         renderRequiredAsterisk={this.props.renderRequiredAsterisk}
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
  schema                 : {
    formPanels     : [],
    questionPanels : [],
    questionSets   : [],
    classes        : {}
  },
  questionAnswers        : {},
  ref                    : 'form',
  encType                : 'application/x-www-form-urlencoded',
  method                 : 'POST',
  action                 : '',
  panelId                : undefined,
  disableSubmit          : false,
  renderError            : undefined,
  renderRequiredAsterisk : undefined,
  onSubmit               : () => {},
  onUpdate               : () => {},
  onSwitchPanel          : () => {},
  onRender               : () => {}
};

Winterfell.inputTypes    = require('./inputTypes');
Winterfell.errorMessages = require('./lib/errors');
Winterfell.validation    = require('./lib/validation');

Winterfell.addInputType  = Winterfell.inputTypes.addInputType;
Winterfell.addInputTypes = Winterfell.inputTypes.addInputTypes;

Winterfell.addErrorMessage  = Winterfell.errorMessages.addErrorMessage;
Winterfell.addErrorMessages = Winterfell.errorMessages.addErrorMessages;

Winterfell.addValidationMethod  = Winterfell.validation.addValidationMethod;
Winterfell.addValidationMethods = Winterfell.validation.addValidationMethods;

module.exports = Winterfell;