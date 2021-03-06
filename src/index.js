import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

// Redux Dependencies
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//
// Redux Reducers
// ------------------------------

const counter = (state = 0, action) => {
  if (action.type === 'COUNTER_UP') {
    return state + 1;
  } else if (action.type === 'COUNTER_DOWN') {
    return state - 1;
  } else if (action.type === 'COUNTER_RESET') {
    return 0;
  }

  return state;
};

const defaultBlock = {
  color: 'skyblue',
  size: 100,
};
const colorBlock = (state = defaultBlock, action) => {
  if (action.type === 'BLOCK_CONFIG') {
    return {
      ...state,
      color: action.payload.inputedColor,
      size: parseInt(action.payload.inputedSize),
    };
  } else if (action.type === 'BLOCK_SMALLER') {
    return {
      ...state,
      size: state.size - 10,
    };
  } else if (action.type === 'BLOCK_LARGER') {
    return {
      ...state,
      size: state.size + 10,
    };
  } else if (action.type === 'RESET_BLOCK') {
    return defaultBlock;
  }

  return state;
};

//
// Redux Setup
// ------------------------------

const storeInstance = createStore(
  // combines all of our reducer function to place in the store
  combineReducers({
    counter,
    colorBlock,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
