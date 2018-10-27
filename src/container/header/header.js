import React,{Component } from 'react' 

import { NavLink } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <h2 className="navbar-brand">React App</h2>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink to="/posts" className="nav-link">Posts</NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink to="/about" className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/courses" className="nav-link">Courses</NavLink>
                        </li>
                        <li className="btn btn-danger nav-item" style={{display:'block',float:'right',marginLeft:'780px'}}>
                            <NavLink to="login" style={{color:'white'}} className="nav-link">Login</NavLink>
                        </li>  */}
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}


export default Header;