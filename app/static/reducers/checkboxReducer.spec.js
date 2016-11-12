import { expect } from 'chai';
import checkboxReducer from './checkboxReducer.js';

describe('A checkboxReducer suite', () => {
  it('A default state is false', () => {
    expect(checkboxReducer(false, {})).to.equal(false);
  });
  it('state is reversed', () => {
    expect(checkboxReducer(false, {type: 'CLICK'})).to.equal(true);
    expect(checkboxReducer(true, {type: 'CLICK'})).to.equal(false);
  });
});
