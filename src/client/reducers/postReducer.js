/* eslint-disable import/prefer-default-export */
import * as types from '../constants/actionTypes';

export function postReducer(state = {}, action) {
  switch (action.type) {
    case types.GET_POST_SUCCESS:
      return action.post;
    case types.GET_POST_ERROR:
      return {};
    default:
      return state;
  }
}
