import * as React from 'react';
import './App.css';

import Hello from './components/Hello';
import MyInput from './components/MyInput';
import Header from './components/Header';

const logo = require('./logo.svg');
const defaultName = 'I started as Jonathan';
const defaultEnthusiasmLevel = 4;

class App extends React.Component<{}, { name: string, enthusiasmLevel: string }> {
  constructor() {
    super();
    this.state = {name: '', enthusiasmLevel: ''};
  }

  getName = () => this.state.name || defaultName;

  handleNameChange = (nextName: string) => {
    this.setState({name: nextName});
  }

  getEnthusiasmLevel = () => {
    const level = parseInt(this.state.enthusiasmLevel, 10);
    if (isNaN(level)) {
      return defaultEnthusiasmLevel;
    }
    return level;
  }

  handleEnthusiasmChange = (nextEnthusiasmLevel: string) => {
    this.setState({enthusiasmLevel: nextEnthusiasmLevel});
  }

  render() {
    return (
      <div className="App">
        <Header logo={logo}/>
        <Hello name={this.getName()} enthusiasmLevel={this.getEnthusiasmLevel()}/>
        <MyInput
          value={this.state.name}
          placeholder="Enter name"
          handleChange={this.handleNameChange}
        />
        <MyInput
          value={this.state.enthusiasmLevel}
          placeholder="Enthusiasm level"
          handleChange={this.handleEnthusiasmChange}
        />
      </div>
    );
  }
}

export default App;
