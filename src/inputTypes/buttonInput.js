import React from 'react';

class ButtonInput extends React.Component {

  handleClick(e, id) {
    e.preventDefault();
    this.props.onClick(id);
  }

  render() {
    return (
      <button
         className={this.props.classes.input}
         onClick={e => this.handleClick.bind(e, this.props.id)}>
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
  className : undefined,
  onClick   : () => {}
};

export default ButtonInput;