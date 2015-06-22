// Modules
import React  from 'react/addons';
import Router from 'react-router-component';
import Reflux from 'reflux';

// Store
import ExampleRefluxStore from '../../stores/ExampleRefluxStore.jsx';

// Pages
import ExamplePage1 from '../../views/pages/ExamplePage1.jsx';
import ExamplePage2 from '../../views/pages/ExamplePage2.jsx';
import Header       from '../../components/Header.jsx';

// Router Components
var Locations = Router.Locations; // Router Container
var Location  = Router.Location;  // Specific Route
var NotFound  = Router.NotFound;  // Fallback to 404

export default React.createClass({
  mixins: [Reflux.ListenerMixin], // Will mount and unmount eventListener automatically

  componentWillMount() {
    this.listenTo(ExampleRefluxStore, this.publishedDataStatus); // Listn to store, trigger callback
  },

  publishedDataStatus(data) {
    data.event === 'updatedStoreData' ? this.forceUpdate() : null; // Trigger child component refreshes
  },

  render() {
    return (
      <div id="exmaple-controller-container" className="exmaple-controller-container">
        <Header/>
        <Locations id="exmaple-pages-container" className="exmaple-pages-container">
            <Location path="/"              handler = { ExamplePage1 } storeData={ExampleRefluxStore.data}/>
            <Location path="/example/page1" handler = { ExamplePage1 } storeData={ExampleRefluxStore.data}/>
            <Location path="/example/page2" handler = { ExamplePage2 } storeData={ExampleRefluxStore.data}/>
        </Locations>
      </div>
    );
  }
});
