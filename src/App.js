import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import MainReducer from './Reducers/MainReducer';
import Display from './Components/Display';


const store = createStore(MainReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  return (
    <Provider store={store}>
      <Display></Display>
      {/* <KeyBoard></KeyBoard> */}
    </Provider>
  );
}

export default App;
