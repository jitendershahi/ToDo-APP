import React from 'react'
import './post.css'


export const Post = (props) => {

    return (
            <div className="card">
                <div className="container">
                    <h4><b>{props.post.title}</b></h4> 
                    <p>{props.post.body}</p> 
                </div>
            </div>
    )
}

export default Post;