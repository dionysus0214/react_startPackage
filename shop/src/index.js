import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
// redux는 데이터를 엄격하게 관리하는 기능, react-redux는 redux를 리액트에서 쓸 수 있게 도와주는 기능

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

// redux를 쓰는 이유
// 1. props 전송 없이도 모든 컴포넌트들이 state를 사용할 수 있게 만들어 줌
// 2. 데이터의 수정방법을 미리 정의해둘 수 있음
// 3. 대규모 사이트에서 데이터를 한 곳에 관리할 수 있어서 용이(상태관리가 용이)

// redux에 있는 state를 수정하려면: state 데이터의 수정방법을 index.js에 정의(reducer) -> index.js에 수정 요청
// reducer는 function 안에 state 초기값과 state 데이터 수정방법이 들어있는 함수