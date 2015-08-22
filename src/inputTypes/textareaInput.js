var React = require('react');

class TextareaInput extends React.Component {

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
      <textarea type="text"
                name={this.props.name}
                className={this.props.classes.input}
                placeholder={this.props.placeholder}
                value={this.state.value}
                onChange={this.handleChange.bind(this)} />
    );
  }

};

TextareaInput.defaultProps = {
  classes     : {},
  name        : undefined,
  value       : undefined,
  placeholder : undefined,
  onChange    : () => {}
};

module.exports = TextareaInput;