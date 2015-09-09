var React = require('react');

class CheckboxInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      checked : false
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
      <div className={this.props.classes.checkboxInput}>
        <label className={this.props.classes.checkboxLabel}>
          <input type="checkbox"
                 name={this.props.name}
                 className={this.props.classes.checkbox}
                 checked={this.state.checked}
                 value={this.props.value}
                 required={this.props.required
                             ? 'required'
                             : undefined}
                 onChange={this.handleChange.bind(this)}
                 onBlur={this.props.onBlur.bind(null, (this.state.checked
                                                        ? this.props.value
                                                        : undefined))} />
          {this.props.text}
        </label>
      </div>
    );
  }

};

CheckboxInput.defaultProps = {
  text     : '',
  classes  : {},
  name     : undefined,
  value    : undefined,
  onChange : () => {},
  onBlur   : () => {}
};

module.exports = CheckboxInput;