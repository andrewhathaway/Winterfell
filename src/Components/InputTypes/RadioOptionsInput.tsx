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
          />
          {opt.text}
        </label>
      </li>)}
  </ul>
);

export default radioOptionsInput;
