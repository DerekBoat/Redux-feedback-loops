import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    }
    // componentDidMount = () => {
    //     // event.preventDefault();
    //     // this.getPizza();
    //     console.log('in Feeling');
    // }

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
const putReduxStateOnProps = (reduxState) => ({
    reduxState
});

export default connect(putReduxStateOnProps)(Feeling);