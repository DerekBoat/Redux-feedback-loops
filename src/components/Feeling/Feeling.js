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
        if(this.state.feelingScore > 0 && this.state.feelingScore <= 5){
        this.props.dispatch({
            type: 'FEELING',
            payload: this.state.feelingScore
          })
        this.props.history.push('/Understanding');
        }
        else{
                alert('Please Enter 1-5');
            }
        }
//the value is stored sent to the redux reducer and the next page is called
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