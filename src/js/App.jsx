// Modules
import React  from 'react/addons';
import Router from 'react-router-component';

// Router Components
var Locations = Router.Locations;
var Location  = Router.Location;
var NotFound  = Router.NotFound;

// Controller
import ExampleController from './views/pages/ExampleController.jsx';

// Pages
import NotFoundPage      from './views/pages/Page404.jsx';

export default React.createClass({
  render: function() {
    return (
      <div id='app-container' className='app-container'>
        <Locations id='controllers-container' className='controllers-container'>
            <Location path='/'            handler = { ExampleController } />
            <Location path='/example(/*)' handler = { ExampleController } />
            <NotFound                     handler = { NotFoundPage } />
        </Locations>
      </div>
    );
  }
});
