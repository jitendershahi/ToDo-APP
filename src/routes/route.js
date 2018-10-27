import React, { Component } from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'
import Posts from '../container/posts/posts'
import  AddPost  from '../container/addpost/addpost';

export class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/posts" component={Posts}/>
                    <Route path="/add-post" component={AddPost}/>
                    <Redirect from="/" to="/posts" />
                </Switch>
            </div>
        )
    }
}


export default Routes;