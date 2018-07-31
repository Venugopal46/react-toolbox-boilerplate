/* eslint-disable import/prefer-default-export */
import * as types from '../constants/actionTypes';

export function postsReducer(state = [], action) {
  switch (action.type) {
    case types.GET_POSTS_SUCCESS:
      return action.posts;
    case types.GET_POSTS_ERROR:
      return [];
    default:
      return state;
  }
}
