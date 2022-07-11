import React from 'react';

class PasswordInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value,
        };
    }

    handleChange(e) {
        this.setState(
            {
                value: e.target.value,
            },
            this.props.onChange.bind(null, e.target.value)
        );
    }

    render() {
        return (
            <input
                type='password'
                name={this.props.name}
                id={this.props.id}
                aria-labelledby={this.props.labelId}
                className={this.props.classes.input}
                placeholder={this.props.placeholder}
                value={this.state.value}
                required={this.props.required ? 'required' : undefined}
                readOnly={this.props.readOnly || this.props.disabled}
                onChange={this.handleChange.bind(this)}
                onFocus={this.props.onFocus.bind(this)}
                onBlur={this.props.onBlur.bind(null, this.state.value)}
                onKeyDown={this.props.onKeyDown}
            />
        );
    }
}

PasswordInput.defaultProps = {
    classes: {},
    name: '',
    id: '',
    value: '',
    placeholder: '',
    readOnly: false,
    onChange: () => {},
    onBlur: () => {},
    onKeyDown: () => {},
    onFocus: () => {},
};

export default PasswordInput;
