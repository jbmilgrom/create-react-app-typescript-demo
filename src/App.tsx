import * as React from 'react';
import './App.css';

import Hello from './components/Hello';
import MyInput from './components/MyInput';
import Header from './components/Header';
import InputError from './components/InputError';

const logo = require('./logo.svg');
const defaultName = 'Jonathan';
const defaultEnthusiasmLevel = 4;
const defaultErrorMessage = '';

interface Props {
  name: string;
  enthusiasmLevel: number;
  enthusiasmLevelErrorMessage: string;
  inputNameValue?: string;
  inputEnthusiasmValue?: string;
}

class App extends React.Component<{}, Props> {
  constructor() {
    super();
    this.state = {
      name: defaultName,
      enthusiasmLevel: defaultEnthusiasmLevel,
      enthusiasmLevelErrorMessage: defaultErrorMessage
    };
  }

  handleNameChange = (nextName: string) => {
    this.setState({inputNameValue: nextName});
    this.setState({name: nextName});
  }

  handleEnthusiasmChange = (nextEnthusiasmLevel: string) => {
    this.setState({inputEnthusiasmValue: nextEnthusiasmLevel});
    this.setEnthusiasmLevel(nextEnthusiasmLevel);
  }

  setEnthusiasmLevel(nextEnthusiasmLevel: string) {
    const level = parseInt(nextEnthusiasmLevel, 10);
    let errorMessage;
    if (isNaN(level)) {
      errorMessage = 'Please type in a number you goose, silly.';
    } else if (level < 1) {
      errorMessage = 'Why so serious?';
    } else if (level > 200) {
      errorMessage = 'Calm down there buddy.';
    }
    if (!errorMessage) {
      this.setState({enthusiasmLevel: level});
      this.setState({enthusiasmLevelErrorMessage: defaultErrorMessage});
    } else {
      this.setState({enthusiasmLevelErrorMessage: errorMessage});
    }
  }

  render() {
    return (
      <div className="App">
        <Header logo={logo}/>
        <Hello name={this.state.name} enthusiasmLevel={this.state.enthusiasmLevel}/>
        <MyInput
          value={this.state.inputNameValue}
          placeholder="Name"
          handleChange={this.handleNameChange}
        />
        <MyInput
          value={this.state.inputEnthusiasmValue}
          placeholder="Enthusiasm level"
          handleChange={this.handleEnthusiasmChange}
        />
        <InputError message={this.state.enthusiasmLevelErrorMessage}/>
      </div>
    );
  }
}

export default App;
