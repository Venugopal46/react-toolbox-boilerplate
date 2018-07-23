import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleWare = createSagaMiddleware();

// export default function configureStore(initialState) {
//   return createStore(
//     rootReducer,
//     initialState,
//     applyMiddleware(sagaMiddleWare, reduxImmutableStateInvariant())
//   );
// }

const createStoreWithMiddleware = compose(
  applyMiddleware(sagaMiddleWare, reduxImmutableStateInvariant())
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
  );
  sagaMiddleWare.run(rootSaga);
  return store;
}
