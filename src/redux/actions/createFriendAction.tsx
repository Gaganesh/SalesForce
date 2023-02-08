import createFriend from '../../../api/createFriend';
import {CREATE_FRIEND} from './types';
import {friends} from './../../../services/urls.json';
const createFriendAction = data => ({
  type: CREATE_FRIEND,
  payload: {data},
  meta: {
    offline: {
      effect: {url: friends.makeFriend, method: 'POST', json: {data}},
      commit: {type: 'SAVE_DATA_COMMIT', meta: {data}},
      rollback: {type: 'SAVE_DATA_ROLLBACK', meta: {data}},
    },
  },
});

export default createFriendAction;
