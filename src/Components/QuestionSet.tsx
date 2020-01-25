/**
 * @file
 * @author Andrew Hathaway
 */
import * as React from 'react';
import { Consumer } from '../Winterfell';
import { IWinterfellContext } from '../Winterfell';
import { getContextQuestionValueOrDefaultById } from '../Helpers/Context';
import { RenderQuestionParam } from '../Types/Index';
import { WinterfellQuestion } from '../Types/Schema/WinterfellSchema';
import { WinterfellQuestionSet } from '../Types/Schema/WinterfellSchema';

import Question from './Question';

export interface IQuestionSetProps {
  questionSet: WinterfellQuestionSet;
}

const makeQuestion = (q: WinterfellQuestion): JSX.Element => (
  <Question
    key={q.questionId}
    question={q}
  />
);

const questionSet: React.SFC<IQuestionSetProps> = (props): JSX.Element => (
  <Consumer>
    {(winterfellContext): JSX.Element => {
      const questions = props.questionSet.questions.map((q): RenderQuestionParam => {
        const conditionals = calculateActiveConditionalQuestions(winterfellContext, q)
          .map(makeQuestion);

        return {
          question: makeQuestion(q),
          conditionalQuestions: conditionals
        };
      });

      return winterfellContext.renderQuestions(questions);
    }}
  </Consumer>);

const calculateActiveConditionalQuestions = (
  context: IWinterfellContext,
  question: WinterfellQuestion
): WinterfellQuestion[] => {
  const questionId = question.questionId;
  const options = question.input.options;

  if (typeof options === 'undefined'
    || options.length === 0) {
    return [];
  }

  const questionValue = getContextQuestionValueOrDefaultById(context, questionId, '');

  const conditionalQuestions = options
    .filter(opt => {
      // If we don't have any conditional questions by check that:
      // - They've been set
      // - It's an array
      // - The array has items
      //
      // Then return false, nothing to see here
      if (typeof opt.conditionalQuestions === 'undefined'
        || !Array.isArray(opt.conditionalQuestions)
        || opt.conditionalQuestions.length === 0) {
        return false;
      }

      // Now we need to check if the conditional questions are active
      //
      // If we have an Array, then check that the value the CQ requires
      // is in the array of answers. If we don't have an array, then
      // check that the values match.
      return Array.isArray(questionValue)
        ? questionValue.indexOf(opt.value) > -1
        : questionValue === opt.value;
    })
    .map(q => q.conditionalQuestions);

  return [].concat(...conditionalQuestions);
};

export default questionSet;
