import React, { Component } from 'react';
import { hashHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import { videoData } from '../actions/actions';


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

function mapStateToProps(state) {
  return {
    // video: state.video,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ /* videoData */ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
