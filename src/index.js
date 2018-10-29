import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter} from 'react-router-dom';
// import Popper from 'popper.js';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { PostsReducer } from './store/reducers/postsreducer';
import { PostReducer } from './store/reducers/postreducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    posts:PostsReducer,
    post:PostReducer
})

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
))
// console.log($,Popper)

const app = (
    <Provider store={store}>
        <BrowserRouter basename="/">
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
