import * as actionTypes from './actiontypes'
import axios from 'axios'

export const loadPosts = (data) => {
    return {
        type: actionTypes.LOAD_POSTS,
        data: data
    }
}

export const createpostSuccess = (data) => {
    return {
        type: actionTypes.CREATE_POST_SUCCESS,
        data: data
    }
}

export const createPost = (postForm) => {
    return (dispatch, getState) => {
        axios.post("https://jsonplaceholder.typicode.com/posts", postForm)
            .then((response) => {
                dispatch(createpostSuccess(response.data))
            }).catch((error) => {
                console.log(error)
            })
    }
}

export const ParticularPostById = (post) => {
    return {
        type: actionTypes.GET_PARTICULAR_POST,
        data: post
    }
}