import React, { Component } from 'react';
import { hashHistory, Link } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <Link to="/otherpage">Link to other page</Link>
      </div>
    )
  }
}

export default Home;
