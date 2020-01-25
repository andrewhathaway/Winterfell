/**
 * @file
 * @author Andrew Hathaway
 */
import * as React from 'react';
import { InputType } from '../../Types/InputTypes';

const textAreaInput: React.SFC<InputType> = (props): JSX.Element => (
  <textarea
    id={props.id}
    name={props.name}
    value={props.value}
    placeholder={props.placeholder}
    required={props.required}
    onBlur={(): void => props.onBlur(props.questionId)}
    onKeyDown={(): void => props.onKeyDown(props.questionId)}
    onChange={(e): void => props.onChange(props.questionId, e.target.value)}
  />
);

export default textAreaInput;
