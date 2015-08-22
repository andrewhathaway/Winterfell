var React = require('react');

class EmailInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value : this.props.value
    };
  }

  handleChange(e) {
    this.setState({
      value : e.target.value
    }, this.props.onChange.bind(null, e.target.value));
  }

  render() {
    return (
      <input type="email"
             name={this.props.name}
             className={this.props.className}
             placeholder={this.props.placeholder}
             value={this.state.value}
             onChange={this.handleChange.bind(this)} />
    );
  }

};

EmailInput.defaultProps = {
  className   : undefined,
  name        : undefined,
  value       : undefined,
  placeholder : undefined,
  onChange    : () => {}
};

module.exports = EmailInput;