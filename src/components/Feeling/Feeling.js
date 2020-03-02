import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Link } from 'react-router-dom';


class Feeling extends Component {
    state = {
        feelingScore: 0
    }


    feelingHandler = (event) => {
        this.setState({
            feelingScore: event.target.value
        })
    }

    handleClick = () => {
        this.props.dispatch({
            type: 'FEELING',
            payload: this.state.feelingScore
          })
        this.props.history.push('/Understanding');
    }

    render() {
        return (
            <>
                How are you feeling today?
            <input onChange={this.feelingHandler} type="number" placeholder="score"/>
            <button onClick={this.handleClick}>Next</button>
            
            </>
        )
    }
}


export default connect()(Feeling);