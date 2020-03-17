import {applyMiddleware, compose, createStore} from 'redux';
import {fromJS} from 'immutable';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import logger from 'redux-logger';
import sagas from '../saga';

// import Reactotron from './../../ReactotronConfig';

// create our new saga monitor
// const sagaMonitor = Reactotron.createSagaMonitor();
// and in your call to createSagaMiddlware, pass it along inside
// the 1st parameter's object.
// {sagaMonitor}
const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState = fromJS({})) {
  // console.log(sagas)
  const middlewares = [sagaMiddleware, logger];
  const enhancers = [applyMiddleware(...middlewares)];
  const store = createStore(reducers, compose(...enhancers));
  // Extensions
  sagaMiddleware.run(sagas, store.dispatch);

  return store;
}

export default configureStore;
