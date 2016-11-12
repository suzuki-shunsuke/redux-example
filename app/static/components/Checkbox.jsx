import React, { Component } from 'react';

import checkboxAction from '../actions/checkboxAction.js';
import store from '../stores/checkboxStore.js';

class Checkbox extends Component {
  onChange(e) {
    store.dispatch(checkboxAction(e.target.checked));
  }

  render() {
    return (
      <input type="checkbox" checked={this.props.checked} onChange={this.onChange} />
    );
  }
}

Checkbox.PropTypes = {
  checked: React.PropTypes.bool.isRequired
};

export default Checkbox;
