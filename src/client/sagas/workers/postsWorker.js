/* eslint-disable import/prefer-default-export */

import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../../constants/actionTypes';

const fetchPostsApi = () => axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => ({ response }))
  .catch(error => ({ error }));

export function* getPosts() {
  const { response, error } = yield call(fetchPostsApi);
  if (response) {
    yield put({ type: types.GET_POSTS_SUCCESS, posts: response.data });
  } else {
    yield put({ type: types.GET_POSTS_ERROR, error });
  }
}
