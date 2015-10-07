'use strict';

var _ = require('lodash').noConflict();
var Validator = require('validator');
var StringParser = require('./stringParser');

var extraValidators = {

  /*
   * isAccepted Validation Mehod
   */
  isAccepted: function isAccepted(value, expected) {
    return value == expected;
  },

  /*
   * isAllIn Validation Method
   */
  isAllIn: function isAllIn(value, options) {
    if (!value) {
      return false;
    }

    return _.every(value, function (item) {
      return options.indexOf(item) > -1;
    });
  }

};

/**
 * Validate a value against a validation item
 *
 * @param  any     value          Value being tested
 * @param  object  validationItem Rule set for validator
 * @return boolean                Valid?
 */
var validateAnswer = function validateAnswer(value, validationItem, questionAnswers) {
  var validationMethod = typeof extraValidators[validationItem.type] !== 'undefined' ? extraValidators[validationItem.type] : Validator.hasOwnProperty(validationItem.type) && typeof Validator[validationItem.type] === 'function' ? Validator[validationItem.type] : undefined;

  if (!validationMethod) {
    throw new Error('Winterfell: Attempted to validate for undefined method "' + validationItem.type + '"');
  }

  /*
   * Clone the validation parameters so it doesn't effect the
   * parameters elsewhere by reference.
   */
  var validationParameters = (validationItem.params || []).slice(0);

  /*
   * Run the parameters through the stringParser with the
   * questionAnswers so that it sets the questionAnswer
   * as the parameter.
   */
  validationParameters = validationParameters.map(function (p) {
    return typeof p === 'string' ? StringParser(p, questionAnswers) : p;
  });

  /*
   * Push the value of the question we're validating to
   * the first parameter of the validationParameters
   */
  validationParameters.unshift(value);

  /*
   * Return the result of the validation method running
   * wtih the validationParameters.
   */
  return validationMethod.apply(null, validationParameters);
};

/**
 * Get active questions from an array of questions,
 * recursively. Follows active conditions.
 *
 * @param  array  questions       Questions to run through
 * @param  object questionAnswers Current answers for questions
 * @param  array  activeQuestions
 * @return array                  All active questions
 */
var getActiveQuestions = function getActiveQuestions(questions, questionAnswers, activeQuestions) {
  activeQuestions = activeQuestions || [];

  questions.forEach(function (question) {
    activeQuestions.push({
      questionId: question.questionId,
      validations: question.validations
    });

    if (typeof question.input.options === 'undefined' || question.input.options.length === 0) {
      return;
    }

    question.input.options.forEach(function (option) {
      if (typeof option.conditionalQuestions === 'undefined' || option.conditionalQuestions.length == 0 || questionAnswers[question.questionId] != option.value) {
        return;
      }

      activeQuestions = getActiveQuestions(option.conditionalQuestions, questionAnswers, activeQuestions);
    });
  });

  return activeQuestions;
};

/**
 * Get active questions from multiple question sets
 *
 * @param  array  questionSets    All question sets
 * @param  object questionAnswers Current answers for questions
 * @return array                  All active questions
 */
var getActiveQuestionsFromQuestionSets = function getActiveQuestionsFromQuestionSets(questionSets, questionAnswers) {
  var questionsToCheck = [];

  questionSets.forEach(function (questionSet) {
    return Array.prototype.push.apply(questionsToCheck, getActiveQuestions(questionSet.questions, questionAnswers));
  });

  return questionsToCheck;
};

/**
 * Get all invalid questions from question sets
 *
 * @param  array  questionSets     All question sets
 * @param  object questionAnswers  Current answers for questions
 * @return object                  Set of questions and their invalidations
 */
var getQuestionPanelInvalidQuestions = function getQuestionPanelInvalidQuestions(questionSets, questionAnswers) {
  var questionsToCheck = getActiveQuestionsFromQuestionSets(questionSets, questionAnswers).filter(function (question) {
    return question.validations instanceof Array && question.validations.length > 0;
  });

  /*
   * Now we run validations for the questions
   * we need to check for errors.
   *
   * Go through every question, and its validations
   * then run the question and answer through
   * the validation method required.
   */
  var errors = {};
  questionsToCheck.forEach(function (_ref) {
    var questionId = _ref.questionId;
    var validations = _ref.validations;
    return [].forEach.bind(validations, function (validation) {
      var valid = validateAnswer(questionAnswers[questionId], validation, questionAnswers);
      if (valid) {
        return;
      }

      /*
       * If we got here, the validation failed. Add
       * an validation error and continue to the next!
       */
      if (typeof errors[questionId] === 'undefined') {
        errors[questionId] = [];
      }

      errors[questionId].push(validation);
    })();
  });

  return errors;
};

/**
 * Add a single validation method
 *
 * @param  string   name   Name of validation method
 * @param  function method Validation method
 */
var addValidationMethod = function addValidationMethod(name, method) {
  if (typeof name !== 'string') {
    throw new Error('Winterfell: First parameter of addValidationMethod ' + 'must be of type string');
  }

  if (typeof method !== 'function') {
    throw new Error('Winterfell: Second parameter of addValidationMethod ' + 'must be of type function');
  }

  extraValidators[name] = method;
};

/**
 * Add multiple validation methods
 *
 * @param  array methods Methods to add. name => func
 */
var addValidationMethods = function addValidationMethods(methods) {
  if (typeof methods !== 'object') {
    throw new Error('Winterfell: First parameter of addValidationMethods ' + 'must be of type object');
  }

  for (var methodName in methods) {
    addValidationMethod[methodName] = methods[methodName];
  }
};

module.exports = {
  validateAnswer: validateAnswer,
  getActiveQuestions: getActiveQuestions,
  getActiveQuestionsFromQuestionSets: getActiveQuestionsFromQuestionSets,
  getQuestionPanelInvalidQuestions: getQuestionPanelInvalidQuestions,
  addValidationMethod: addValidationMethod,
  addValidationMethods: addValidationMethods
};