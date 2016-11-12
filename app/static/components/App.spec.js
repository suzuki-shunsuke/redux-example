import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import App from './App.jsx';
import Checkbox from './Checkbox.jsx';
import ResultSpace from './ResultSpace.jsx';

describe('App', () => {
  it('should render Checkbox and ResultSpace', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.containsAllMatchingElements([
      <Checkbox/>,
      <ResultSpace/>
    ])).to.equal(true);
  });
});
