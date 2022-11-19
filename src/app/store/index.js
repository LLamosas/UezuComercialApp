import {createStore, combineReducers, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';

import user from '../../modules/core/User/reducer';

const reducers = combineReducers({
  user,
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
  timeout: 0,
};
const persistedReducer = persistReducer(persistConfig, reducers);
export default () => {
  let store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
  let persistor = persistStore(store);
  return {store, persistor};
};
