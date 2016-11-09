/**
 * App - React Component
 */

import React, { Component } from 'react';

import Checkbox from './Checkbox.jsx';
import ResultSpace from './ResultSpace.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Checkbox checked={this.props.state} />
        <ResultSpace checked={this.props.state} />
      </div>
    );
  }
}

export default App;
