import * as actionTypes from './actiontypes'
import axios from 'axios'

export const loadPostsSuccess = (data) => {
    return {
        type:actionTypes.LOAD_POSTS_SUCCESS,
        data:data
    }
}

export const loadPosts = () => {
    return (dispatch, getState) => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
         .then((response) => {
             //get 10 posts 
             var posts = response.data.splice(0,7)
             dispatch(loadPostsSuccess(posts))
         }).catch(error => {
             console.log(error)
         })
    }
}

export const createpostSuccess = (data) => {
    return {
        type:actionTypes.CREATE_POST_SUCCESS,
        data:data
    }
}

export const createPost = (postForm) => {
    return (dispatch,getState) => {
        axios.post("https://jsonplaceholder.typicode.com/posts",postForm)
          .then((response) => {
              dispatch(createpostSuccess(response.data))
          }).catch((error) => {
              console.log(error)
          })
    }
}

export const getParticularPost = (data) => {
    return {
        type:actionTypes.GET_PARTICULAR_POST,
        data:data
    }
}

export const getPostById = (id) => {
    console.log(id)
    return (dispatch,getState) => {
        axios.get("https://jsonplaceholder.typicode.com/posts/" + id)
          .then((response) => {
              dispatch(getParticularPost(response.data))
          }).catch((error) => {
              console.log(error)
          })
    }
}