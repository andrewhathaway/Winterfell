var React = require('react');

class CheckboxOptionsInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value : this.props.value
    };
  }

  handleChange(e) {
    var value = this.state.value;

    if (e.target.checked) {
      value.push(e.target.value);
    } else {
      value = value.filter(val => val != e.target.value);
    }


    this.setState({
      value : value
    }, this.props.onChange.bind(null, value));
  }

  render() {
    return (
      <ul className={this.props.className}>
        {this.props.options.map(opt =>
          <li key={opt.value}>
            <label>
              <input type="checkbox"
                     name={this.props.name}
                     value={opt.value}
                     checked={this.state.value.indexOf(opt.value) > -1}
                     onChange={this.handleChange.bind(this)}
                     className={this.props.checkboxClassName} />
              {opt.text}
            </label>
          </li>
        )}
      </ul>
    );
  }

};

CheckboxOptionsInput.defaultProps = {
  className         : undefined,
  checkboxClassName : undefined,
  name              : undefined,
  value             : [],
  options           : [],
  onChange          : () => {}
};

module.exports = CheckboxOptionsInput;