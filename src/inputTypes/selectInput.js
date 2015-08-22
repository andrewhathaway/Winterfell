var React = require('react');

class SelectInput extends React.Component {

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
    var options = this.props.options.map(opt =>
      <option key={opt.value}
              value={opt.value}>
        {opt.text}
      </option>
    );

    return (
      <select name={this.props.name}
              className={this.props.className}
              selected={this.state.selected}
              ref="select"
              onChange={this.handleChange.bind(this)}>
        {options}
      </select>
    );
  }

  componentDidMount() {
    this.handleChange.call(this, {
      target : {
        value : this.refs.select.getDOMNode().value
      }
    });
  }

};

SelectInput.defaultProps = {
  className   : undefined,
  name        : undefined,
  value       : undefined,
  options     : [],
  onChange    : () => {}
};

module.exports = SelectInput;