import {createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import rootReducer from './reducers';

export default createStore(rootReducer,  applyMiddleware(ReduxPromise));


