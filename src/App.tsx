import * as React from 'react';
import './App.css';

import Header from './components/Header';
import Hello from './components/Hello';
import InputError from './components/InputError';
import MyInput from './components/MyInput';

const logo = require('./logo.svg');
const defaultName = 'Jonathan';
const defaultEnthusiasmLevel = 7;
const defaultErrorMessage = '';

interface State {
  name: string;
  enthusiasmLevel: number;
  enthusiasmLevelErrorMessage: string;
  inputNameValue?: string;
  inputEnthusiasmValue?: string;
}

class App extends React.Component<{}, State> {
  constructor() {
    super();
    this.state = {
      name: defaultName,
      enthusiasmLevel: defaultEnthusiasmLevel,
      enthusiasmLevelErrorMessage: defaultErrorMessage,
    };
  }

  handleNameChange = (nextName: string): void => {
    this.setState({ inputNameValue: nextName });
    this.setState({ name: nextName });
  };

  handleEnthusiasmChange = (nextEnthusiasmLevel: string): void => {
    this.setState({ inputEnthusiasmValue: nextEnthusiasmLevel });
    this.setEnthusiasmLevel(parseInt(nextEnthusiasmLevel, 10));
  };

  setEnthusiasmLevel = (level: number): void => {
    const errorMessage: string = this.getEnthusiasmErrorMessage(level);
    if (!errorMessage) {
      this.setState({ enthusiasmLevel: level });
      this.setState({ enthusiasmLevelErrorMessage: defaultErrorMessage });
    } else {
      this.setState({ enthusiasmLevelErrorMessage: errorMessage });
    }
  };

  getEnthusiasmErrorMessage(level: number): string {
    if (isNaN(level)) {
      return 'Please type in a number you goose, silly.';
    }
    if (level < 1) {
      return 'Why so serious?';
    }
    if (level > 9000) {
      return 'IT\'S OVER 9000!!!!!!!!!!!!!!';
    }
    if (level > 200) {
      return 'Calm down there buddy.';
    }
    return defaultErrorMessage;
  }

  render() {
    return (
      <div className="App">
        <Header logo={logo} />
        <Hello
          name={this.state.name}
          enthusiasmLevel={this.state.enthusiasmLevel}
        />
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
        <InputError message={this.state.enthusiasmLevelErrorMessage} />
      </div>
    );
  }
}

export default App;
