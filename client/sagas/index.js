import { fork } from 'redux-saga/effects';
import { watchGetPost } from './watchers/postWatcher';

// root saga
export default function* rootSaga() {
  yield [
    fork(watchGetPost)
  ];
}
