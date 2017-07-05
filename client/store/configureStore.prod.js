import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleWare = createSagaMiddleware();

const createStoreWithMiddleware = compose(
  applyMiddleware(sagaMiddleWare)
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);
  sagaMiddleWare.run(rootSaga);
  return store;
}
