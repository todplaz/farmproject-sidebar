import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './components/Navbar.css';
import './App.css';
import Home from './pages/Home';
import Parcels from './pages/Parcels';
import Disponibility from './pages/Disponibility'

function App() {
  return (
      <>
      <p>TaskApp</p>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/parcels' component={Parcels} />
          <Route path='/disponibility' component={Disponibility} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
