import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import ThankYou from '../ThankYou/ThankYou';

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
        <Route path='/Supported' component={Supported}></Route>
        <Route path='/Comments' component={Comments}></Route>
        <Route path='/Review' component={Review}></Route>
        <Route path='/ThankYou' component={ThankYou}></Route>
      </Router>
    </>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default connect(putReduxStateOnProps)(App);
