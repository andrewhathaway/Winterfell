var React = require('react');

class Button extends React.Component {

  handleClick(e) {
    e.preventDefault();

    this.props.onClick();
  }

  render() {
    return (
      <a href="#"
         className={this.props.className}
         onClick={this.handleClick.bind(this)}>
        {this.props.text}
      </a>
    );
  }

};

Button.defaultProps = {
  text      : 'Submit',
  className : undefined,
  onClick   : () => {}
};

module.exports = Button;