import React from 'react';

class SelectInput extends React.Component {
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
        var options = this.props.options.map(opt => (
            <option key={opt.value} value={opt.value}>
                {opt.text}
            </option>
        ));

        return (
            <select
                name={this.props.name}
                id={this.props.id}
                className={this.props.classes.select}
                value={this.state.value}
                required={this.props.required ? 'required' : undefined}
                disabled={this.props.readOnly || this.props.disabled}
                onChange={this.handleChange.bind(this)}
                onFocus={this.props.onFocus.bind(this)}
                onBlur={this.props.onBlur.bind(null, this.state.value)}
            >
                {options}
            </select>
        );
    }


}

SelectInput.defaultProps = {
    classes: {},
    name: '',
    id: '',
    value: '',
    options: [],
    readOnly: false,
    onChange: () => {},
    onBlur: () => {},
    onFocus: () => {},
};

export default SelectInput;
