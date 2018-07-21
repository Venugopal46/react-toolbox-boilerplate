/* eslint-disable import/prefer-default-export */
import * as types from '../constants/actionTypes';

export function getPost() {
  return {
    type: types.GET_POST
  };
}
