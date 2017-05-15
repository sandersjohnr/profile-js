import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs } from 'material-ui/Tabs';

export default () => (
  <Tabs>
    <Tab label="Home" containerElement={<Link to="/">Home</Link>}/>
    <Tab label="Data" containerElement={<Link to="/data">Data</Link>}/>
    <Tab label="Projects" containerElement={<Link to="/projects/one">Projects</Link>}/>
    {/* <ul>
      <li></li>
      <li><Link to="/data">Data</Link></li>
      <li><Link to="/topics">Topics</Link></li>
    </ul> */}
  </Tabs>
);
