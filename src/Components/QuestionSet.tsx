/**
 * @file
 * @author Andrew Hathaway
 */
import * as React from 'react';
import { Consumer } from '../Winterfell';

import { WinterfellQuestionSet } from '../Types/Schema/WinterfellSchema';

import Question from './Question';

export interface IQuestionSetProps {
  questionSet: WinterfellQuestionSet;
}

const questionSet: React.SFC<IQuestionSetProps> = (props): JSX.Element => (
  <Consumer>
    {(winterfellContext): JSX.Element => {
      const questions = props.questionSet.questions.map(q =>
        <Question
          key={q.questionId}
          question={q}
        />);

      return winterfellContext.renderQuestions(questions);
    }}
  </Consumer>);

export default questionSet;
