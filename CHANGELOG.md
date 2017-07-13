# Change Log

# [1.1.4](https://github.com/andrewhathaway/Winterfell/releases/tag/1.1.4) (2017-07-13)

**Fixed bugs:**

- Switch to new React Ref handling from previous ways

# [1.1.3](https://github.com/andrewhathaway/Winterfell/releases/tag/1.1.3) (2017-05-01)

**Fixed bugs:**

- Fix onRender and other handlers not being passed not defaulting [Issue](https://github.com/andrewhathaway/Winterfell/issues/90)

# [1.1.1](https://github.com/andrewhathaway/Winterfell/releases/tag/1.1.1) (2017-03-20)

**Fixed bugs:**

- Fix React warnings for uncontrolled components [PR](https://github.com/andrewhathaway/Winterfell/pull/84)

# [1.1.0](https://github.com/andrewhathaway/Winterfell/releases/tag/1.1.0) (2016-11-25)

**Fixed bugs:**

- State leaks into prototype/form value sharing [PR](https://github.com/andrewhathaway/Winterfell/pull/77) [Issue](https://github.com/andrewhathaway/Winterfell/issues/76)
- String vs. number mismatch in checkboxOptionsInput type [PR](https://github.com/andrewhathaway/Winterfell/pull/78) [Issue](https://github.com/andrewhathaway/Winterfell/issues/75)

# [1.0.9](https://github.com/andrewhathaway/Winterfell/releases/tag/1.0.8) (2016-10-08)

**Fixed bugs:**

- `React.findDOMNode` is not a function on Submit [PR](https://github.com/andrewhathaway/Winterfell/pull/68) [Issue](https://github.com/andrewhathaway/Winterfell/issues/66)

# [1.0.8](https://github.com/andrewhathaway/Winterfell/releases/tag/1.0.8) (2016-07-26)

**Fixed bugs:**

- CheckboxInputOptions had a typo on a require statement. [Commit](https://github.com/andrewhathaway/Winterfell/commit/dd070dc3f0e1b1a35d156eb07023de3dd7f0d5e2)

# [1.0.7](https://github.com/andrewhathaway/Winterfell/releases/tag/1.0.7) (2016-07-23)

**Fixed bugs:**

- CheckboxInputOptions stores values from all checkbox questions. [Commit](https://github.com/andrewhathaway/Winterfell/commit/f5854356c65ef0fc008cb71a4d53573ce4234d4c) [Issue](https://github.com/andrewhathaway/Winterfell/issues/45)
- Fix addValidationMethods. [PR](https://github.com/andrewhathaway/Winterfell/pull/61)
- Mistake in the default error message for isLength rule. [PR](https://github.com/andrewhathaway/Winterfell/pull/63) [Issue](https://github.com/andrewhathaway/Winterfell/issues/58)

# [1.0.6](https://github.com/andrewhathaway/Winterfell/releases/tag/1.0.6) (2016-01-02)

**Implemented enhancements & merged pull requests:**

- Add label/input associations for accessibility. [PR](https://github.com/andrewhathaway/Winterfell/pull/42)
- Implement fixes recommended by react-a11y. [PR](https://github.com/andrewhathaway/Winterfell/pull/48)


**Fixed bugs:**

- Fixed typo in JSON Schema example in README. [Commit](https://github.com/andrewhathaway/Winterfell/commit/c63da73dc95c9f6fb1d418a582813165f5882378)
- Fix validation check in `addInputTypes` to actually check the variable passed in. [Commit](https://github.com/andrewhathaway/Winterfell/commit/196609ee640deac5491dbb7ebcb9562072b7f459) [PR](https://github.com/andrewhathaway/Winterfell/pull/47)


## [1.0.5](https://github.com/andrewhathaway/Winterfell/releases/tag/1.0.5) (2015-10-08)

**Implemented enhancements & merged pull requests:**

- Allow custom props to be passed to the `inputTypes`. [PR](https://github.com/andrewhathaway/Winterfell/pull/38)
- Ability to set a default value for `checkboxInput`. [PR](https://github.com/andrewhathaway/Winterfell/issues/30)
- Avoid conflicts with Underscore within Winterfell and other projects. [PR](https://github.com/andrewhathaway/Winterfell/pull/40)
- Ability to disable the Next/Back buttons as well as change the back buttons text. [Issue & Commits](https://github.com/andrewhathaway/Winterfell/issues/39)
- New required asterisk rendering option for required fields. [Issue & Commits](https://github.com/andrewhathaway/Winterfell/issues/9)
- Question sets now have titles and text props along with their classes. [Issue & Commits](https://github.com/andrewhathaway/Winterfell/issues/33)
- Ability to do multi-field validation against other values. [Issue & Commit](https://github.com/andrewhathaway/Winterfell/issues/7)

**Fixed bugs:**

- Fixed classes for `questionPanelHeaderText` and `questionPanelText` not being assigned correctly. [Commit](https://github.com/andrewhathaway/Winterfell/commit/7e792cdb2383511b0749f85a0001ba3d611ff9d0)
- Wording fixes in README and update README to include undocumented features etc. [Commit](https://github.com/andrewhathaway/Winterfell/commit/1b36951f93e0c670c6fc368c317a75c8de4593a1)
- Default input to correct case [Commit](https://github.com/andrewhathaway/Winterfell/commit/34b6bb874ceed552c05af7498584db0577f2b995)
- Fix build/prepublush command [Commit](https://github.com/andrewhathaway/Winterfell/commit/219274b67c99c055931d8600dd51cb26cad8281c)
- Fix bug in addErrorMessages method where var was not present. [Commit](https://github.com/andrewhathaway/Winterfell/pull/23)
- Fix bug where addValidationMethod(s) helpers and addErrorMessage(s) helpers were not like the README describes. [Issue & Commits](https://github.com/andrewhathaway/Winterfell/issues/27)