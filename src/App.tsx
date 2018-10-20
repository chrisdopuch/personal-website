import * as React from 'react';
import './App.css';
import me from './me.jpg';

class App extends React.Component {
  public render() {
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
