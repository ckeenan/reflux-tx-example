// Modules
import React   from 'react/addons';
import Reflux  from 'reflux';
import Request from 'axios';
import _       from 'lodash';

export default Reflux.createStore({

  data: {
      testData: '',
      moreTestData: ''
  },

  init() {
    // Broadcast Store is ready
    this.trigger({
        store: 'DocumentRefluxStore',
        event: 'initStore',
        data: 'DocumentRefluxStore Initialized'
    });

    // this.callAPI('serverEndPoint',{ json: 'data'});
  },

  setStoreData(data) {

    // Merge new data
    _.assign(this.data, data);

    // Trigger global update
    this.updatedStoreData('setStoreData', this.data[data]);
  },

  updatedStoreData(functionName, data) {
    this.trigger({
        store: 'DocumentRefluxStore',
        event: 'updatedStoreData',
        data: data
    });
  },

  callAPI(functionName, input) {
    // var url = 'http://104.236.65.136:38080';
    // var path = '/api/documentSign/'

    // Request({
    //   method: 'post',
    //   url: url + path + functionName,
    //   data: JSON.stringify(input) // Might need to be JSON, not stringified JSON
    // }).then((data) => {
    //   this.setStoreData(data.data);
    // }).catch((data) => {
    //   console.log(data);
    // });
  }
});
