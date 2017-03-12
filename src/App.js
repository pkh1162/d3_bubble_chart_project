import React, { Component } from 'react';


import './styles/reactSVG.css';

import ControlGroup from './containers/ControlGroup';
import CandidatePage from './components/CandidatePage';
import ReactSVG from './containers/ReactSVG';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">  
        <ControlGroup/>    
        <ReactSVG/>
        <CandidatePage/>
        <Footer/>
      </div>
    );
  }
}

export default App;
