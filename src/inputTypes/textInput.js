var React = require('react');

class TextInput extends React.Component {

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
      <input type="text"
             name={this.props.name}
             id={this.props.id}
             aria-labelledby={this.props.labelId}
             className={this.props.classes.input}
             placeholder={this.props.placeholder}
             value={this.state.value}
             required={this.props.required
                         ? 'required'
                         : undefined}
             onChange={this.handleChange.bind(this)}
             onFocus={this.props.onFocus.bind(null, this.props.id)}
             onBlur={this.props.onBlur.bind(null, this.state.value)}
             onKeyDown={this.props.onKeyDown} />
    );
  }

};

TextInput.defaultProps = {
  classes     : {},
  name        : '',
  id          : '',
  value       : '',
  placeholder : '',
  onChange    : () => {},
  onBlur      : () => {},
  onKeyDown   : () => {},
  onFocus     : () => {}
};

module.exports = TextInput;
