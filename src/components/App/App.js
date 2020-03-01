import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';



class App extends Component {


  componentDidMount = () => {
    console.log('component mounted');
  }



  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br />
        </div>
        <Feeling />
      </Router>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default connect(putReduxStateOnProps)(App);
