jest.unmock('../checkboxInput');

import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import CheckboxInput from '../checkboxInput';

describe('CheckboxInput', () => {
  it('when passed no props, should render in the default state', () => {
    // Arrange
    const wrapper = shallow(
      <CheckboxInput />
      );

    // Act
    // Assert
    const div = wrapper.find('div');
    expect(div.length).toBe(1);
    expect(div.className).toBeUndefined();

    const label = wrapper.find('label');

    expect(label.length).toEqual(1);
    expect(label.props().className).toBeUndefined();
    expect(label.props().id).toBeUndefined();
    expect(label.text()).toBe('');

    const input = wrapper.find('input');
    expect(input.length).toEqual(1);
    expect(input.props().name).toBeUndefined();
    //expect(input.props().aria-labelledby).toBeUndefined();
    expect(input.props().className).toBeUndefined();
    expect(input.props().defaultChecked).toBe(false);
    expect(input.props().value).toBeUndefined();
    expect(input.props().required).toBeUndefined();
    expect(input.props().onChange).toBeDefined();
    expect(input.props().onBlur).toBeDefined();
  });

  it('when passed props, should render the values', () => {
    // Arrange

    const props = {
      classes: {
        checkboxInput: 'checkboxInput-class',
        checkboxLabel: 'checkboxLabel-class',
        checkbox: 'checkbox-class'
      },
      labelId: 'labelId',
      name: 'propsTest',
      defaultChecked: true,
      value: true,
      required: true,
      text: 'checkboxInput'
    };

    const wrapper = shallow(
      <CheckboxInput {...props} />
    );

    // Act
    // Assert
    const div = wrapper.find('div');
    expect(div.length).toBe(1);
    expect(div.props().className).toBe(props.classes.checkboxInput);

    const label = wrapper.find('label');

    expect(label.length).toEqual(1);
    expect(label.props().className).toBe(props.classes.checkboxLabel);
    expect(label.props().id).toBe(props.labelId);
    expect(label.text()).toBe(props.text);

    const input = wrapper.find('input');
    expect(input.length).toEqual(1);
    expect(input.props().name).toBe(props.name);
    //expect(input.props().aria-labelledby).toBeUndefined();
    expect(input.props().className).toBe(props.classes.checkbox);
    expect(input.props().defaultChecked).toBe(true);
    expect(input.props().value).toBe(true);
    expect(input.props().required).toBe('required');
    expect(input.props().onChange).toBeDefined();
    expect(input.props().onBlur).toBeDefined();
  });

  it('when clicked, should toggle value', () => {
    // Arrange
    const onChangeFunc = sinon.spy();

    const wrapper = shallow(
      <CheckboxInput onChange={ onChangeFunc } />
      );

    // Act
    wrapper.find('input').simulate('click');

    // Assert
    expect(onChangeFunc.called).toBe(true);
  });
});
