import React, { Component } from 'react';
import Switch from 'react-switch';

class SwitchComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: this.props.checked,
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(checked) {
		this.setState({ checked });
	}

	handleChange(checked) {
		this.setState({ checked }, this.props.onChange.bind(null, checked));
	}

	render() {
		return (
			<label>
				<Switch
					onChange={this.handleChange}
					checked={this.state.checked}
					onColor='#3db28c'
					offColor='#c2303d'
					handleDiameter={20}
					uncheckedIcon={false}
					checkedIcon={false}
					height={26}
					width={48}
				/>
			</label>
		);
	}
}

SwitchComponent.defaultProps = {
	checked: false,
};

export default SwitchComponent;
