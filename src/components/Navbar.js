import React, { Component } from 'react'

import logo from '../images/logo.svg';
import { FaHamburger } from "react-icons/fa";
import {Link} from 'react-router-dom';


export default class Navbar extends Component {

    state = {
        isOpen : false
    }

    handleToggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="Beach Resort" />
                        </Link>

                        <button className="nav-btn" onClick={this.handleToggle}>
                            <FaHamburger className="nav-icon" />
                        </button>
                    </div>
                    {/* so the below statement of classname is responsible for choosing bw two css classes */}
                    {/* so in small devices, the menu button will be displayed and then show-nav class will work */}
                    {/* otherwise only nav-links class of css will work */}
                    <ul className={this.state.isOpen?"nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/rooms">Rooms</Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        )
    }
}
