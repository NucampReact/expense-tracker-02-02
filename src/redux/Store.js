// Reponsible for setting up the Redux Store
import { createStore } from 'redux';
import MyReducer from './Reducer';

export const MyStore = createStore(
  /* 1st arg: Reducer(s) */
  MyReducer,
  /* 2nd arg: Enhancer(s)/Middleware */
  {}
);