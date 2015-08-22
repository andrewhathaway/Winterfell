var React = require('react');

var inputTypes = {
  emailInput        : require('./emailInput'),
  hiddenInput       : require('./hiddenInput'),
  passwordInput     : require('./passwordInput'),
  radioOptionsInput : require('./radioOptionsInput'),
  selectInput       : require('./selectInput'),
  textareaInput     : require('./textareaInput'),
  textInput         : require('./textInput')
};

inputTypes.define = (name, instance) => {
  if (!React.Component instanceof instance.constructor) {
    throw new Error('Winterfell: Cannot not assign "' + name + '" as an inputType. '
                    + 'Second paramter expects a React component');
  }

  inputTypes[name] = instance;
};

module.exports = inputTypes;