import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter} from 'react-router-dom'
// import Popper from 'popper.js';
import * as serviceWorker from './serviceWorker';


// console.log($,Popper)

const app = (
    <BrowserRouter basename="/">
        <App />
    </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
