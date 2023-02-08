import {applyMiddleware, createStore, compose} from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';
import {offline} from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
// const store = createStore(
//   persistedReducer,
//   compose(applyMiddleware(thunk), offline(offlineConfig)),
// );
const persistor = persistStore(store);
export {store, persistor};
