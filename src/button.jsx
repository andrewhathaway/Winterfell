const React = require('react');

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.props.onClick();
  }

  render() {
    return (
      <button
        href="#"
        className={this.props.className}
        onClick={this.handleClick}
      >
        {this.props.text}
      </button>
    );
  }
}

Button.propTypes = {
  text: React.PropTypes.string,
  className: React.PropTypes.string,
  onClick: React.PropTypes.func
};

Button.defaultProps = {
  text: 'Submit',
  className: '',
  onClick: () => {}
};

module.exports = Button;
