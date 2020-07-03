import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import MainReducer from './Reducers/MainReducer';
import Display from './Components/Display';
import CalcButton from './Components/Button'
import KeyBoard from './Components/KeyBoard'

const store = createStore(MainReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  return (
    <Provider store={store}>
      <Display></Display>
      <KeyBoard></KeyBoard>
    </Provider>
  );
}

export default App;
