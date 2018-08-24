import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import defaultState from './defaults';

const configureStore = (lines) => {
  let store;
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(
    reducers,
    {
      ...defaultState,
      lines
    },
    composeEnhancers(
      applyMiddleware(thunk)
    )
  );
  return store;
} 

export default configureStore;