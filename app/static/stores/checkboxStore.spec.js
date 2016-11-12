import { expect } from 'chai';
import store from './checkboxStore.js';

describe('A checkboxStore suite', () => {
  it('store has the getState method', () => {
    expect(store).to.have.property('getState');
  });
  it('initial state is false', () => {
    expect(store.getState()).to.equal(false);
  });
});
