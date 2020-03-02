import React, { Component } from 'react';
import { connect } from 'react-redux';

class Supported extends Component {
//this component receives the review score for feeling supported and is a page route. 
    state = {
        supportedScore: 0
    }

    supportedHandler = (event) => {
        this.setState({
            supportedScore: event.target.value
        })
    }

    handleClick = () => {
        this.props.dispatch({
            type: 'SUPPORTED',
            payload: this.state.supportedScore
          })
          this.props.history.push('/Comments');
    }
//these two functions take the input and send it to redux and change the route. 
    render() {
        return (
            <>
                How well are you being supported?
            <input onChange={this.supportedHandler} type="number" placeholder="score"/>
                <button onClick={this.handleClick}>Next</button>
            </>
        )
    }
}


export default connect()(Supported);