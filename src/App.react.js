// @flow

import * as React from 'react';
import logo from './logo.svg';
import './App.css';

type Props = {
 logo: string,
};

type State = {||};

class App extends React.Component<Props, State> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={this.props.logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
