import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      counter: 0
    }
  }
  render() {
    return (
      <div>
        <span className="value">{this.state.counter}</span>
        <button id="inc" onClick={this.incrementVal.bind(this)}>Incrementa</button>
      </div>
    );
  }
  incrementVal () {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}

export default App;
