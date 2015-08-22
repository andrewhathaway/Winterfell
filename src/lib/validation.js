var Validator       = require('validator');

var extraValidators = {};

var validateAnswer = (value, validationItem) => {
  var validationMethod = typeof extraValidators[validationItem.type] !== 'undefined'
                           ? extraValidators[validationItem.type]
                           : Validator.hasOwnProperty(validationItem.type)
                               && typeof Validator[validationItem.type] === 'function'
                               ? Validator[validationItem.type]
                               : undefined;

  if (!validationMethod) {
    throw new Error('Winterfell: Attempted to validate for undefined method "'
                    + validationItem.type + '"');
  }

  var validationParameters = (validationItem.params || []).slice(0);
  validationParameters.unshift(value);

  return validationMethod.apply(null, validationParameters);
};

var getActiveQuestions = (questions, questionAnswers, activeQuestions) => {
  activeQuestions = activeQuestions || [];

  questions
    .forEach(question => {
      activeQuestions.push({
        questionId  : question.questionId,
        validations : question.validations
      });

      if (typeof question.input.options === 'undefined'
          || question.input.options.length === 0) {
        return;
      }

      question
        .input
        .options
        .forEach(option => {
          if (typeof option.conditionalQuestions === 'undefined'
               || option.conditionalQuestions.length == 0
               || questionAnswers[question.questionId] != option.value) {
            return;
          }

          activeQuestions = getActiveQuestions(option.conditionalQuestions, questionAnswers, activeQuestions);
        });

    });

  return activeQuestions;
}

var addValidationMethod = (name, method) => {
  if (typeof name !== 'string') {
    throw new Error('Winterfell: First parmateter of addValidationMethod '
                    + 'must be of type string');
  }

  if (typeof method !== 'function') {
    throw new Error('Winterfell: First parmateter of addValidationMethod '
                    + 'must be of type function');
  }

  extraValidators[name] = method;
};

var addValidationMethods = (methods) => {
  if (typeof methods !== 'object') {
    throw new Error('Winterfell: First parmateter of addValidationMethods '
                    + 'must be of type object');
  }

  for (var methodName in methods) {
    addValidationMethod[methodName] = methods[methodName];
  }
};

module.exports = {
  validateAnswer       : validateAnswer,
  getActiveQuestions   : getActiveQuestions,
  addValidationMethod  : addValidationMethod,
  addValidationMethods : addValidationMethods
};