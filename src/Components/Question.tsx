/**
 * @file
 * @author Andrew Hathaway
 */
import * as React from 'react';
import { Consumer } from '../Winterfell';

import { WinterfellQuestion } from '../Types/Schema/WinterfellSchema';

export interface IQuestionProps {
  question: WinterfellQuestion;
}

// This one will render itself sometimes, so...capitals needed!
// tslint:disable-next-line:variable-name
const Question: React.SFC<IQuestionProps> = (props): JSX.Element => (
  <Consumer>
    {(winterfellContext): JSX.Element => {
      return <div>{props.question.questionId}</div>;
    }}
  </Consumer>);

export default Question;
