/* eslint-disable import/prefer-default-export */
import * as types from '../constants/actionTypes';

export function loginReducer(state = false, action) {
  switch (action.type) {
    case types.SET_LOGIN_STATUS:
      return action.loggedIn;
    default:
      return state;
  }
}
