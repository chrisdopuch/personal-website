import React, { Component } from 'react';
import me from './me.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={me} className="App-face" alt="my-face"/>
          <p>
            I wrote enough React to make my head spin!
          <br/>
            More content to come soon...
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
