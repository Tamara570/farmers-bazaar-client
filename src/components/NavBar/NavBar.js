import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'



export default function NavBar () {
    return (
        <div className="nav">
            <div className="logo"></div>
            <div className="menu">
                <ul>
                    <li><Link to="/">Landing Page</Link></li>
                    <li><Link to="/home">Home Page</Link></li>
                    <li><Link to="/signup">Sign up</Link></li>
                    <li><Link to="/login">Log In</Link></li>
                    <li><Link to="/add">Add Item</Link></li>
                    <li><Link to="/inventory">Inventory</Link></li>
                    <li><Link to="/details">Product Detail</Link></li>
                </ul>
            </div>
        </div>
    )
}