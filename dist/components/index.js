'use strict';

var React = require('react');

var components = {
  checkboxInput: require('./checkboxInput'),
  checkboxOptionsInput: require('./checkboxOptionsInput'),
  emailInput: require('./emailInput'),
  fileInput: require('./fileInput'),
  hiddenInput: require('./hiddenInput'),
  passwordInput: require('./passwordInput'),
  radioOptionsInput: require('./radioOptionsInput'),
  selectInput: require('./selectInput'),
  textareaInput: require('./textareaInput'),
  textInput: require('./textInput')
};

/**
 * Add an custom  component
 *
 * @param  type      name     Name of custom component
 * @param  Component instance Input Type Component
 */
components.addCustomComponent = function (name, instance) {
  if (typeof name !== 'string') {
    throw new Error('Winterfell: First parameter of addCustomComponent ' + 'must be of type string');
  }

  if (!React.Component instanceof instance.constructor) {
    throw new Error('Winterfell: Cannot not assign "' + name + '" as a custom component. ' + 'Second parameter expects a React component');
  }

  components[name] = instance;
};

/**
 * Add multiple custom compoennt
 *
 * @param  object types customComponent to add. string => Component
 */
components.addCustomComponents = function (types) {
  if (typeof types !== 'object') {
    throw new Error('Winterfell: First parameter of addCustomComponents ' + 'must be of type object');
  }

  for (var type in types) {
    components.addCustomComponent(type, types[type]);
  }
};

module.exports = components;