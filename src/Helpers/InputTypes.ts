/**
 * @file
 * @author Andrew Hathaway
 */
import { ComponentType } from 'react';
import { InputTypeComponent } from '../Types/InputTypes';
import { inputTypeRegistry } from '../Registries';

import TextInput from '../Components/InputTypes/TextInput';
import EmailInput from '../Components/InputTypes/EmailInput';
import PasswordInput from '../Components/InputTypes/PasswordInput';
import RadioOptionsInput from '../Components/InputTypes/RadioOptionsInput';
import TextAreaInput from '../Components/InputTypes/TextAreaInput';

export const bindNativeInputTypes = (): IRegistry<InputTypeComponent> =>
  inputTypeRegistry
    .add('textInput', TextInput, true)
    .add('emailInput', EmailInput, true)
    .add('textareaInput', TextAreaInput, true)
    .add('passwordInput', PasswordInput, true)
    .add('radioOptionsInput', RadioOptionsInput, true);
