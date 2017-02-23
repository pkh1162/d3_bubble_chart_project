import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ControlGroup from './containers/ControlGroup';
import CandidatePage from './components/CandidatePage';
import UpdateCounter from './containers/UpdateCounter';
import ReactSVG from './containers/ReactSVG';

class App extends Component {
  render() {
    return (
      <div className="App">  
        <ControlGroup/>    
        <ReactSVG/>
        <CandidatePage/>
      </div>
    );
  }
}

export default App;
