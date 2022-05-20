import React from 'react';
import cloneArray from '../lib/cloneArray';

class CheckboxOptionsInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value.length > 0 ? cloneArray(this.props.value) : [],
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.value !== nextProps.value) this.setState({ value: nextProps.value });
    }

    handleChange(newVal, e) {
        var currentValue = this.state.value;

        if (e.target.checked) {
            currentValue.push(newVal);
        } else {
            currentValue = currentValue.filter(v => v != newVal);
        }

        this.setState(
            {
                value: currentValue,
            },
            this.props.onChange.bind(null, currentValue)
        );
    }

    render() {
        return (
            <ul className={this.props.classes.checkboxList}>
                {this.props.options.map(opt => (
                    <li key={opt.value} className={this.props.classes.checkboxListItem}>
                        <label className={this.props.classes.checkboxLabel} id={this.props.labelId}>
                            <input
                                type='checkbox'
                                name={this.props.name}
                                aria-labelledby={this.props.labelId}
                                value={opt.value}
                                checked={this.state.value.indexOf(opt.value) > -1}
                                className={this.props.classes.checkbox}
                                required={this.props.required ? 'required' : undefined}
                                disabled={this.props.readOnly || this.props.disabled}
                                onChange={this.handleChange.bind(this, opt.value)}
                                onFocus={this.props.onFocus.bind(this)}
                                onBlur={this.props.onBlur.bind(null, this.state.value)}
                            />
                            {opt.text}
                        </label>
                    </li>
                ))}
            </ul>
        );
    }
}

CheckboxOptionsInput.defaultProps = {
    classes: {},
    name: '',
    value: [],
    options: [],
    readOnly: false,
    onChange: () => {},
    onBlur: () => {},
    onFocus: () => {},
};

export default CheckboxOptionsInput;
