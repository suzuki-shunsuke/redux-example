export default function checkboxReducer(checked=false, action) {
  switch (action.type) {
    case 'CLICK':
      return !checked;
    default:
      return false;
  }
}
