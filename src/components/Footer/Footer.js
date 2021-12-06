import React from 'react'
import "./Footer.css"

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="foot">
            <p>Copyright ⓒ {year}</p>
        </div>
    );
}

export default Footer
