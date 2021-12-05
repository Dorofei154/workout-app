import { createBrowserHistory } from 'history';
import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './reducers/rootReducer';
import mySaga from './sagas';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer(history),
  compose(applyMiddleware(routerMiddleware(history), sagaMiddleware))
);
sagaMiddleware.run(mySaga);
