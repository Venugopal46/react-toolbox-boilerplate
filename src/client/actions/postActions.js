/* eslint-disable import/prefer-default-export */
import * as types from '../constants/actionTypes';

export function getPosts() {
  return {
    type: types.GET_POSTS
  };
}
