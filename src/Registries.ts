/**
 * @file
 * @author Andrew Hathaway
 */
import { ComponentType } from 'react';
import { InputTypeComponent } from './Types/InputTypes';
import MemoryRegistry from './Libraries/Registry/MemoryRegistry';

export const inputTypeRegistry = new MemoryRegistry<InputTypeComponent>();
