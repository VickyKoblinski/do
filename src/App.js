import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Do</h2>
        </div>
        <p className="App-intro">
          My first do. {this.state.count}
        </p>
      </div>
    );
  }

  componentWillMount() {
    requestAnimationFrame(this.inc.bind(this))
  }

  inc() {
    this.setState({count: this.state.count + 1});
    requestAnimationFrame(this.inc.bind(this))
  }
}

export default App;
