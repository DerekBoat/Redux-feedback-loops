import React, { Component } from 'react';
import { connect } from 'react-redux';

class ThankYou extends Component {

    handleClick = () => {
        this.props.history.push('/');
    }
//this component just says thankyou and send you to the first page
    render() {
        return (
            <>
                <h1>Thank You!</h1>
                <h2><button onClick={this.handleClick}>Leave New Feedback</button></h2>
            </>
        )
    }
}

  
  export default connect()(ThankYou);