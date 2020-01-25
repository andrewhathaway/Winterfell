/**
 * @file
 * @author Andrew Hathaway
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import schema from './schema';
import moreSchema from './moreSchema';
import WithState from '../../src/WithState';
import { RenderQuestionParam } from '../../src/Types/Index';

window.onload = () =>
  ReactDOM.render(
    <>
      <WithState
        schema={schema as any}
        currentPanelId={null}
        onSwitchPanel={(panelId): void => {}}
        questionAnswers={{}}
        renderQuestionPanel={renderQuestionPanel}
        renderQuestionSets={renderQuestionSets}
        renderQuestions={renderQuestions}
        renderInput={renderInput}
        onChange={() => {}}
        onBlur={() => {}}
        onKeyDown={() => {}}
      />
      {'---------------------------------------------------------------------------'}
      <WithState
        schema={moreSchema as any}
        currentPanelId={null}
        onSwitchPanel={(panelId): void => {}}
        questionAnswers={{}}
        renderQuestionPanel={renderQuestionPanel}
        renderQuestionSets={renderQuestionSets}
        renderQuestions={renderQuestions}
        renderInput={renderInput}
        onChange={() => {}}
        onBlur={() => {}}
        onKeyDown={() => {}}
      />
    </>,
    document.getElementById('root')
  );

const renderQuestionPanel = (questionPanel: JSX.Element, btn: JSX.Element, btnTwo: JSX.Element): JSX.Element => (
  <div className="question-panel">
    {'QP'}
    {questionPanel}
    {btnTwo}
    {btn}
  </div>
);

const renderQuestionSets = (questionSets: JSX.Element[]): JSX.Element => (
  <div className="question-sets">
    {'QS'}
    {questionSets}
  </div>
);

const renderQuestions = (questions: RenderQuestionParam[]): JSX.Element => (
  <div className="questions">
    {'Qs'}
    {questions.map(i => (
      <>
        {i.question}
        {i.conditionalQuestions}
      </>
    ))}
  </div>
);

const renderInput = (input: JSX.Element): JSX.Element => (
  <div className="input">
    {'I'}
    {input}
  </div>
);
