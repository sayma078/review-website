import { Router, Link} from 'react-router-dom'

import React from 'react';

import './Header.css'

const Header = () => {
    return (
        <div className="header">
            
            <nav>
                <h1 className="name">Art Gallary</h1>
                
                <Link to="/home">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                
            </nav>
        </div>
    );
};

export default Header;