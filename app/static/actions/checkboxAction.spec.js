import { expect } from 'chai';
import checkboxAction from './checkboxAction.js';

describe('A checkboxAction suite', () => {
  it('Aciton type is "CLICK"', () => {
    expect(checkboxAction(true)).to.eql({
      type: 'CLICK',
      checked: true
    });
    expect(checkboxAction(false)).to.eql({
      type: 'CLICK',
      checked: false
    });
  });
});
