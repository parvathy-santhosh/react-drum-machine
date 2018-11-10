import React, { Component } from 'react';
import './App.css';
import Drum from './Drum.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Drum Machine </h1>
          <hr className="hr" />
            <div id="drum-machine">
              <Drum />
              <div id="display"><br/></div>
            </div>
          <hr className="hr" />
          <small className="footer"> --- parvathy-santhosh -- 2018 --- </small>
        </header>
      </div>
    );
  }
}

export default App;
