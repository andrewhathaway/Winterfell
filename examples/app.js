var React      = window.React = require('react');
var Winterfell = require('../src/index');

var schema = require('./schema');

window.onload = function() {
  React.render(
    <Winterfell schema={schema} />,
    document.getElementById('form')
  );
};