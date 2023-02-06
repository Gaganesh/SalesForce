import {combineReducers} from 'redux';
import friendReducer from "./FriendReducer";

const appReducer = combineReducers({
  friend: friendReducer,
});
const rootReducer = (state:any, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;
