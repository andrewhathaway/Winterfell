/**
 * @file
 * @author Andrew Hathaway
 */
import * as React from 'react';
import { WinterfellSchema } from './Types/Schema/WinterfellSchema';
import { getQuestionPanelById } from './Helpers/Schema';

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
}

class Winterfell extends React.Component<IWinterfellProps> {
  render() {
    const questionPanel = getQuestionPanelById(this.props.schema, this.props.currentPanelId);

    return (
      <form
        method={this.props.method}
        encType={this.props.encType}
        action={this.props.action}
        className={this.props.className}
      >
        {''}
      </form>
    );
  }
}
