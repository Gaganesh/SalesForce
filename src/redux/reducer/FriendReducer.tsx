import { GET_FRIENDS } from "../actions/types"

const initialState = {
    friendsList: [],
}

const friendReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case GET_FRIENDS: 
        return {
            ...state,
        }
        default:
            return state;
    }
}

export default friendReducer;