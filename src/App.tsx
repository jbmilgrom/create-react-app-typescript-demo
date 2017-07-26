import * as React from 'react';
import './App.css';

import Hello from './components/Hello';
import MyInput from './components/MyInput';
import Header from './components/Header';

const logo = require('./logo.svg');
const defaultValue = 'I started as Jonathan';

class App extends React.Component<{}, {myInputValue: string}> {
    constructor() {
        super();
        this.state = {myInputValue: ''};
    }
    handleInputChange = (nextValue: string) =>  {
        this.setState({myInputValue: nextValue});
    }
    render() {
        return (
            <div className="App">
                <Header logo={logo} />
                <Hello name={this.state.myInputValue || defaultValue} enthusiasmLevel={4} />
                <MyInput value={this.state.myInputValue} handleChange={this.handleInputChange} />
            </div>
        );
    }
}

export default App;
