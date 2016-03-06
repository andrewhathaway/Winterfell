'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var FileInput = function (_React$Component) {
  _inherits(FileInput, _React$Component);

  function FileInput(props) {
    _classCallCheck(this, FileInput);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FileInput).call(this, props));

    _this.state = {
      value: _this.props.value
    };
    return _this;
  }

  _createClass(FileInput, [{
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState({
        value: e.target.value
      }, this.props.onChange.bind(null, e.target.value));
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement('input', { type: 'file',
        name: this.props.name,
        id: this.props.id,
        'aria-labelledby': this.props.labelId,
        className: this.props.classes.file,
        required: this.props.required ? 'required' : undefined,
        onChange: this.handleChange.bind(this),
        onBlur: this.props.onBlur.bind(null, this.state.value) });
    }
  }]);

  return FileInput;
}(React.Component);

;

FileInput.defaultProps = {
  classes: {},
  name: undefined,
  id: undefined,
  value: undefined,
  onChange: function onChange() {},
  onBlur: function onBlur() {}
};

module.exports = FileInput;