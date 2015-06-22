// Modules
import React  from 'react/addons';
import Router from 'react-router-component';

// Router Components
var Locations = Router.Locations;
var Location  = Router.Location;
var NotFound  = Router.NotFound;

// Features
import ExampleFeature from './ExampleFeature/ExampleFeature.jsx';

// Global Pages
import NotFoundPage      from './global/pages/Page404.jsx';

export default React.createClass({
  render: function() {
    return (
      <div id='app-container' className='app-container'>
        <Locations id='features-container' className='features-container'>
            <Location path='/'            handler = { ExampleFeature } />
            <Location path='/example(/*)' handler = { ExampleFeature } />
            <NotFound                     handler = { NotFoundPage } />
        </Locations>
      </div>
    );
  }
});
