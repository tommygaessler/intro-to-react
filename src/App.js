import React, { Component } from 'react';
import logo from './logo.svg';
import Name from './Name.js';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Tommy'
    }
  }

  changeName(event) {
    this.setState(
      {
        name: event.target.value
      }
    )
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="text" value={this.state.name} onChange={this.changeName.bind(this)}></input>
        <Name name={this.state.name}></Name>
      </div>
    );
  }
}

export default App;
