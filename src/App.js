import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Goals from './components/Goals.js';
import Help from './components/Help.js';
import Footer from './components/Footer.js';

// Styles
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar />
          
          <Route exact path="/" component={ Home } />
          <Route path="/Goals" component={ Goals } />
          <Route path="/Help" component={ Help } />

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;