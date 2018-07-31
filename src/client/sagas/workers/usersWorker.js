/* eslint-disable import/prefer-default-export */

import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../../constants/actionTypes';

export function* getUsers() {
  try {
    const response = yield call(axios, 'https://jsonplaceholder.typicode.com/users');
    yield put({ type: types.GET_USERS_SUCCESS, users: response.data });
  } catch (error) {
    yield put({ type: types.GET_USERS_ERROR });
  }
}
