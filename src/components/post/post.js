import React from 'react'
import './post.css'

import { Link } from 'react-router-dom'


export const Post = (props) => {

    return (
            <div className="card">
                    <div className="container">
                    <Link to={'/posts/' + props.post.id}>
                        <h4><b>{props.post.title}</b></h4> 
                    </Link>
                        <p>{props.post.body}</p> 
                    </div>
            </div>
    )
}

export default Post;