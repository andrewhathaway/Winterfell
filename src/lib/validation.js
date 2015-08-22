var _         = require('lodash');
var Validator = require('validator');

var extraValidators = {};

/**
 * [description]
 * @param  {[type]} value          [description]
 * @param  {[type]} validationItem [description]
 * @return {[type]}                [description]
 */
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

/**
 * [description]
 * @param  {[type]} questions       [description]
 * @param  {[type]} questionAnswers [description]
 * @param  {[type]} activeQuestions [description]
 * @return {[type]}                 [description]
 */
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
};

/**
 * [description]
 * @param  {[type]} questionSets    [description]
 * @param  {[type]} questionAnswers [description]
 * @return {[type]}                 [description]
 */
var getActiveQuestionsFromQuestionSets = (questionSets, questionAnswers) => {
  var questionsToCheck = [];

  questionSets
    .forEach(questionSet => Array.prototype.push.apply(
      questionsToCheck, getActiveQuestions(questionSet.questions, questionAnswers)
    ));

  return questionsToCheck;
};

/**
 * [description]
 * @param  {[type]} questionSets     [description]
 * @param  {[type]} questionAnswers  [description]
 * @param  {[type]} validationErrors [description]
 * @return {[type]}                  [description]
 */
var getQuestionPanelInvalidQuestions = (questionSets, questionAnswers, validationErrors) => {
  var questionsToCheck = getActiveQuestionsFromQuestionSets(questionSets, questionAnswers)
                           .filter(question => {
                             return question.validations instanceof Array
                                      && question.validations.length > 0;
                           });

  /*
   * We have a list of the questions in every active question set given.
   * No we need to check if there are any validation errors associated
   * with the questions we need to check.
   */
  var invalidatedQuestions = _.clone(questionsToCheck, true)
                              .filter(question => {
                                return typeof validationErrors[question.questionId] === 'undefined'
                                         || validationErrors[question.questionId].length === 0;
                              });

  /*
   * If there are any questions with validation errors,
   * fail the test and do not continue.
   */
  if (questionsToCheck.length - invalidatedQuestions.length > 0) {
    return false;
  }

  /*
   * Now we run validations for the questions
   * we need to check for errors.
   *
   * Go through every question, and its validations
   * then run the question and answer through
   * the validation method required.
   */
  var errors = {};
  invalidatedQuestions
    .forEach(({questionId, validations}) =>
      [].forEach.bind(validations, validation => {
        var valid = validateAnswer(questionAnswers[questionId], validation);
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
      }
    )());

  return errors;
};

/**
 * [description]
 * @param  {[type]} name   [description]
 * @param  {[type]} method [description]
 * @return {[type]}        [description]
 */
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

/**
 * [description]
 * @param  {[type]} methods [description]
 * @return {[type]}         [description]
 */
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
  validateAnswer                     : validateAnswer,
  getActiveQuestions                 : getActiveQuestions,
  getActiveQuestionsFromQuestionSets : getActiveQuestionsFromQuestionSets,
  getQuestionPanelInvalidQuestions   : getQuestionPanelInvalidQuestions,
  addValidationMethod                : addValidationMethod,
  addValidationMethods               : addValidationMethods
};