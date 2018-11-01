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

export const editPostSuccess = (data,id) => {
    return {
        type: actionTypes.EDIT_POST_SUCCESS,
        data: data,
        id:id
    }
}

export const createPost = (postForm, id) => {
    console.log(id)
    return (dispatch, getState) => {
        if (id) {
            axios.put("https://jsonplaceholder.typicode.com/posts/" + id, postForm)
                .then((response) => {
                    dispatch(editPostSuccess(response.data,id))
                }).catch((error) => {
                    console.log(error)
                })
        } else {
            axios.post("https://jsonplaceholder.typicode.com/posts", postForm)
                .then((response) => {
                    dispatch(createpostSuccess(response.data))
                }).catch((error) => {
                    console.log(error)
                })
        }

    }
}

export const ParticularPostById = (post) => {
    return {
        type: actionTypes.GET_PARTICULAR_POST,
        data: post
    }
}