import React, { Component } from 'react'
import { Route, Router } from 'react-router'
import PropTypes from 'prop-types'
import './App.css'
import Login from './views/Login/Login'
import PeopleWork from './views/PeopleWork'; 
 //697406327288401

class App extends Component {
  render() {
    return (
      <Router history={ this.props.history }>
        <div>
          <Route exact path="/" component={ Login }/>
          <Route exact path="/working" component={ PeopleWork }/>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  history: PropTypes.any
};

export default App;
