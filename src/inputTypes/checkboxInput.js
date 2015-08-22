var React = require('react');

class CheckboxInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      checked : true
    };
  }

  handleChange(e) {
    this.setState({
      checked : !this.state.checked
    }, () => {
      this.props.onChange(this.state.checked
                            ? this.props.value
                            : undefined);
    });
  }

  render() {
    return (
      <label className={this.props.className}>
        <input type="checkbox"
               name={this.props.name}
               className={this.props.checkboxClassName}
               checked={this.state.checked}
               value={this.props.value}
               onChange={this.handleChange.bind(this)} />
        {this.props.text}
      </label>
    );
  }

};

CheckboxInput.defaultProps = {
  text              : '',
  className         : undefined,
  checkboxClassName : undefined,
  name              : undefined,
  value             : undefined,
  onChange          : () => {}
};

module.exports = CheckboxInput;