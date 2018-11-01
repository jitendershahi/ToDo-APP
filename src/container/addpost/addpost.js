import React,{ Component } from 'react'
import Input  from '../../components/input/input';
import TextArea from '../../components/textarea/textarea';

import * as actionCreator from '../../store/actions/postactioncreator'
import { connect } from 'react-redux';

import toastr from 'toastr'
import axios from 'axios'

import './addpost.css';

export class AddPost extends Component {
    state = {
        postForm: {
            title: '',
            body: ''
        },
        error:{},
        id:''
    }

    componentDidMount() {
        let id = this.props.match.params.id
        if (id) {
            axios.get("https://jsonplaceholder.typicode.com/posts/" + id)
                .then((response) => {
                    this.props.ParticularPost(response.data)
                    this.setState({ postForm: response.data, id:id })
                }).catch((error) => {
                    console.log(error)
                })
        }

    }

    handleForm = (event) => {
        let field = event.target.name
        let value = event.target.value
    
        let form = { ...this.state.postForm }

        form[field] = value 
        this.setState({ postForm : form})
    }

    checkValidity = () => {
        let isValid = true

        let errorform = { ...this.state.error }

        if(this.state.postForm.title.length < 6){
            errorform.title = "Please enter atleast 5 character"
            isValid = false
        }

        if(this.state.postForm.body.length < 10){
            errorform.body = "Please enter some character in post body"
            isValid = false
        }

        this.setState({ error : errorform})
        return isValid

    }

    submitForm = (event) => {
        event.preventDefault()
        if(!this.checkValidity()) return;
        this.props.createPost(this.state.postForm, this.state.id)
        toastr.success("Post Saved!!")
        this.props.history.push('/posts')
    }


    render() {
        return(
            <div>
               <form className="form">
                    <h2>Add Post</h2>
                        <div className="input-group" >
                            <Input htmlname="Title name" 
                            label="Title Name"
                            value={this.state.postForm.title}
                            placeholder="Enter Title"
                            name="title"
                            clicked={(event) => this.handleForm(event)}
                            errorname={this.state.error}  />
                        </div>

                        <div className="input-group">
                            <TextArea htmlname="post body" 
                            label="Post Body"
                            value={this.state.postForm.body}
                            placeholder="Enter Post Body"
                            name="body"
                            clicked={(event) => this.handleForm(event)}
                            errorname={this.state.error}  />
                        </div>

                        <button type="button" onClick={(event) =>this.submitForm(event)} className="btn btn-success">{this.state.id ? 'Edit' : 'Add'}</button>
                </form>       
                        
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        getpostbyid:state.post
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createPost:(postForm, id) => dispatch(actionCreator.createPost(postForm, id)),
        ParticularPost:(post) => dispatch(actionCreator.ParticularPostById(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);