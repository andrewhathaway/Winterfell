var React      = require('react');
var Winterfell = require('../src/index');

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