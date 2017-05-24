import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

// Required for material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

/* Material-ui */
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import customBaseTheme from './customBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
const muiTheme = getMuiTheme(customBaseTheme);

const Root = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <App/>
  </MuiThemeProvider>
);

ReactDOM.render(
  <Root/>,
  document.getElementById('root')
);
