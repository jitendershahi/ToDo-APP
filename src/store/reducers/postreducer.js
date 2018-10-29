import * as actionTypes from '../actions/actiontypes'

const initialState = {
    post:{}
}

export const PostReducer = (state=initialState.post, action) => {

    switch(action.type){
        
        case actionTypes.GET_PARTICULAR_POST:
        return action.data

        default:
        return state
    }
}

export default PostReducer;
