module.exports = {
  "classes" : {
    "input" : "form-control",
    "question" : "form-group",
    "radioListItem" : "radio",
    "radioList" : "clean-list",
    "controlButton" : "btn btn-primary pull-right",
    "backButton" : "btn btn-default pull-left",
    "errorMessage" : "alert alert-danger"
  },
  "formPanels" : [{
    "index" : 1,
    "panelId" : "intro-panel"
  }, {
    "index" : 2,
    "panelId" : "register-panel"
  }, {
    "index" : 3,
    "panelId" : "final-panel"
  }],
  "questionPanels" : [{
    "panelId" : "intro-panel",
    "action" : {
      "conditions" : [{
        "questionId" : "existing-user",
        "value" : "no",
        "action" : "GOTO",
        "target" : "register-panel"
      }],
      "default" : {
        "action" : "GOTO",
        "target" : "final-panel"
      }
    },
    "button" : {
      "text" : "Next"
    },
    "questionSets" : [{
      "index" : 1,
      "questionSetId" : "intro-set"
    }]
  }, {
    "panelId" : "register-panel",
    "action" : {
      "conditions" : [],
      "default" : {
        "action" : "SUBMIT",
        "target" : "http://google.com"
      }
    },
    "button" : {
      "text" : "Submit"
    },
    "questionSets" : [{
      "index" : 1,
      "questionSetId" : "register-set"
    }]
  }, {
    "panelId" : "final-panel",
    "action" : {
      "conditions" : [],
      "default" : {
        "action" : "SUBMIT",
        "target" : "http://google.com"
      }
    },
    "button" : {
      "text" : "Submit"
    },
    "questionSets" : [{
      "index" : 1,
      "questionSetId" : "final-set"
    }, {
      "index" : 2,
      "questionSetId" : "survey-set"
    }]
  }],
  "questionSets" : [{
    "questionSetId" : "intro-set",
    "questions" : [{
      "questionId" : "existing-user",
      "question" : "Are you an existing user?",
      "validations" : [{
        "type"    : "isLength",
        "params" : [1]
      }],
      "input" : {
        "type" : "radioOptionsInput",
        "options" : [{
          "text"  : "Yes",
          "value" : "yes",
          "conditionalQuestions" : [{
            "questionId" : "register-user-email",
            "question" : "Please enter the email address your account is registered with",
            "input" : {
              "type" : "emailInput",
              "placeholder" : "Email Address"
            },
            "validations" : [{
              "type" : "isLength",
              "params" : [1]
            }]
          }],
          "validations" : [{
            "type" : "isLength",
            "params" : [1]
          }]
        }, {
          "text"  : "No",
          "value" : "no",
          "conditionalQuestions" : []
        }]
      }
    }]
  }, {
    "questionSetId" : "register-set",
    "questions" : [{
      "questionId" : "reg-first-name",
      "question" : "First Name",
      "input" : {
        "type" : "textInput"
      },
      "validations" : [{
        "type" : "isLength",
        "params" : [1]
      }]
    }, {
      "questionId" : "reg-last-name",
      "question" : "Last Name",
      "input" : {
        "type" : "textInput"
      },
      "validations" : [{
        "type" : "isLength",
        "params" : [1]
      }]
    }]
  }, {
    "questionSetId" : "final-set",
    "questions" : [{
      "questionId" : "gender",
      "question" : "Gender",
      "input" : {
        "type" : "radioOptionsInput",
        "options" : [{
          "text" : "Male",
          "value" : "male"
        }, {
          "text" : "Femle",
          "value" : "female"
        }]
      }
    }]
  }, {
    "questionSetId" : "survey-set",
    "questions" : [{
      "questionId" : "survey-first-name",
      "question" : "First Name",
      "input" : {
        "type" : "textInput"
      },
      "validations" : [{
        "type" : "isLength",
        "params" : [1]
      }]
    }, {
      "questionId" : "survey-last-name",
      "question" : "Last Name",
      "input" : {
        "type" : "textInput"
      },
      "validations" : [{
        "type" : "isLength",
        "params" : [1]
      }]
    }]
  }]
};