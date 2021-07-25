import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers';

export default function configureStore() {
  const middleware = [thunk];
  const persistConfig = {
    key: 'todo',
    storage
  };
  const reducer = persistCombineReducers(persistConfig, rootReducer);
  const store = createStore(reducer, {}, compose(applyMiddleware(...middleware)));
  const persistor = persistStore(store);
  return { store, persistor };
}
