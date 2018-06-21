/**
 * @file
 * @author Andrew Hathaway
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import schema from './schema';
import WithState from '../../src/WithState';

window.onload = () =>
  ReactDOM.render(
    <WithState
      schema={schema as any}
      currentPanelId={null}
      onSwitchPanel={panelId => {}}
      questionAnswers={{}}
      renderQuestionPanel={renderQuestionPanel}
      renderQuestionSets={renderQuestionSets}
      renderQuestions={renderQuestions}
      renderInput={renderInput}
    />,
    document.getElementById('root')
  );

const renderQuestionPanel = (questionPanel: JSX.Element): JSX.Element => (
  <div className="question-panel">
    {questionPanel}
  </div>
);

const renderQuestionSets = (questionSets: JSX.Element[]): JSX.Element => (
  <div className="question-sets">
    {questionSets}
  </div>
);

const renderQuestions = (question: JSX.Element[]): JSX.Element => (
  <div className="questions">
    {question}
  </div>
);

const renderInput = (input: JSX.Element): JSX.Element => (
  <div className="input">
    {input}
  </div>
);
