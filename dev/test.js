var React      = require('react');
var Winterfell = require('../src/index');

window.React = React;

var formSchema = require('./form');

window.onload = function() {
  try {
    React.render(
      <Winterfell schema={formSchema} />,
      document.getElementById('form')
    );
  } catch (e) {
    console.error(e);
  }
};