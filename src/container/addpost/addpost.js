import React,{ Component } from 'react'
import Input  from '../../components/input/input';
import TextArea from '../../components/textarea/textarea';

import * as actionCreator from '../../store/actions/postactioncreator'
import { connect } from 'react-redux';

import toastr from 'toastr'

import './addpost.css';

export class AddPost extends Component {
    state = {
        postForm:{...this.props.postForm},
        error:{},
        id:''
    }

    componentDidMount(){
        let id = this.props.match.params.id
        this.props.getParticularPost(id)
        this.setState({ id:id})
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
        this.props.createPost(this.state.postForm)
        this.props.history.push('/posts')
        toastr.success("Post Saved!!")
        this.props.history.push('/posts')
    }


    render() {
        console.log(this.props.getpostbyid)
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
    let postForm = {
        title: '',
        body: ''
    }
    console.log(ownProps)
    let id = ownProps.match.params.id
    // if(id){
    //     postForm = state.post
    // }
   
    // if(this.props.match.params.id){
    //     this.setState({ postForm: this.props.getpostbyid})
    // }
    return {
        postForm:postForm,
        getpostbyid:state.post
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createPost:(postForm) => dispatch(actionCreator.createPost(postForm)),
        getParticularPost:(id) => dispatch(actionCreator.getPostById(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);