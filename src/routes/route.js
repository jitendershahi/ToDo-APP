import React, { Component } from 'react'

import { Route, Switch } from 'react-router-dom'
import { Posts } from '../container/posts/posts';


export class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/posts" component={Posts}/>
                </Switch>
            </div>
        )
    }
}


export default Routes;