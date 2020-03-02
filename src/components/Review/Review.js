import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Review extends Component {

    state={
        feeling: 0,
        understanding: 0,
        support: 0,
        comments: ''
    }

    handleClick = () => {
        this.setState({
            feeling: this.props.reduxState.feelingReducer,
            understanding: this.props.reduxState.understandingReducer,
            support: this.props.reduxState.supportedReducer,
            comments: this.props.reduxState.commentReducer
        })
        axios({
            method: 'POST',
            url: '/feedback',
            data: this.state
        }).then((response) => {
            console.log('here is the response from POST');
        }).catch((error) => {
            console.log('error in POST', error);
        })
        this.props.history.push('/ThankYou');
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