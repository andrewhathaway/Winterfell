import React from 'react';

class Button extends React.Component {
    handleClick(e) {
        e.preventDefault();

        this.props.onClick();
    }

    render() {
        return (
            <button href='#' className={this.props.className} onClick={this.handleClick.bind(this)}>
                {this.props.text}
            </button>
        );
    }
}

Button.defaultProps = {
    text: 'Submit',
    className: undefined,
    onClick: () => {},
};

export default Button;
