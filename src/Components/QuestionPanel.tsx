/**
 * @file
 * @author Andrew Hathaway
 */
import * as React from 'react';

import { getQuestionSetsByQuestionPanel } from '../Helpers/Schema';

import { WinterfellQuestionPanel } from '../Types/Schema/WinterfellSchema';

import { Consumer } from '../Winterfell';
import QuestionSet from './QuestionSet';

export interface IQuestionPanelProps {
  questionPanel: WinterfellQuestionPanel;
}

const questionPanel: React.SFC<IQuestionPanelProps> = (props: IQuestionPanelProps): JSX.Element => (
  <Consumer>
    {(winterfellContext): JSX.Element => {
      const questionSets = getQuestionSetsByQuestionPanel(winterfellContext.schema, props.questionPanel);

      return winterfellContext.renderQuestionSet(<QuestionSet />);
    }}
  </Consumer>);

export default questionPanel;
