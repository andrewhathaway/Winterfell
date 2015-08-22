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
      <ul className={this.props.classes.radioList}>
        {this.props.options.map(opt =>
          <li key={opt.value}
              className={this.props.classes.radioListItem}>
            <label className={this.props.classes.radioLabel}>
              <input type="radio"
                     name={this.props.name}
                     checked={this.state.value == opt.value}
                     onChange={this.handleChange.bind(this, opt.value)}
                     className={this.props.classes.radio} />
              {opt.text}
            </label>
          </li>
        )}
      </ul>
    );
  }

};

RadioOptionsInput.defaultProps = {
  classes  : {},
  name     : undefined,
  value    : undefined,
  options  : [],
  onChange : () => {}
};

module.exports = RadioOptionsInput;