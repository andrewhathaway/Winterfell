module.exports = {
  "classes" : {
    "form" : "login-form",
    "question" : "form-group",
    "input" : "form-control",
    "controlButton" : "btn btn-primary pull-right",
    "backButton" : "btn btn-default pull-left",
    "errorMessage" : "alert alert-danger",
    "buttonBar" : "button-bar"
  },
  "formPanels" : [{
    "index" : 1,
    "panelId" : "register-panel"
  }],
  "questionPanels" : [{
    "panelId" : "register-panel",
    "panelHeader" : "Log in to MyAwesomeSite",
    "panelText" : "Please enter your email address and password to log in.",
    "action" : {
      "default" : {
        "action" : "SUBMIT"
      }
    },
    "button" : {
      "text" : "Submit"
    },
    "questionSets" : [{
      "index" : 1,
      "questionSetId" : "register-set"
    }]
  }],
  "questionSets" : [{
    "questionSetId" : "register-set",
    "questions" : [{
      "questionId" : "email",
      "question" : "Email Address",
      "input" : {
        "type" : "emailInput",
        "placeholder" : "Email Address",
        "required" : true
      },
      "validations" : [{
        "type" : "isEmail"
      }]
    }, {
      "questionId" : "password",
      "question" : "Password",
      "input" : {
        "type" : "passwordInput",
        "placeholder" : "Password"
      },
      "validations" : [{
        "type" : "isLength",
        "params" : [1]
      }]
    }, {
      "questionId" : "passwordConfirm",
      "question" : "Confirm Password",
      "input" : {
        "type" : "passwordInput",
        "placeholder" : "Confirm Password"
      },
      "validations" : [{
        "type" : "equals",
        "params" : ['{password}'],
        "message" : "Confirm Password must match Password"
      }]
    }]
  }]
};