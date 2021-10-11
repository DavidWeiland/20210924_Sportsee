import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './utils/style/index.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import HorizontalNavBar from './components/Menu/HorizontalNavBar'
import VerticalNavBar from './components/Menu/VerticalNavBar'
import Error from './pages/Error'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <HorizontalNavBar />
      <div className="row">
        <VerticalNavBar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/dashboard/:userId'>
            <Dashboard />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
