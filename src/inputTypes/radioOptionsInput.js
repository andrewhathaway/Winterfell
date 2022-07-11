import React from 'react';

class RadioOptionsInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value,
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.value !== nextProps.value) this.setState({ value: nextProps.value });
    }

    handleChange(value) {
        this.setState(
            {
                value: value,
            },
            this.props.onChange.bind(null, value)
        );
    }

    render() {
        return (
            <ul className={this.props.classes.radioList}>
                {this.props.options.map(opt => (
                    <li key={opt.value} className={this.props.classes.radioListItem}>
                        <label className={this.props.classes.radioLabel} id={this.props.labelId}>
                            <input
                                type='radio'
                                name={this.props.name}
                                aria-labelledby={this.props.labelId}
                                checked={this.state.value == opt.value}
                                className={this.props.classes.radio}
                                required={this.props.required ? 'required' : undefined}
                                disabled={this.props.readOnly || this.props.disabled}
                                value={opt.value}
                                onChange={this.handleChange.bind(this, opt.value)}
                                onFocus={this.props.onFocus.bind(this)}
                                onBlur={this.props.onBlur.bind(null, this.state.value)}
                            />
                            <span>{opt.text}</span>
                        </label>
                    </li>
                ))}
            </ul>
        );
    }
}

RadioOptionsInput.defaultProps = {
    classes: {},
    name: '',
    value: '',
    options: [],
    readOnly: false,
    onChange: () => {},
    onBlur: () => {},
    onFocus: () => {},
};

export default RadioOptionsInput;
