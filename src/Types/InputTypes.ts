/**
 * @file
 * @author Andrew Hathaway
 */
import { ComponentType } from 'react';
import { WinterfellQuestionInputOption } from './Schema/WinterfellSchema';

export type InputType = {
  id: string;
  value: any;
  name: string;
  questionId: string;
  options?: WinterfellQuestionInputOption[];

  labelledBy: string;
  required: boolean;
  placeholder: string;

  onBlur(questionId: string): void;
  onKeyDown(questionId: string): void;
  onChange(questionId: string, value: string): void;
};

export type InputTypeComponent = ComponentType<InputType>;
