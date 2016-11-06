import React, { Component } from 'react';

class ResultSpace extends Component {
  render() {
    return (
      <p>{String(this.props.checked)}</p>
    );
  }
}

export default ResultSpace;
