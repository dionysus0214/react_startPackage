import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

let originState = [
  { id: 0, name: 'nice shoes', qnt: 3 },
  { id: 1, name: 'red shoes', qnt: 4 }
];

let alertOriginState = true;

function reducer(state = originState, action) {
  let copy = [...state];
  if (action.type === 'increase') {
    copy[0].qnt++;
    return copy;
  } else if (action.type === 'decrease') {
    copy[0].qnt--;
    if (copy[0].qnt < 0) {
      copy[0].qnt = 0;
      alert('음수는 노노');
    }
    return copy;
  } else {
    return state;
  }
}

function reducer2(state = alertOriginState, action) {
  if (action.type === 'close') {
    state = false;
    return state;
  } else {
    return state;
  }
}

let store = createStore(combineReducers({reducer, reducer2}));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
