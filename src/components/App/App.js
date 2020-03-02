import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';


class App extends Component {


  componentDidMount = () => {
    console.log('component mounted');
  }



  render() {
    return (
    <>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br />
        </div>
      <Router>
        <Route exact path='/' component={Feeling}></Route>
        <Route path='/Understanding' component={Understanding}></Route>
      </Router>
    </>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default connect(putReduxStateOnProps)(App);
