import React from 'react';

class TextInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value,
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.value !== nextProps.value) this.setState({ value: nextProps.value });
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
                type='text'
                name={this.props.name}
                id={this.props.id}
                aria-labelledby={this.props.labelId}
                className={this.props.classes.input}
                placeholder={this.props.placeholder}
                value={this.state.value}
                disabled={this.props.readOnly || this.props.disabled}
                required={this.props.required ? 'required' : undefined}
                onChange={this.handleChange.bind(this)}
                onBlur={this.props.onBlur.bind(null, this.state.value)}
                onFocus={this.props.onFocus.bind(this)}
                onKeyDown={this.props.onKeyDown}
            />
        );
    }
}

TextInput.defaultProps = {
    classes: {},
    name: '',
    id: '',
    value: '',
    placeholder: '',
    disabled: undefined,
    readOnly: false,
    onChange: () => {},
    onBlur: () => {},
    onKeyDown: () => {},
    onFocus: () => {},
};

export default TextInput;
