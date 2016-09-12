import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { quoteAppReducer } from  './reducers/Reducers';
import App from './components/App';
import './index.css';

let store = createStore(quoteAppReducer)

ReactDOM.render(
    <Provider store={store}>
  		<App />
  	</Provider>,
  document.getElementById('root')
);
