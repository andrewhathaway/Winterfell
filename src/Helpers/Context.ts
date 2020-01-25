/**
 * @file Winterfell Context Helpers
 * @author Andrew Hathaway
 */
import { IWinterfellContext } from '../Winterfell';

export const getContextQuestionValueOrDefaultById = <T>(
  context: IWinterfellContext,
  questionId: string,
  defaultValue: T = null
): T => {
  const questionValue: T = context.questionAnswers[questionId];

  // If we have an array, if it's empty then return default
  if (Array.isArray(questionValue)
    && questionValue.length === 0) {
    return defaultValue;
  }

  // If the value is undefined, null, or empty then
  // return default! We have to do real checks, as
  // 0 is a real value, and a falsy-check wouldn't suffice
  if (typeof questionValue === 'undefined'
    || questionValue === null
    || (typeof questionValue === 'string' && questionValue.trim() === '')) {
    return defaultValue;
  }

  return questionValue;
}
