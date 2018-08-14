/* eslint-disable import/prefer-default-export */
import * as types from '../constants/actionTypes';

export function setLoginStatue(status) {
  return {
    type: types.SET_LOGIN_STATUS,
    loggedIn: status
  };
}
