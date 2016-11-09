/**
 * checkboxAction - ActionCreator for click checkbox event
 *
 * @public
 * @param {boolean} checked - Whether the checkbox is checked.
 * @return {Object} 'CLICK' action.
 * @example
 * onClick(e) {
 *   store.dispatch(checkboxAction(e.target.checked));
 * }
 */
export default function checkboxAction(checked) {
  return {
    type: 'CLICK',
    checked
  };
}
