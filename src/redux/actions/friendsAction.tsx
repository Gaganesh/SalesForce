import {fetchFriendApi} from '../../../api/fetchFriends2';
import {GET_FRIENDS, GET_FRIENDS_SUCCESS, GET_FRIENDS_ERROR} from './types';
import {friends} from '../../../services/urls.json';
const getFriendsAction = () => async (dispatch, getState) => {
  dispatch({type: GET_FRIENDS});
  try {
    const friendData = await fetchFriendApi(friends.getFriends);
    dispatch({type: GET_FRIENDS_SUCCESS, payload: friendData});
  } catch (error) {
    dispatch({type: GET_FRIENDS_ERROR, payload: error});
  }
};

export default getFriendsAction;
