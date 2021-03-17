import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './components/Navbar.css';
import './App.css';
import Home from './pages/Home';
import Parcels from './pages/Parcels';
import Disponibility from './pages/Disponibility';
import Taches from './components/Taches';
import './components/Taches.css';
import './components/Card.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <>
      <p>TaskApp</p>
      <Router>
        <Navbar />
        <Switch>
          <Taches />
          <Route path='/' exact component={Home} />
          <Route path='/parcels' component={Parcels} />
          <Route path='/disponibility' component={Disponibility} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
