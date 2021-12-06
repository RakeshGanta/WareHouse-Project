import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <NavLink to="/" className="navbar-logo">
                        <i class="fas fa-warehouse" style={{ width: "50px" }}></i>
                        Ware Houses
                    </NavLink>
                </div>
            </nav>
        </>
    )
}


export default Header
