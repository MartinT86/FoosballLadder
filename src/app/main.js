import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { createStore } from 'redux'
import foosballApp from './reducers/reducers.js'
import { Provider } from 'react-redux'

//to remove
// import {ADD_PLAYER,addPlayer} from './actions/actions.js'

let store = createStore(foosballApp) 

//to remove
// console.log(store.getState())
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )
// store.dispatch(addPlayer('new player'))


ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'));