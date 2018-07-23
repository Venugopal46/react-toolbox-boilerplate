import { combineReducers } from 'redux';
import { postReducer } from './postReducer';
import { loginReducer } from './loginReducer';

const rootReducer = combineReducers({
  post: postReducer,
  loggedIn: loginReducer
});

export default rootReducer;
