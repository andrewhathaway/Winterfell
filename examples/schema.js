module.exports = {
  "classes" : {
    "input" : "form-control",
    "select" : "form-control",
    "question" : "form-group",
    "radioListItem" : "radio",
    "radioList" : "clean-list",
    "checkboxInput" : "checkbox",
    "checkboxListItem" : "checkbox",
    "checkboxList" : "clean-list",
    "controlButton" : "btn btn-primary pull-right",
    "backButton" : "btn btn-default pull-left",
    "errorMessage" : "alert alert-danger",
    "questionPostText" : "push-top",
    "buttonBar" : "button-bar"
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
    "panelHeader" : "My Awesome Form",
    "panelText" : "Play around a little, you might find some surprises depending on what you answer!",
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
    "panelHeader" : "My Awesome Form",
    "panelText" : "We don't have a survey for you yet, how about we get you subscribed?",
    "action" : {
      "conditions" : [],
      "default" : {
        "action" : "SUBMIT",
        "target" : "http://google.com"
      }
    },
    "button" : {
      "text" : "Subscribe"
    },
    "backButton" : {
      "disabled" : true
    },
    "questionSets" : [{
      "index" : 1,
      "questionSetId" : "register-set"
    }]
  }, {
    "panelId" : "final-panel",
    "panelHeader" : "My Awesome Form",
    "panelText" : "Did you even check the console yet? Keep going though!",
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
      "questionSetId" : "info-set"
    }, {
      "index" : 2,
      "questionSetId" : "survey-set"
    }]
  }],
  "questionSets" : [{
    "questionSetId" : "intro-set",
    "questionSetHeader" : "I'm a question set header",
    "questionSetText" : "I am a question set text",
    "questions" : [{
      "questionId" : "existing-user",
      "question" : "Are you currently subscribed?",
      "validations" : [{
        "type"    : "isIn",
        "params" : [
          ["yes", "no"]
        ]
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
              "type" : "isEmail"
            }]
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
      "text" : "Its nice to accompany a question with some extra text, is it not?",
      "input" : {
        "type" : "textInput",
        "placeholder" : "First Name"
      },
      "validations" : [{
        "type" : "isLength",
        "params" : [1]
      }]
    }, {
      "questionId" : "reg-last-name",
      "question" : "Last Name",
      "input" : {
        "type" : "textInput",
        "placeholder" : "Last Name"
      },
      "validations" : [{
        "type" : "isLength",
        "params" : [1]
      }]
    }, {
      "questionId" : "reg-email",
      "question" : "Email Address",
      "postText" : "We won't spam your email address! Yadda yadda! This is some post-question text",
      "input" : {
        "type" : "emailInput",
        "placeholder" : "Email Address"
      },
      "validations" : [{
        "type" : "isEmail"
      }]
    }, {
      "questionId" : "reg-accept",
      "question" : "",
      "input" : {
        "default" : "yes",
        "type" : "checkboxInput",
        "text" : "Do you accept the terms and conditions?"
      },
      "validations" : [{
        "type"   : "isAccepted",
        "params" : [
          "yes"
        ]
      }]
    }]
  }, {
    "questionSetId" : "info-set",
    "questions" : [{
      "questionId" : "gender",
      "question" : "Gender",
      "input" : {
        "type" : "selectInput",
        "options" : [{
          "text" : "Male",
          "value" : "male"
        }, {
          "text" : "Female",
          "value" : "female"
        }]
      }
    }]
  }, {
    "questionSetId" : "survey-set",
    "questions" : [{
      "questionId" : "survey-hours-spent",
      "question" : "How many hours do you spend on a computer weekly?",
      "input" : {
        "type" : "radioOptionsInput",
        "options" : [{
          "text" : "0-10 Hours",
          "value" : "1"
        }, {
          "text" : "11-20 Hours",
          "value" : "2"
        }, {
          "text" : "21-30 Hours",
          "value" : "3"
        }, {
          "text" : "31+ Hours",
          "value" : "4"
        }]
      },
      "validations" : [{
        "type" : "isIn",
        "params" : [
          [1, 2, 3, 4]
        ]
      }]
    }, {
      "questionId" : "survey-devices-owned",
      "question" : "Which of the following devices do you own?",
      "text" : "Try playing around the the laptop or none options!",
      "input" : {
        "type" : "checkboxOptionsInput",
        "options" : [{
          "text" : "Laptop",
          "value" : "laptop",
          "conditionalQuestions" : [{
            "questionId" : "laptop-os",
            "question" : "What is your preferred operation system?",
            "text" : "Awesome, you found me. ",
            "postText" : "The other option will also open up a textInput",
            "input" : {
              "type" : "radioOptionsInput",
              "options" : [{
                "text" : "OS X",
                "value" : "osx"
              }, {
                "text" : "Windows",
                "value" : "windows"
              }, {
                "text" : "Any Linux Distro",
                "value" : "linux"
              }, {
                "text" : "Other",
                "value" : "other",
                "conditionalQuestions" : [{
                  "questionId" : "laptop-os-other-text",
                  "question" : "Please name the other OS",
                  "input" : {
                    "type" : "textInput",
                    "placeholder" : "Other Operating System"
                  },
                  "validations" : [{
                    "type" : "isLength",
                    "params" : [1]
                  }]
                }, {
                  "questionId" : "laptop-os-other-reason",
                  'question' : "What do you like about this OS?",
                  "input" : {
                    "type" : "textareaInput",
                    "placeholder" : "What do you like about this OS?"
                  },
                  "validations" : [{
                    "type" : "isLength",
                    "params" : [1]
                  }]
                }]
              }]
            }
          }]
        }, {
          "text" : "Desktop Computer",
          "value" : "desktop"
        }, {
          "text" : "Tablet",
          "value" : "tablet"
        }, {
          "text" : "Mobile",
          "value" : "mobile"
        }, {
          "text" : "Smart Watch",
          "value" : "watch"
        }, {
          "text" : "None",
          "value" : "none",
          "conditionalQuestions" : [{
            "questionId" : "no-devices-how",
            "question" : "How are you accessing this form then?",
            "input" : {
              "type" : "textInput",
              "placeholder" : "Form access"
            }
          }]
        }]
      },
      "validations" : [{
        "type" : "isAllIn",
        "params" : [
          [
            "laptop",
            "desktop",
            "tablet",
            "mobile",
            "watch",
            "none"
          ]
        ]
      }]
    }]
  }]
};
