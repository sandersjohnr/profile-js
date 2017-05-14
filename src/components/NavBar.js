import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/data">Data</Link></li>
    <li><Link to="/topics">Topics</Link></li>
  </ul>
);
