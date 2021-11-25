// import { createStore } from 'redux';
// import { rootReducer } from './reducers/rootReducer';

// export const store = createStore(rootReducer);

// export default store;

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './reducers/rootReducer';
import mySaga from './sagas';

// создаем saga мидлвар
const sagaMiddleware = createSagaMiddleware();
// монтируем его в Store
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// затем запускаем сагу
sagaMiddleware.run(mySaga);
