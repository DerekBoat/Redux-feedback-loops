import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feelingReducer = (state = 0, action) => {
    if (action.type === 'FEELING') {
        console.log('in feelingReducer', action.payload);
        return action.payload;
    }
    return state;
}

const understandingReducer = (state = 0, action) => {
    if (action.type === 'UNDERSTANDING') {
        console.log('in understandingReducer', action.payload);
        return action.payload;
    }
    return state;
}

const supportedReducer = (state = 0, action) => {
    if (action.type === 'SUPPORTED') {
        console.log('in supportedReducer', action.payload);
        return action.payload;
    }
    return state;
}

const commentReducer = (state = '', action) => {
    if (action.type === 'COMMENTS') {
        console.log('in commentReducer', action.payload);
        return action.payload;
    }
    return state;
}



const storeInstance = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportedReducer,
        commentReducer
    }),
    applyMiddleware(logger)
);


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
