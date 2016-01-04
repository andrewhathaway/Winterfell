# Change Log


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