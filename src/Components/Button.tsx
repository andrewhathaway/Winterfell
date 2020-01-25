/**
 * @file
 * @author Andrew Hathaway
 */
import * as React from 'react';
import { WinterfellButton } from '../Types/Schema/WinterfellSchema';

interface IButtonProps {
  button: WinterfellButton;
  onClick(): void;
}

const button: React.SFC<IButtonProps> = ({
  onClick = (): void => {},
  ...props
}): JSX.Element => (
  <button
    onClick={(e): void => {
      e.preventDefault();
      onClick();
    }}
  >
    {props.button.text || 'Submit'}
  </button>
);

export default button;
