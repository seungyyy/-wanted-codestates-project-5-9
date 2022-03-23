import { combineReducers } from 'redux';
import { registerReducer } from './registerReducer';
//import commentsReducer from './commentsReducer';

const rootReducer = combineReducers({
  register: registerReducer,
  // comments: commentsReducer,
});

export default rootReducer;