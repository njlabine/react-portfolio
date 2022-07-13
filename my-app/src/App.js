import React, { PureComponent } from 'react';
import { BrowserRotuer, Route, Switch } from 'react-router-dom';

//fancy
import './App.css';
import Main from './styled/Main'
import Footer from './styled/Footer'

//components
import About from './components/About'

//projects

class App extends PureComponent {
  renderHome = () => {
    return <Home />
  }
  renderAboutMe = () => {
    return <About />
  }
}

export default App;
