import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Checkbox from './Checkbox.jsx';

describe('Checkbox', () => {
  it('should render input:checkbox', () => {
    const wrapper = shallow(<Checkbox/>);
    expect(wrapper.is('input[type="checkbox"]')).to.true;
  });
  it('when checked=true should render input:checkbox[checked=true]', () => {
    const wrapper = shallow(<Checkbox checked={true} />);
    expect(wrapper.is('input[type="checkbox"][checked=true]')).to.true;
  });
  it('when checked=false should render input:checkbox[checked=false]', () => {
    const wrapper = shallow(<Checkbox checked={false} />);
    expect(wrapper.is('input[type="checkbox"][checked=false]')).to.true;
  });
  /*
  it('should change checked when change event is fired', () => {
    const wrapper = mount(<Checkbox checked={false} />);
    const checkbox = wrapper.find('input');
    expect(checkbox.prop('checked')).to.false;
    checkbox.simulate('change', {target: {checked: true}});
    expect(checkbox.prop('checked')).to.true;
  });
  */
});
