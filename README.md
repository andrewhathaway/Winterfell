#Winterfell

**Generate complex, validated and extendable JSON-based forms in React**

Winterfell allows you to build up complex, multi-page forms with conditional questions, validation and conditional-page switching via a JSON schema, rendered by React.

[View Demo](http://winterfell.andrewhathaway.net) - 
[Follow me on Twitter](http://twitter.com/andrewhathaway)

## Usage

First install [Winterfell via npm](https://www.npmjs.com/package/winterfell)

```bash
$ npm install winterfell
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
- Multi-page forms
- Infitely-recursive conditional questions
- Conditional page switching
- Conditional form submitting
- Disable regular submissions
- Instant form validation
- Custom validation types
- Custom error messages
- Custom error rendering
- Custom classes
- Custom InputTypes
- Default valiues
- Events 

## Schema

The schema is built up of three main parts, `formPanels`, `questionPanels` and `questionSets`. 

#### Form Panels

The initial `formPanels` entry is used as a page of questions, or `questionSets` in Winterfells case. 

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

```json
{
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
				// Can also be 'SUBMIT' to fire a submission
				"action" : "GOTO", 
				// If action is 'SUBMIT' set action to a URL
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
	}]
}
```

#### Question Sets

Questions Sets are groups of questions. Here is where you define questions with their validations, types, conditions etc. ConditionalQuestions are recursive and will work as expected.

The questionSet below has an initial radio button with `yes` and `no` options. When you select `yes`, a question asking for the users email address will render. 


```json
{
	"questionSets" : [{
		"questionSetId" : "intro-set",
		"questions" : [{
			"questionId" : "existing-user",
			"question" : "Are you an existing user?",
			"input" : {
				"type" : "radioOptionsInput",
				"options" : [{
					"text"	: "Yes",
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
					"text"	: "No",
					"value" : "no",
					"conditionalQuestions" : []
				}]
			}
		}]
	}]
}
```

Validations are handled via the [Validator](https://www.npmjs.com/package/validator) package on npm. In the `validations` key item, you can set your types of valiation for the field. The `type` must be a method on the Validator package, or a custom defined method.

Validations `params` key must be an array of parameters for the validation method. The value will be unshifted to the start of the array and called up on the validation method in order. For example:

```json
{
	"type" : "isLength",
	// Value must be a min-length of 1
	"params" : [1]
}

{
	"type" : "isLength",
	// Value must be a min-length of 1 and max-length of 20
	"params" : [1, 20]
}
```

#### HTML Classes

Winterfell allows you to define classes for the rendered form in mutliple different areas. To use them, place them in the root of the form-schema like so:

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
form             | The form element itself
questionPanels   | The div that wraps around the active `questionPanel`
questionPanel    | The div that wraps around the active `questionSets` and the button bar
questionSet      | The div that wraps around the `questions` inside a `questionSet`
question         | The div that wraps around the `question`
label            | Label inside of a `question`
backButton       | Panel-back button, shown when on a second panel
controlButton    | Typically the Next or Submit button, depending on panel
buttonBar        | The div wrapped around the buttons described above
errorMessage     | Error Message div class - Not used if custom renderError method used
input            | Assigned to the inputs for types `textInput`, `textareaInput`, `emailInput` and `passwordInput`
select           | Assigned to the `selectInput` select-element
file             | Assigned to the `fileInput` file-element
checkbox         | Assigned to the `checkboxOptionsInput` and `checkboxInput` checkbox-input
checkboxList     | Assigned the to UL wrapped around the checkbox items in `checkboxOptionsInput`
checkboxListItem | Assigned to the LI inside of the `checkboxList` mentioned above
checkboxLabel    | Assigned to the label inside of a checkbox option
radioList        | Assigned to the UL wrapped around the radio items in `radioOptionsInput`
radioListItem    | Assigned to the LI inside of the `radioList` mentioned above
radioLabel       | Assigned to the label inside of a radio button option
radio            | Assigned to the radio button inside of a `radioOptionsInpout` 

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
  .inputTypes
  .addInputType('myAwesomeInputType', MyAwesomeInputType);
			
// OR

Winterfell
  .inputTypes
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

Validation methods can be added and will be chosen over methods defined in the Validator package. 

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

Prop Name       | Type     | Description
---             | ---      | ---
panelId         | string   | Initial `panelId` to render
schema          | object   | `schema` for the form to render
ref             | string   | `ref` field for form element
encType         | string   | `encType` field for the form element
method          | string   | `method` field for the form element
action          | string   | Default `action` field for the form element
disableSubmit   | boolean  | Prevent the form from submitting naturally
questionAnswers | object   | Existing `questionAnswers`. `questionId` => `answer`
renderError     | function | Custom validation error render method. Return a React Component Or React Element.

## Events

The following events can be registered as props of Winterfell.

Event Prop | Description | Arguments
--- | --- | ---
onRender      | Fired when Winterfell has initially rendered   | N/A
onUpdate      | Fired when a questions answer has been changed | `questionAnswers`
onSwitchPanel | Fired when a panel is switched or changed      | `panel`
onSubmit      | Fired when the form is submitted successfully  | `questionAnswers`, `action`



## Final Notes

Pull requests are completely welcome. If you'd like to get in touch, [Tweet me](http://twitter.com/andrewhathaway).

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