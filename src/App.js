import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.css';

import DataTest from './components/DataTest';
import NavBar from './components/NavBar';
// import Divider from 'material-ui/Divider';

import Home from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

console.log(process);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          {/* <Divider/> */}
          {/* <Switch> */}
            <Route exact path="/" component={ Home }/>
            <Route path="/data" component={ DataTest }/>
            <Route path='/projects' render={props => <div>Woop</div>} />
            <Route path="/projects/:id" component={ Child }/>
            <Route component={ NotFoundPage }/>
          {/* </Switch> */}
        </div>
      </Router>
    );
  }
}

const Child = ({ match }) => (
  <div>
    <h3>ID: { match.params.id }</h3>
  </div>
);

export default App;
