import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs } from 'material-ui/Tabs';

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    let urlPath = window.location.pathname;
    let currentTab = urlPath.split('/').pop();

    this.setState({
      activeTab: currentTab || 'home'
    });
  }

  handleChange = (value) => {
    this.setState({ value });
  };

  render() {
    return (
      <Tabs>
        <Tab label="Home" value="home" containerElement={<Link to="/" />}/>
        <Tab label="Data" value="data" containerElement={<Link to="/data" />}/>
        <Tab label="Projects" value="projects" containerElement={<Link to="/projects/herpaderp" />}/>
      </Tabs>
    );
  }
}
