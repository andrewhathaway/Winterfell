'use strict';

module.exports = function (template, params) {
  template = template || '';
  params = params || {};

  /*
   * Split up template in to array of characters
   */
  var characters = template.split('');

  var buffer = '';
  var parsedTemplate = '';
  var collecting = false;

  for (var i = 0; i < characters.length; i++) {
    var currentChar = characters[i];

    /*
     * If we're not collecting and we're not
     * and opening or closing brace then
     * append the charater to the
     * parsedTemplate and move on
     */
    if (!collecting && currentChar != '{' && currentChar != '}') {
      parsedTemplate += currentChar;
      continue;
    }

    /*
     * If we're an opening brace,
     * start collecting for the buffer
     */
    if (currentChar == '{') {
      collecting = true;
    }

    /*
     * If we're here, we're collecting so if
     * we're not a brace of any sort then add
     * the character to the buffer
     */
    if (currentChar != '{' && currentChar != '}') {
      buffer += currentChar;
    }

    /*
     * If we're a closing brace, then we
     * attempt to get the value with the
     * buffers name from the params object
     * and add it to the parsedTemplate
     */
    if (currentChar == '}') {
      var value = '';
      if (typeof params[buffer] !== 'undefined') {
        value = params[buffer];
      }

      parsedTemplate += value;

      /*
       * Stop collecting and reset
       * the buffer to nothing
       */
      collecting = false;
      buffer = '';
    }
  }

  return parsedTemplate;
};