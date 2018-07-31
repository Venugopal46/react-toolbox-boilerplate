/* eslint-disable no-constant-condition, import/prefer-default-export */

import { call, take } from 'redux-saga/effects';
import * as types from '../../constants/actionTypes';
import * as postsWorker from '../workers/postsWorker';

export function* watchGetPosts() {
  while (true) {
    yield take(types.GET_POSTS);
    yield call(postsWorker.getPosts);
  }
}
