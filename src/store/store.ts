import { createBrowserHistory } from 'history';
import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './reducers/rootReducer';
import mySaga from './sagas';

// создаем saga мидлвар
export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

// монтируем его в Store
export const store = createStore(
  rootReducer(history), // root reducer with router state
  compose(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      sagaMiddleware
    )
  )
);
// затем запускаем сагу
sagaMiddleware.run(mySaga);
