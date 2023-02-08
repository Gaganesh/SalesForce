import {combineReducers} from 'redux';
import friendReducer from "./FriendReducer";
import { reducer as network } from 'react-native-offline';

const appReducer = combineReducers({
  friend: friendReducer,
  network,
});
const rootReducer = (state:any, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;
