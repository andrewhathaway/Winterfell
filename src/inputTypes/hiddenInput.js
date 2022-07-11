import React from 'react';

class HiddenInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value,
        };
    }

    render() {
        return <input type='hidden' name={this.props.name} value={this.state.value} />;
    }
}

HiddenInput.defaultProps = {
    name: '',
    value: '',
};

export default HiddenInput;
