/* eslint-disable import/prefer-default-export */
import * as types from '../constants/actionTypes';

export function getUsers() {
  return {
    type: types.GET_USERS
  };
}
