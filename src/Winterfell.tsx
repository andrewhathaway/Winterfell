/**
 * @file
 * @author Andrew Hathaway
 */
import * as React from 'react';
import { ComponentType } from 'react';

import { inputTypeRegistry } from './Registries';
import { getQuestionPanelById } from './Helpers/Schema';
import { bindNativeInputTypes } from './Helpers/InputTypes';

import { InputTypeComponent } from './Types/InputTypes';
import { WinterfellSchema } from './Types/Schema/WinterfellSchema';

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

  renderQuestionPanel(questionPanel: JSX.Element): JSX.Element;

  renderQuestionSets(questionSets: JSX.Element[]): JSX.Element;

  renderQuestions(questions: JSX.Element[]): JSX.Element;

  renderInput(input: JSX.Element): JSX.Element;

  onSwitchPanel(panelId: string): void;
}

class Winterfell extends React.Component<IWinterfellProps> {
  static defaultProps = {
    customInputTypes : {}
  };

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
            && this.props.renderQuestionPanel(<QuestionPanel questionPanel={questionPanel} />)}
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

    // Register our customer input types
    this.registerInputTypes(this.props);

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
