var React      = window.React = require('react');
var Winterfell = require('../src/index');

var schema      = require('./schema');
var loginSchema = require('./loginSchema');

var onRender = () => {
  console.log('Great news! Winterfell rendered successfully');
};

var onUpdate = (questionAnswers) => {
  console.log('Question Updated! The current set of answers is: ', questionAnswers);
};
var onSwitchPanel = (panel) => {
  console.log('Moving on to the panel that is identified as "' + panel.panelId + '"');
};

var onSubmit = (questionAnswers, target) => {
  console.log('Form submitted!', questionAnswers);
  console.log('-----');
  console.log('For this example, we disabled normal form submission functionality. ');
  console.log('-----');
  alert('Submitted. Check the console to see the answers!');
};

window.onload = function() {
  React.render(
    <Winterfell schema={loginSchema}
                onRender={onRender}
                onUpdate={onUpdate}
                renderRequiredAsterisk={() => <span>{'*'}</span>} />,
    document.getElementById('login-form')
  );

  React.render(
    <Winterfell schema={schema}
                disableSubmit={true}
                onRender={onRender}
                onUpdate={onUpdate}
                onSwitchPanel={onSwitchPanel}
                onSubmit={onSubmit} />,
    document.getElementById('form')
  );

  /*
   * JSON View
   */
  $('#json-view')
    .JSONView($('#json-view').html());

  $('#login-json-view')
    .JSONView($('#login-json-view').html());
};