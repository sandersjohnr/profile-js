import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom';

 import './App.css';

/* Material-ui */
//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Divider from 'material-ui/Divider';
import DataTest from './components/DataTest';
import NavBar from './components/NavBar'
import Home from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <NavBar />
            <Divider />
            <Switch>
              <Route exact path="/" component={ Home }/>
              <Route path="/data" component={ DataTest }/>
              {/* <Route path="/topics" component={ Topics }/> */}
              <Route component={ NotFoundPage }/>
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
