import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

// import the rootReducer which we initialise our store with.
import rootReducer from './rootReducer';

// import our rootSaga which we run with our saga middleware
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
// The default state for our redux store.
const defaultState = {};

// Add any middleware here for it to be applied to the store.
// Note that the order of the middleware is important here.
const middlewares = [sagaMiddleware];

const store = createStore(
  rootReducer,
  defaultState,
  composeWithDevTools(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);

export default store;
