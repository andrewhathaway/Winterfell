/**
 * @file
 * @author Andrew Hathaway
 */
import * as React from 'react';

import { inputTypeRegistry } from './Registries';
import { getQuestionPanelById } from './Helpers/Schema';
import { bindNativeInputTypes } from './Helpers/InputTypes';

import { RenderQuestionParam } from './Types/Index';
import { InputTypeComponent } from './Types/InputTypes';
import { WinterfellSchema } from './Types/Schema/WinterfellSchema';
import { WinterfellHistory } from './Types/WinterfellHistory';

import Button from './Components/Button';
import QuestionPanel from './Components/QuestionPanel';

export const {
  Provider,
  Consumer
} = React.createContext<IWinterfellContext>(null);

export interface IWinterfellContext extends IWinterfellProps {}

export interface IWinterfellProps {
  schema: WinterfellSchema;

  encType?: string;
  method?: string;
  action?: string;
  disableSubmit?: boolean;
  className?: string;

  currentPanelId: string;
  questionAnswers: {
    [questionId: string]: any;
  };
  customInputTypes: {
    [inputTypeName: string]: InputTypeComponent;
  };
  history: WinterfellHistory;

  renderQuestionPanel(
    questionPanel: JSX.Element,
    mainButton: JSX.Element,
    backButton?: JSX.Element
  ): JSX.Element;
  renderQuestionSets(questionSets: JSX.Element[]): JSX.Element;
  renderQuestions(
    questions: RenderQuestionParam[]
  ): JSX.Element;
  renderInput(input: JSX.Element): JSX.Element;

  onSwitchPanel(panelId: string, updateHistory?: boolean): void;
  onChange(questionId: string, value: any): void;
  onKeyDown(questionId: string): void;
  onBlur(questionId: string): void;
}

class Winterfell extends React.Component<IWinterfellProps> {
  static defaultProps = {
    customInputTypes: {}
  };

  handleBackClick(): void {
    // @todo: Removing answers from a previous panel
    // MAKE THIS AN OPTION! PROP & Schema? just prop?

    const panelHistory = [...this.props.history.panels];
    if (panelHistory.length === 0) {
      return;
    }

    panelHistory.pop();
    this.props.onSwitchPanel(panelHistory[panelHistory.length - 1], false);
  }

  render(): JSX.Element {
    const questionPanel = getQuestionPanelById(this.props.schema, this.props.currentPanelId);

    return (
      <Provider value={this.props}>
        <form
          method={this.props.method}
          encType={this.props.encType}
          action={this.props.action}
          className={this.props.className}
        >
          {questionPanel !== null
            && this.props.renderQuestionPanel(
              <QuestionPanel questionPanel={questionPanel} />,
              <div>{'Main Button'}</div>,
              typeof questionPanel.backButton !== 'undefined'
                && !questionPanel.backButton.disabled
                ? <div>{'Back Button'}</div>
                : undefined
            )}
        </form>
      </Provider>
    );
  }

  componentDidMount(): void {
    if (!this.props.schema
      || this.props.currentPanelId !== null
      || this.props.schema.formPanels.length < 1) {
        // @todo throw
      return;
    }

    // Register our standard & custom input types
    this.registerInputTypes(this.props);

    // Sort our questionPanels by index, and set the first one!
    const sortedPanels = this.props.schema.formPanels.sort((a, b) => a.index - b.index);
    this.props.onSwitchPanel(sortedPanels[0].panelId);
  }

  componentWillReceiveProps(nextProps: IWinterfellProps): void {
    this.registerInputTypes(nextProps);
  }

  registerInputTypes(props: IWinterfellProps): void {
    bindNativeInputTypes();

    Object.keys(props.customInputTypes)
      .forEach(inputTypeName =>
        inputTypeRegistry.add(inputTypeName, props.customInputTypes[inputTypeName], true));
  }
}

export default Winterfell;
