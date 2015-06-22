// Dependencies for building
require('font-awesome-webpack');
require('suitcss-base');
require('./css/styles.css');

// Modules
import React  from  'react/addons';
import Router from  'react-router-component';
import a11y   from  'react-a11y';

// Application
import App    from  './js/App.jsx';

// Debugger for DEV
a11y({'throw': true});

// Render App when DOM is loaded
document.addEventListener('DOMContentLoaded', (event) => {
  React.render(<App/>, document.getElementById('app'));
});
