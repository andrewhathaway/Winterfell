#Winterfell

**Generate complex, validated and extendable JSON-based forms in React**

Winterfell allows you to build up complex, multi-page forms with conditional questions, validation and conditional-page switching via a JSON schema, rendered by React.

Winterfell was initially made for a project in a sector that required a large, complex form with questions that would result in more questions or different pages when you clicked next. With an easy to write schema and a high level of customisation, comes a great power.

[View Demo](http://winterfell.andrewhathaway.net) -
[Follow me on Twitter](http://twitter.com/andrewhathaway)

## Usage

First install [Winterfell via npm](https://www.npmjs.com/package/winterfell)

```bash
$ npm install winterfell --save
```

Winterfell uses a JSON schema to render your form. We will go through that later.

```javascript
var Winterfell = require('winterfell');
var schema     = require('./schema');

React.render(
  <Winterfell schema={schema} />,
  document.getElementById('form')
);
```

## Features

- Easy, quick and extendable
- JSON schema
- Design agnostic and customisable
- Multi-page forms
- Infinitely-recursive conditional questions
- Conditional page switching
- Conditional form submitting
- Disable regular submissions
- Instant form validation
- Decide when to validate per field
- Validation against other fields values
- Predefined validation types
- Predefined error messages
- Custom validation types
- Custom error messages
- Custom error rendering
- Custom required asterisk rendering
- Custom classes
- Custom InputTypes
- Question pre and post text
- Question panel header and text
- Question set header and text
- Ability to disable buttons
- Default values
- Events

## Schema

The schema is built up of three main parts, `formPanels`, `questionPanels` and `questionSets`.

#### Form Panels

The initial `formPanels` entry is used as a page of questions, or `questionPanels` in Winterfell's case.

```json
{
	"formPanels" : [{
		"index" : 1,
		"panelId" : "intro-panel"
	}, {
		"index" : 2,
		"panelId" : "register-panel"
	}, {
		"index" : 3,
		"panelId" : "final-panel"
	}]
}
```

#### Question Panels

Question Panels are the fleshed-out details about a page of questions. We defined the `questionSets` that exist on this page, any conditions for submitting the panel and button information. You should have one of these for every panel defined in formPanels above.

Each `questionPanel` has the ability to have a header and some text along with it that is displayed above the questions. You can define these via the `panelHeader` and `panelText` fields.

Supported actions are `GOTO` and `SUBMIT`. When using `GOTO`, the `target` can be any `questionPanelId`. `SUBMIT` places the `target` in to the action field of the form element.

```json
{
	"questionPanels" : [{
		"panelId" : "intro-panel",
		"panelHeader" : "A quick survey?",
		"panelText" : "Please could you take a few minutes to fill out our survey?",
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
			"text" : "Next",
      "disabled" : false
		},
    "" : {
      "text" : "Back",
      "disable" : false
    },
		"questionSets" : [{
			"index" : 1,
			"questionSetId" : "intro-set"
		}]
	}]
}
```

#### Question Sets

Questions Sets are groups of questions. Here is where you define questions with their validations, types, conditions etc. `conditionalQuestions` are recursive and will work as expected.

The questionSet below has an initial radio button with `yes` and `no` options. When you select `yes`, a question asking for the users email address will render.

Each question has the ability to have some `text` associated with it which gets rendered below the questions-label and some `postText` which will be rendered below the questions input.


```json
{
	"questionSets" : [{
		"questionSetId" : "intro-set",
    "questionSetHeader" : "I am a question set header",
    "questionSetText" : "I am a question set text",
		"questions" : [{
			"questionId" : "existing-user",
			"question" : "Are you an existing user?",
			"text" : "We'd just like to know so we can get you in the right place.",
			"input" : {
				"type" : "radioOptionsInput",
        "default" : "yes",
				"options" : [{
					"text"	: "Yes",
					"value" : "yes",
					"conditionalQuestions" : [{
						"questionId" : "register-user-email",
						"question" : "Please enter the email address your account is registered with",
						"postText" : "We will not spam your email address.",
						"input" : {
							"type" : "emailInput",
							"placeholder" : "Email Address"
						},
						"validateOn" : "blur",
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
					"text"	: "No",
					"value" : "no",
					"conditionalQuestions" : []
				}]
			}
		}]
	}]
}
```

The `validateOn` property is used to dictate when to validate the field. The default for this is `blur`, which results in the field being validated when the user unfocusses from the field. You can also set this field to `change` which will validate the field as the user types, or changes their answer. Setting `validateOn` to `submit` will result in the field being validated when the next or submit button being pressed and only then.

Validations are handled via the [Validator](https://www.npmjs.com/package/validator) package on npm. In the `validations` key item, you can set your types of validation for the field. The `type` must be a method on the Validator package, or a custom defined method.

A validation-items `params` key must be an array of parameters for the validation method. The value will be unshifted to the start of the array and called up on the validation method in order. For example:

Validation item where the value must be a minimum length of 1.

```json
{
  "type" : "isLength",
  "params" : [1]
}
```

Validation item where the value must be a minimum length of 1 and a maximum of 20.

```json
{
	"type" : "isLength",
	"params" : [1, 20]
}
```

You can also add a custom error message for the questions validaton item by using the `message` property.

```json
{
  "type" : "isLength",
  "params" : [1],
  "message" : "Please select an option"
}
```

To validate a questions answer against another questions answer, you can wrap curly-braces around a parameter in the `params` property and it will be turned in to a questions answer. For example:


```json
{
  "type" : "equals",
  "params" : ["{password}"],
  "message" : "Confirm Password must match the Password field"
}
```

#### HTML Classes

Winterfell allows you to define classes for the rendered form in multiple different areas. To use them, place them in the root of the form-schema like so:

```
{
	"formPanels" : [],
	"classes" : {
		"form" : "form-wrapping-class",
		"label" : "question-label"
	}
}
```

The table below describes the current set of classes.

Class Name | Description
--- | ---
form                         | The form element itself
questionPanels               | The div that wraps around the active `questionPanel`
questionPanel                | The div that wraps around the active `questionSets` and the button bar
questionPanelHeaderContainer | The div that wraps around the `questionPanels` header text and text
questionPanelHeaderText      | The h3 tag that holds the `questionPanel` header text
questionPanelText            | The p tag that holds the `questionPanel` text
questionSetHeader            | The h4 tag that holds the `questionSet` header
questionSetText              | The p tag that holds the `questionSet` text
questionSetHeaderContainer   | The div that wraps around the header and text of a `questionSet`
questionSets                 | The div that wraps around the `questionSets` inside of a `questionPanel`
questionSet                  | The div that wraps around the `questions` inside a `questionSet`
question                     | The div that wraps around the `question`
questionText                 | The p tag that holds the `question` text
questionPostText             | The p tag that holds the `question` post-text
label                        | Label inside of a `question`
backButton                   | Panel-back button, shown when on a second panel
controlButton                | Typically the Next or Submit button, depending on panel
buttonBar                    | The div wrapped around the buttons described above
errorMessage                 | Error Message div class - Not used if custom renderError method used
input                        | Assigned to the inputs for types `textInput`, `textareaInput`, `emailInput` and `passwordInput`
select                       | Assigned to the `selectInput` select-element
file                         | Assigned to the `fileInput` file-element
checkboxInput                | The div that wraps around the `checkboxInput`
checkbox                     | Assigned to the `checkboxOptionsInput` and `checkboxInput` checkbox-input
checkboxList                 | Assigned the to UL wrapped around the checkbox items in `checkboxOptionsInput`
checkboxListItem             | Assigned to the LI inside of the `checkboxList` mentioned above
checkboxLabel                | Assigned to the label inside of a checkbox option
radioList                    | Assigned to the UL wrapped around the radio items in `radioOptionsInput`
radioListItem                | Assigned to the LI inside of the `radioList` mentioned above
radioLabel                   | Assigned to the label inside of a radio button option
radio                        | Assigned to the radio button inside of a `radioOptionsInput`
## Default & Custom Input Types

The default set of input types that ships with Winterfell are the following:

- textInput
- textareaInput
- emailInput
- hiddenInput
- fileInput
- passwordInput
- selectInput
- checkboxInput
- checkboxOptionsInput
- radioOptionsInput

You can also define custom input types like so:

```javascript
var Winterfell         = require('winterfell');
var MyAwesomeInputType = require('./awesomeInputType');

Winterfell
  .addInputType('myAwesomeInputType', MyAwesomeInputType);

// OR

Winterfell
  .addInputTypes({
    myAwesomeInputType : MyAwesomeInputType
  });

```

## Custom Error Messages

Error messages can be set strings, or methods that are called to generate an error message. They can be set like so:

```javascript
var Winterfell = require('winterfell');

Winterfell
  .addErrorMessage('isLength', 'Please enter some text!');

Winterfell
  .addErrorMessages({
  	isLength : (validationItem) => {
  	  /*
  	   * validationItem = {
  	   *   type   : 'isLength',
  	   *   params : [] //Starts with answer
  	   * }
  	   */

  	  return 'Please enter a value';
  	}
  });
```

## Custom Validation Methods

Validation methods can be defined and will be chosen over methods defined in the Validator package.

```javascript
var Winterfell = require('winterfell');

Winterfell
  .addValidationMethod('isLength', value => {
  	/*
  	 * arguments == validation parameters
  	 */

    return true; // Valid
  });

Winterfell
  .addValidationMethods({
  	isLength : value => {
  	  /*
  	   * arguments == validation parameters
  	   */

      return true; // valid
    }
  });
```

## Props & Config

The following table shows the props Winterfell accepts, their types and descriptions. The only prop that is required is `schema`.

Prop Name              | Type     | Description
---                    | ---      | ---
panelId                | string   | Initial `panelId` to render
schema                 | object   | `schema` for the form to render
ref                    | string   | `ref` field for form element
encType                | string   | `encType` field for the form element
method                 | string   | `method` field for the form element
action                 | string   | Default `action` field for the form element
disableSubmit          | boolean  | Prevent the form from submitting naturally
questionAnswers        | object   | Existing `questionAnswers`. `questionId` => `answer`
renderError            | function | Custom validation error render method. Return a React Component Or React Element.
renderRequiredAsterisk | function | Custom require asterisk rendering method. Return a React Component or React Element.

## Events

The following events can be registered as props of Winterfell.

Event Prop | Description | Arguments
--- | --- | ---
onRender      | Fired when Winterfell has initially rendered   | N/A
onUpdate      | Fired when a questions answer has been changed | `questionAnswers`
onSwitchPanel | Fired when a panel is switched or changed      | `panel`
onSubmit      | Fired when the form is submitted successfully  | `questionAnswers`, `action`



## Final Notes

Pull requests are completely welcome. If you'd like to get in touch, [Tweet me](http://twitter.com/andrewhathaway). Initial schema design by [Jordan Appleson](http://twitter.com/jordanisonfire).

## License

MIT License (MIT)

Copyright (c) 2015 Andrew Hathaway, [https://github.com/andrewhathaway/Winterfell](https://github.com/andrewhathaway/Winterfell)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
