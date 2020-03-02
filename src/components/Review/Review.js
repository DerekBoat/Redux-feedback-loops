import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {

    handleClick = () => {
        // this.props.history.push('/ThankYou');
    }

    render() {
        return (
            <>
                <h1>Review Your Feeback</h1>
            <h2>Feelings: {this.props.reduxState.feelingReducer}</h2>
            <h2>Understanding: {this.props.reduxState.understandingReducer}</h2>
            <h2>Support: {this.props.reduxState.supportedReducer}</h2>
            <h2>Comments {this.props.reduxState.commentReducer}</h2>
            <button onClick={this.handleClick}>Submit</button>
            </>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  })
  
  export default connect(putReduxStateOnProps)(Review);