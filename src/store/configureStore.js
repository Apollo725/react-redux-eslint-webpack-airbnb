import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducer';

export default function configureStore(initialStore) {
  return createStore(
    rootReducer,
    initialStore,
    composeWithDevTools(applyMiddleware(promise, logger, thunk, reduxImmutableStateInvariant())),
  );
}
