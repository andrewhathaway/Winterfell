import React from 'react';
import ReactSwitch from 'react-switch';

const Switch = ({ checked, onChange }) => {
    const handleChange = checked => {
        onChange(checked);
    };

    return (
        <label>
            <ReactSwitch
                onChange={handleChange}
                checked={checked}
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
};

Switch.defaultProps = {
    checked: false,
    onChnage: () => {},
};

export default Switch;
