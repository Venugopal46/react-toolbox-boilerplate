/* eslint-disable no-constant-condition */

import { call, take } from 'redux-saga/effects';
import * as types from '../../constants/actionTypes';
import * as postWorker from '../workers/postWorker';

export function* watchGetPost() {
  while (true) {
    yield take(types.GET_POST);
    yield call(postWorker.getPost);
  }
}

