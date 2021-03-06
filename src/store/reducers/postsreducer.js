import * as actionTypes from '../actions/actiontypes'

const initialState = {
    posts:[]
}

export const PostsReducer = (state=initialState.posts, action) => {

    switch(action.type){
        case actionTypes.LOAD_POSTS:
        return action.data
        
        case actionTypes.CREATE_POST_SUCCESS:
        return [
            ...state,
            Object.assign({}, action.data)
        ]

        case actionTypes.EDIT_POST_SUCCESS:
        let array = state.filter(el => el.id != action.id)

        return [
            ...array,
            Object.assign({}, action.data)
        ]
        
        default:
        return state
    }
}

export default PostsReducer;
