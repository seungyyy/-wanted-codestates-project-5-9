import { combineReducers } from 'redux';
import { registerReducer } from './registerReducer';
import { postReducer } from './postReducer';

const rootReducer = combineReducers({
  register: registerReducer,
  post: postReducer,
});

export default rootReducer;