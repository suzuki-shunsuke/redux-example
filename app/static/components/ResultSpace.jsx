import React, { Component } from 'react';

class ResultSpace extends Component {
  render() {
    return (
      <p>{String(this.props.checked)}</p>
    );
  }
}

ResultSpace.PropTypes = {
  checked: React.PropTypes.bool.isRequired
};

export default ResultSpace;
