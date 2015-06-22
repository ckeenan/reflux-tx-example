// Modules
import React  from 'react/addons';
import Router from 'react-router-component';

// Router Link Component
var Link = Router.Link;

export default React.createClass({
  render() {
    return (
      <nav>
        <ul>
          <li><Link className="pure-button" href="/example/page1"><i className="fa fa-file-o"></i> Page 1</Link></li>
          <li><Link className="pure-button" href="/example/page2"><i className="fa fa-file-o"></i> Page 2</Link></li>
        </ul>
      </nav>
    );
  }
});
