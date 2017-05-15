import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom';

import './App.css';

/* Material-ui */
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import customBaseTheme from './customBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
const muiTheme = getMuiTheme(customBaseTheme);


import DataTest from './components/DataTest';
import NavBar from './components/NavBar';
import Divider from 'material-ui/Divider';

import Home from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
          <div>
            <NavBar />
            <Divider />
            <Switch>
              <Route exact path="/" component={ Home }/>
              <Route path="/data" component={ DataTest }/>
              <Route path="/projects/:id" component={ Child }/>
              <Route component={ NotFoundPage }/>
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
);

export default App;
