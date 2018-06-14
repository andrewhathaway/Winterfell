/**
 * @file
 * @author Andrew Hathaway
 */
import * as React from 'react';
import { getQuestionPanelById } from './Helpers/Schema';

import {
  WinterfellSchema,
  WinterfellQuestionPanel
} from './Types/Schema/WinterfellSchema';

import QuestionPanel from './Components/QuestionPanel';

// tslint:disable-next-line:variable-name
export const {
  Provider,
  Consumer
} = React.createContext<IWinterfellContext>(null);

export interface IWinterfellContext extends IWinterfellProps {

}

export interface IWinterfellProps {
  schema: WinterfellSchema;

  encType: string;
  method: string;
  action: string;
  disableSubmit: boolean;
  className?: string;

  currentPanelId: string;
  questionAnswers: {
    [questionId: string]: any;
  };

  renderQuestionPanel(questionPanel: JSX.Element): JSX.Element;

  renderQuestionSet(questionSet: JSX.Element): JSX.Element;

  onSwitchPanel(panelId: string): void;
}

class Winterfell extends React.Component<IWinterfellProps> {
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
            && this.renderQuestionPanel(questionPanel)}
        </form>
      </Provider>
    );
  }

  renderQuestionPanel(questionPanel: WinterfellQuestionPanel): JSX.Element {
    const questionPanelComponent = <QuestionPanel questionPanel={questionPanel} />;

    return this.props.renderQuestionPanel(questionPanelComponent);
  }

  componentDidMount(): void {
    if (!this.props.schema) {
      // @todo throw
      return;
    }

    if (this.props.currentPanelId !== null
      || this.props.schema.formPanels.length < 1) {
      return;
    }

    const sortedPanels = this.props.schema.formPanels.sort((a, b) => a.index - b.index);
    this.props.onSwitchPanel(sortedPanels[0].panelId);
  }
}
