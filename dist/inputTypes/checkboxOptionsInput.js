'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var CheckboxOptionsInput = function (_React$Component) {
  _inherits(CheckboxOptionsInput, _React$Component);

  function CheckboxOptionsInput(props) {
    _classCallCheck(this, CheckboxOptionsInput);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CheckboxOptionsInput).call(this, props));

    _this.state = {
      value: _this.props.value
    };
    return _this;
  }

  _createClass(CheckboxOptionsInput, [{
    key: 'handleChange',
    value: function handleChange(e) {
      var value = this.state.value;

      if (e.target.checked) {
        value.push(e.target.value);
      } else {
        value = value.filter(function (val) {
          return val != e.target.value;
        });
      }

      this.setState({
        value: value
      }, this.props.onChange.bind(null, value));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'ul',
        { className: this.props.classes.checkboxList },
        this.props.options.map(function (opt) {
          return React.createElement(
            'li',
            { key: opt.value,
              className: _this2.props.classes.checkboxListItem },
            React.createElement(
              'label',
              { className: _this2.props.classes.checkboxLabel,
                id: _this2.props.labelId },
              React.createElement('input', { type: 'checkbox',
                name: _this2.props.name,
                'aria-labelledby': _this2.props.labelId,
                value: opt.value,
                checked: _this2.state.value.indexOf(opt.value) > -1,
                className: _this2.props.classes.checkbox,
                required: _this2.props.required ? 'required' : undefined,
                onChange: _this2.handleChange.bind(_this2),
                onBlur: _this2.props.onBlur.bind(null, _this2.state.value) }),
              opt.text
            )
          );
        })
      );
    }
  }]);

  return CheckboxOptionsInput;
}(React.Component);

;

CheckboxOptionsInput.defaultProps = {
  classes: {},
  name: undefined,
  value: [],
  options: [],
  onChange: function onChange() {},
  onBlur: function onBlur() {}
};

module.exports = CheckboxOptionsInput;