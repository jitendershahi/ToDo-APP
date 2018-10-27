import * as actionTypes from '../actions/actiontypes'

const initialState = {
    posts:[]
}

export const PostsReducer = (state=initialState.posts, action) => {

    switch(action.type){
        case actionTypes.LOAD_POSTS_SUCCESS:
        return action.data

        default:
        return state
    }
}