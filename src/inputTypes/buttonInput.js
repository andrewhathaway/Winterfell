import React from 'react';

class ButtonInput extends React.Component {

  handleClick(e) {
    e.preventDefault();
    this.props.onClick(this.props.questionSetId);
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
  questionSetId     : undefined,
  id                : undefined,  
  icon              : undefined,
  text              : 'Add',
  class             : '',
  onClick           : () => {}
};

export default ButtonInput;