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
         className={this.props.classes.input}
         onClick={this.handleClick.bind(this)}>
        {this.props.text}
      </button>
    );
  }

};

ButtonInput.defaultProps = {
  id        : '',  
  icon      : '',
  name      : '',
  text      : 'Add',
  classes   : {},
  onClick   : () => {}
};

export default ButtonInput;