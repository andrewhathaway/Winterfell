/**
 * @file
 * @author Andrew Hathaway
 */
import { ComponentType } from 'react';
import { InputTypeComponent } from '../Types/InputTypes';
import { inputTypeRegistry } from '../Registries';

import TextInput from '../Components/InputTypes/TextInput';
import PasswordInput from '../Components/InputTypes/PasswordInput';
import RadioOptionsInput from '../Components/InputTypes/RadioOptionsInput';

export const bindNativeInputTypes = (): IRegistry<InputTypeComponent> =>
  inputTypeRegistry
    .add('textInput', TextInput, true)
    .add('passwordInput', PasswordInput, true)
    .add('radioOptionsInput', RadioOptionsInput, true);
