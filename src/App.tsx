import React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import {
  Header,
  Welcome,
  Simulator,
  Contact
} from './components';

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          <div className='App-content'>
            <Switch>
              <Route exact path="/" component={Simulator} />
              <Route exact path="/accueil" component={Welcome} />
              <Route exact path="/simulateur" component={Simulator} />
              {/* <Route exact path="/contact" component={Contact} /> */}
            </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
