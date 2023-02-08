import {
  GET_FRIENDS,
  GET_FRIENDS_ERROR,
  GET_FRIENDS_SUCCESS,
} from '../actions/types';

const initialState = {
  friendsList: [],
  error: '',
  loading: false,
};

const friendReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_FRIENDS:
      return {
        ...state,
        loading: true,
      };
    case GET_FRIENDS_SUCCESS:
      return {
        ...state,
        friendsList: payload,
        loading: false,
      };
    case GET_FRIENDS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default friendReducer;
