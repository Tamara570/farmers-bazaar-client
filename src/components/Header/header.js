import React from 'react'
import './header.css'



export default function Header () {
    return (
        <div className="header">
            <div className="logo"></div>
            <div className="menu">
                <ul>
                    <li>Log In</li>
                    <li>Add Item</li>
                </ul>
            </div>
        </div>
    )
}