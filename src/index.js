import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//below new
import {createStore} from 'redux';
import {carSaleReducer} from './reducers/carSaleReducer';
import { Provider } from 'react-redux';
// above new


import 'bulma/css/bulma.css';
import './styles.scss';

//below new
const store = createStore(carSaleReducer);
console.log(store.getState(), 'What we getting here???????!!!!!!')
// above new

const rootElement = document.getElementById('root');
ReactDOM.render (<Provider store = {store}> <App /> </Provider>, rootElement);
