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
             var posts = response.data.splice(0,10)
             dispatch(loadPostsSuccess(posts))
         }).catch(error => {
             console.log(error)
         })
    }
}