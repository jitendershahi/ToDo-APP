import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actionCreator from '../../store/actions/postactioncreator'
import  Post  from '../../components/post/post';

import './posts.css'


export class Posts extends Component {

    componentDidMount(){
        this.props.posts()
    }

    render() {
        return (
            <div className="custom">
                {this.props.getPosts.map(el => {
                    return <Post key={el.id} post={el} />
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        getPosts:state.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        posts:() => dispatch(actionCreator.loadPosts())
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (Posts);
