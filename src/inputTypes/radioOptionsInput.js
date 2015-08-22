var React = require('react');

class RadioOptionsInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value : this.props.value
    };
  }

  handleChange(value) {
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
              <input type="radio"
                     name={this.props.name}
                     checked={this.state.value == opt.value}
                     onChange={this.handleChange.bind(this, opt.value)}
                     className={this.props.radioClassName} />
              {opt.text}
            </label>
          </li>
        )}
      </ul>
    );
  }

};

RadioOptionsInput.defaultProps = {
  className      : undefined,
  radioClassName : undefined,
  name           : undefined,
  value          : undefined,
  options        : [],
  onChange       : () => {}
};

module.exports = RadioOptionsInput;