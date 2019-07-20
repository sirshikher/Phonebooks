 import { createStore } from 'redux';
import {applyMiddleware} from 'redux';
import postReducer from '../Reducer/postReducer';
import { combineReducers } from 'redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

const intialState = {};
const middleware = [thunk];


const store = createStore(combineReducers({
  postReducer,
  intialState,
  // localStorageMiddleware,
  // reHydrateStore,
}),
  composeWithDevTools(
  applyMiddleware(...middleware),
// window.__REDUX_DEVTOOLS_EXTENSION__ && compose
)
);

export default store;
