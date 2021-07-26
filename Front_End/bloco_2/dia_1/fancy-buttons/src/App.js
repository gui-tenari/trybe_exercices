import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {button1: 0, button2: 0, button3: 0}
    this.showingMessage1 = this.showingMessage1.bind(this)
    this.showingMessage2 = this.showingMessage2.bind(this)
    this.showingMessage3 = this.showingMessage3.bind(this)
  }
  showingMessage1() {
    this.setState((current, _props) => ({button1: current.button1 + 1}))
  }
  showingMessage2() {
    this.setState((current, _props) => ({button2: current.button2 + 1}))
  }
  showingMessage3() {
    this.setState((current, _props) => ({button3: current.button3 + 1}))
  }

  render() {
    return (
      <div>
        <button onClick={this.showingMessage1}>{this.state.button1}</button>
        <button onClick={this.showingMessage2}> {this.state.button2}</button>
        <button onClick={this.showingMessage3}> {this.state.button3}</button>
      </div>
    )
  }
}
export default App;
