var errorMessages = {

  default  : 'Please correct the field below',

  isLength : (validationItem) => {
    switch (validationItem.params.length) {

      case 1:
        return 'Please enter a value with at least '
                + validationItem.params[0] + ' characters';
        // @todo: Plural checking
        break;

      case 2:
        return 'Please enter a valiue between ' + validationItem.params[0]
               + ' and ' + validationItem.params[1] + ' characters long';
        break;

      default:
        return errorMessages.default;
        break;

    }

    return errorMessage;
  },

  isEmail  : 'Please enter a valid email address'

};

errorMessages.set = (type, message) => {
  if (typeof type === 'object') {
    for (var prop in type) {
      setErrorMemssage(prop, type[prop]);
    }

    return;
  }

  setErrorMemssage(type, message);
};

errorMessages.getErrorMessage = (validationItem) => {
  var errorMessage = typeof validationItem.message !== 'undefined'
                       ? validationItem.message
                       : typeof errorMessages[validationItem.type] !== 'undefined'
                           ? errorMessages[validationItem.type]
                           : errorMessages.default;

  return typeof errorMessage === 'function'
           ? errorMessage(validationItem)
           : errorMessage;
};

var setErrorMemssage = (type, message) => {
  errorMessages[type] = message;
};

module.exports = errorMessages;