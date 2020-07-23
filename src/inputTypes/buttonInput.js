import React from 'react';

class ButtonInput extends React.Component {

  handleClick(e) {
    console.log('clicked button');
    e.preventDefault();
    this.props.onClick(this.props.id);
  }

  render() {
    return (
      <button
         className={this.props.class}
         onClick={this.handleClick.bind(this)}>
        {this.props.text}
      </button>
    );
  }

};

ButtonInput.defaultProps = {
  id        : undefined,  
  icon      : undefined,
  text      : 'Add',
  class     : '',
  onClick   : () => {}
};

export default ButtonInput;