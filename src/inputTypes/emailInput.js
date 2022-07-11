import React from 'react';

class EmailInput extends React.Component {
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
                type='email'
                name={this.props.name}
                id={this.props.id}
                aria-labelledby={this.props.labelId}
                className={this.props.classes.input}
                placeholder={this.props.placeholder}
                value={this.state.value}
                disabled={this.props.disabled || this.props.readOnly}
                required={this.props.required ? 'required' : undefined}
                onChange={this.handleChange.bind(this)}
                onFocus={this.props.onFocus.bind(this)}
                onBlur={this.props.onBlur.bind(null, this.state.value)}
                onKeyDown={this.props.onKeyDown}
            />
        );
    }
}

EmailInput.defaultProps = {
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

export default EmailInput;
