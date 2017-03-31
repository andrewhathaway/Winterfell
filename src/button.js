var React = require('react');

class Button extends React.Component {

  handleClick(e) {
    e.preventDefault();

    this.props.onClick();
  }

  render() {
    const { className, text, ...props } = this.props;

    return (
      <button
         {...props}
         href="#"
         className={this.props.className}
         onClick={this.handleClick.bind(this)}>
        {this.props.text}
      </button>
    );
  }

};

Button.defaultProps = {
  text      : 'Submit',
  className : undefined,
  onClick   : () => {}
};

module.exports = Button;