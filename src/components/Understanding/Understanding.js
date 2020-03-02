import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {

    state = {
        understandingScore: 0
    }

    understandingHandler = (event) => {
        this.setState({
            understandingScore: event.target.value
        })
    }

    handleClick = () => {
        this.props.dispatch({
            type: 'UNDERSTANDING',
            payload: this.state.understandingScore
          })
          this.props.history.push('/Supported');
    }

    render() {
        return (
            <>
                How well are you understanding the content?
            <input onChange={this.understandingHandler} type="number" placeholder="score"/>
                <button onClick={this.handleClick}>Next</button>
            </>
        )
    }
}


export default connect()(Understanding);