/**
 * checkboxStore - A store object.
 */

import { createStore } from 'redux';

import checkboxReducer from '../reducers/checkboxReducer.js';

/**
 * checkboxStore - A store object.
 * @public
 */
export default createStore(checkboxReducer);
