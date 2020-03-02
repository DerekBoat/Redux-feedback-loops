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
        if(this.state.understandingScore > 0 && this.state.understandingScore <= 5){
        this.props.dispatch({
            type: 'UNDERSTANDING',
            payload: this.state.understandingScore
        })
        this.props.history.push('/Supported');
    }
          else {
            alert('Please Enter 1-5');
        }
    }

    render() {
        return (
            <>
                How well are you understanding the content?
            <input onChange={this.understandingHandler} type="number" placeholder="score" />
                <button onClick={this.handleClick}>Next</button>
            </>
        )
    }
}


export default connect()(Understanding);