/**
 * @file
 * @author Andrew Hathaway
 */
import * as React from 'react';
import { Consumer } from '../Winterfell';
import { inputTypeRegistry } from '../Registries';

import { WinterfellQuestion } from '../Types/Schema/WinterfellSchema';
import { InputTypeComponent } from '../Types/InputTypes';

export interface IQuestionProps {
  question: WinterfellQuestion;
}

// This one will render itself sometimes, so...capitals needed!
// tslint:disable-next-line:variable-name
const Question: React.SFC<IQuestionProps> = (props): JSX.Element => (
  <Consumer>
    {(winterfellContext): JSX.Element => {
      // tslint:disable-next-line:variable-name
      const Input = inputTypeRegistry.get<InputTypeComponent>(props.question.input.type);

      return winterfellContext.renderInput(<Input
        id={props.question.questionId}
        name={props.question.questionId}
        questionId={props.question.questionId}
        value={'' /* @todo */}
        labelledBy={''  /* @todo */}
        options={props.question.input.options}
        placeholder={props.question.input.placeholder}
        required={props.question.input.required}
        onBlur={questionId => {}}
        onKeyDown={questionId => {}}
        onChange={(questionId, value) => {}}
      />);
    }}
  </Consumer>);

export default Question;
