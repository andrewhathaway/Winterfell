/**
 * @file
 * @author Andrew Hathaway
 */
import * as React from 'react';
import { InputType } from '../../Types/InputTypes';

const radioOptionsInput: React.SFC<InputType> = ({
  options = [],

  ...props
}): JSX.Element => (
  <ul>
    {options.map(opt =>
      <li key={opt.value}>
        <label>
          <input
            type="radio"
            name={props.name}
            checked={props.value === opt.value}
            required={props.required}
            onChange={(): void =>
              props.onChange(props.questionId, opt.value)}
            onKeyDown={(): void =>
              props.onKeyDown(props.questionId)}
            onBlur={(): void =>
              props.onBlur(props.questionId)}
          />
          {opt.text}
        </label>
      </li>)}
  </ul>
);

export default radioOptionsInput;
