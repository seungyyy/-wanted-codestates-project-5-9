import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

export const store = createStore(
  rootReducer,
  process.env.NODE_ENV === 'production' ? compose() : composeWithDevTools(applyMiddleware(logger))
);
 