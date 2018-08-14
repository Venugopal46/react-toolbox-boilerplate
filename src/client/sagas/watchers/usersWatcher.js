/* eslint-disable no-constant-condition, import/prefer-default-export */

import { call, take } from 'redux-saga/effects';
import * as types from '../../constants/actionTypes';
import * as usersWorker from '../workers/usersWorker';

export function* watchGetUsers() {
  while (true) {
    yield take(types.GET_USERS);
    yield call(usersWorker.getUsers);
  }
}
