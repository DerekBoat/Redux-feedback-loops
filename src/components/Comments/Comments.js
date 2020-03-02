import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {

    state = {
        commentString: ''
    }

    commentsHandler = (event) => {
        this.setState({
            commentString: event.target.value
        })
    }

    handleClick = () => {
        this.props.dispatch({
            type: 'COMMENTS',
            payload: this.state.commentString
          })
          this.props.history.push('/Review');
          
    }

    render() {
        return (
            <>
                Any comments you want to leave?
            <input onChange={this.commentsHandler} type="text" placeholder="comment"/>
                <button onClick={this.handleClick}>Next</button>
            </>
        )
    }
}


export default connect()(Comments);