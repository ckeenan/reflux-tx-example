// Modules
import React  from 'react/addons';
import web3   from 'web3';
import { TXActions, TXComponent } from 'reflux-tx';
import TXList from './TXList.jsx';

export default React.createClass({
  getInitialState() {
    return {
      connectionResult: '',
      provider: 'http://localhost:8545',
      connected: false
    };
  },
  sendTx() {
    var coinbase = web3.eth.coinbase;
    var hash = web3.eth.sendTransaction({
      from: coinbase,
      to: coinbase,
      value: 1
    });
    TXActions.add({hash: hash, extraInfo: 'test'});
  },
  clear() {
    TXActions.clearAll();
  },
  setProvider() {
    web3.setProvider(new web3.providers.HttpProvider(this.state.provider));
    if (web3.isConnected()) {
      TXActions.connect({provider: this.state.provider});

      this.setState({connectionResult: '', connected: true});
    } else this.setState({connectionResult: 'Could not set provider to ' + this.state.provider});
  },
  updateProvider(e) {
    this.setState({provider: e.target.value});
  },
  render() {
    if (this.state.connected)
      return (
        <div>
          <div>
            <button onClick={this.sendTx}>Send some wei to myself</button>
          </div>
          <div>
            <button onClick={this.clear}>Clear TXs</button>
          </div>
          <TXComponent filter={{extraInfo: 'test'}} keys={['pending', 'unconfirmed']}>
            <TXList />
          </TXComponent>
        </div>
      );
    else
      return (
          <div>
            Enter web3 provider:
            <input value={this.state.provider} onChange={this.updateProvider}></input>
            <button onClick={this.setProvider}>Submit</button>
            <div>
              {this.state.connectionResult}
            </div>
          </div>
          );
  }
});
