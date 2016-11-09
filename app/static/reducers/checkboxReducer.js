/**
 * checkboxReducer
 *
 * @example
 * import { createStore } from 'redux';
 * const store = createStore(checkboxReducer);
 */

/**
 * @public
 * @param {boolean} [checked=false]
 * @param {Object} action An action object.
 * @param {string} action.type
 * @return {boolean} The current state (Whether the checkbox is checked.).
 */
export default function checkboxReducer(checked=false, action) {
  switch (action.type) {
    case 'CLICK':
      return !checked;
    default:
      return false;
  }
}
