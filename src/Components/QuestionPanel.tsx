/**
 * @file
 * @author Andrew Hathaway
 */
import * as React from 'react';
import { Consumer } from '../Winterfell';

import { isEnterKey } from '../Helpers/Events';
import { getQuestionSetsByQuestionPanel } from '../Helpers/Schema';
import { WinterfellQuestionPanel } from '../Types/Schema/WinterfellSchema';

import QuestionSet from './QuestionSet';

export interface IQuestionPanelProps {
  questionPanel: WinterfellQuestionPanel;
}

const questionPanel: React.SFC<IQuestionPanelProps> = (props: IQuestionPanelProps): JSX.Element => (
  <Consumer>
    {(winterfellContext): JSX.Element => {
      const questionSets = getQuestionSetsByQuestionPanel(winterfellContext.schema, props.questionPanel);

      return winterfellContext.renderQuestionSets(questionSets.map(questionSet =>
        <QuestionSet
          key={questionSet.questionSetId}
          questionSet={questionSet}
        />));
    }}
  </Consumer>);

export default questionPanel;
