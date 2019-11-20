import React from 'react';

import Header from './components/Header'
import Home from './screen/Home'
import Characters from './screen/Characters'
import { Switch, Route } from 'react-router-dom'
import DisplayCharacter from "./screen/DisplayCharacter"

import './App.css';

function App() {
  return (
    <div className="App">
    <Header />
    <Switch>
    
    <Route exact path= '/' component ={Home} />
    <Route  path= '/characters' component={Characters} />
    <Route path="/character/:id" component={DisplayCharacter} />
    
    </Switch>
    </div>
  );
}

export default App;
