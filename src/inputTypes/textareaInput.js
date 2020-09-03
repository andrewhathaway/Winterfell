import React from 'react';

class TextareaInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value : this.props.value
    };
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.value !== nextProps.value)
    this.setState({value: nextProps.value});
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
                id={this.props.id}
                aria-labelledby={this.props.labelId}
                className={this.props.classes.input}
                placeholder={this.props.placeholder}
                value={this.state.value}
                disabled={this.props.disabled ? true : undefined}
                required={this.props.required
                            ? 'required'
                            : undefined}
                disabled={this.props.readOnly ? true : false }
                onChange={this.handleChange.bind(this)}
                onFocus={this.props.onFocus.bind(this)}
                onBlur={this.props.onBlur.bind(null, this.state.value)} />
    );
  }

};

TextareaInput.defaultProps = {
  classes     : {},
  name        : '',
  id          : '',
  value       : '',
  placeholder : '',
  disabled    : undefined,
  readOnly    : false,
  onChange    : () => {},
  onBlur      : () => {},
  onFocus     : () => {}
};

export default TextareaInput;