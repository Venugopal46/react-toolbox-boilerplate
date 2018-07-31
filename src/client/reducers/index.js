import { combineReducers } from 'redux';
import { postsReducer } from './postsReducer';
import { usersReducer } from './usersReducer';
import { loginReducer } from './loginReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
  loggedIn: loginReducer
});

export default rootReducer;
