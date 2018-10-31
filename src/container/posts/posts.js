import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actionCreator from '../../store/actions/postactioncreator'
import  Post  from '../../components/post/post';

import axios from 'axios'

import './posts.css'
import { bindActionCreators } from '../../../node_modules/redux';


export class Posts extends Component {

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                let posts = res.data.splice(0,7)
                this.props.posts(posts)
            })
            .catch(err => {
                console.log(err)
            })
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
    return bindActionCreators({
        posts:(data) => dispatch(actionCreator.loadPosts(data))
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps) (Posts);
