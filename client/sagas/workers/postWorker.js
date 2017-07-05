/* eslint-disable import/prefer-default-export */

import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../../constants/actionTypes';


export function* getPost() {
  try {
    const id = Math.floor(Math.random() * 100);
    const response = yield call(axios, `https://jsonplaceholder.typicode.com/posts/${id}`);
    yield put({ type: types.GET_POST_SUCCESS, post: response.data });
  } catch (error) {
    yield put({ type: types.GET_POST_ERROR });
  }
}

