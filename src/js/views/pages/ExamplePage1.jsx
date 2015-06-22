// Modules
import React from 'react/addons';

// Store
import ExampleRefluxStore from '../../stores/ExampleRefluxStore.jsx';

export default React.createClass({

  // Local Method
  uiMethod() {
    ExampleRefluxStore.setStoreData({testData: 'THIS IS A TEST'});
  },

  render() {
    return (
      <div className = "page-1">
        <main>
          <h2>THIS IS PAGE 1</h2>
          <button onClick={this.uiMethod}>Button specific to page 1</button>
          <div>testData: {this.props.storeData.testData}</div>
          <div>moreTestData: {this.props.storeData.moreTestData}</div>
        </main>
      </div>
    );
  }
});
