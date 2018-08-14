// https://github.com/redux-saga/redux-saga/blob/master/docs/advanced/RootSaga.md

import { fork, all } from 'redux-saga/effects';
import { watchGetPosts } from './watchers/postsWatcher';
import { watchGetUsers } from './watchers/usersWatcher';


// yielding array is deprecated
// export default function* rootSaga() {
//   yield [
//     fork(watchGetPosts),
//     fork(watchGetUsers)
//   ];
// }

// export default function* rootSaga() {
//   yield fork(watchGetPosts);
//   yield fork(watchGetUsers);
// }

// export default function* rootSaga() {
//   yield all([
//     watchGetPosts(),
//     watchGetUsers()
//   ]);
// }

export default function* rootSaga() {
  yield all([
    fork(watchGetPosts),
    fork(watchGetUsers)
  ]);
}

// Error handling in above three implementations is the same.
// Any error will terminate the root saga and subsequently all other children.
// use fork for "mission critical" tasks, i.e. "if this task fails, please crash the whole app",
// and spawn for "not critical" tasks, i.e. "if this task fails, do not propagate the error to the parent"