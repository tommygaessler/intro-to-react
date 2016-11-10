import React, { Component } from 'react';

class Name extends Component {
  render() {
    return (
      <div className="Name">
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

export default Name;
