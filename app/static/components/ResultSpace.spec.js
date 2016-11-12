import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import ResultSpace from './ResultSpace.jsx';

describe('ResultSpace', () => {
  it('when checked=true text is true', () => {
    const wrapper = shallow(<ResultSpace checked={true} />);
    expect(wrapper.text()).equal('true');
  });
  it('when checked=false text is false', () => {
    const wrapper = shallow(<ResultSpace checked={false} />);
    expect(wrapper.text()).equal('false');
  });
});
