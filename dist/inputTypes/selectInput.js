'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var SelectInput = function (_React$Component) {
  _inherits(SelectInput, _React$Component);

  function SelectInput(props) {
    _classCallCheck(this, SelectInput);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SelectInput).call(this, props));

    _this.state = {
      value: _this.props.value
    };
    return _this;
  }

  _createClass(SelectInput, [{
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState({
        value: e.target.value
      }, this.props.onChange.bind(null, e.target.value));
    }
  }, {
    key: 'render',
    value: function render() {
      var options = this.props.options.map(function (opt) {
        return React.createElement(
          'option',
          { key: opt.value,
            value: opt.value },
          opt.text
        );
      });

      return React.createElement(
        'select',
        { name: this.props.name,
          id: this.props.id,
          className: this.props.classes.select,
          value: this.state.value,
          ref: 'select',
          required: this.props.required ? 'required' : undefined,
          onChange: this.handleChange.bind(this),
          onBlur: this.props.onBlur.bind(null, this.state.value) },
        options
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      /*
       * Selects automatically pick the first item, so
       * make sure we set it.
       */
      this.handleChange({
        target: {
          value: this.refs.select.value
        }
      });
    }
  }]);

  return SelectInput;
}(React.Component);

;

SelectInput.defaultProps = {
  classes: {},
  name: undefined,
  id: undefined,
  value: undefined,
  options: [],
  onChange: function onChange() {},
  onBlur: function onBlur() {}
};

module.exports = SelectInput;