import React, { Component } from 'react';
import Home from './pages/Home.js';
import MainNews from './pages/MainNews.js';
import Toggle from './pages/Toggle.js';
import Material from './pages/Material.js';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/news' component={MainNews}/>
          <Route path='/toggle' component={Toggle}/>
          <Route path='/material' component={Material}/>
        </Switch>
      </div>
    )
  }
}

export default App;
