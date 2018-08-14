/* eslint-disable import/prefer-default-export */
import * as types from '../constants/actionTypes';

export function usersReducer(state = [], action) {
  switch (action.type) {
    case types.GET_USERS_SUCCESS:
      return action.users;
    case types.GET_USERS_ERROR:
      return [];
    default:
      return state;
  }
}
