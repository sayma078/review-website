import { Router, Link} from 'react-router-dom'

import React from 'react';

import './Header.css'

const Header = () => {
    return (
        <div className="header">
            
            <div className="banner-bg text-black d-flex align-items-center justify-content-center">
                <div>
                   <h1 className="text-warning">Art Gallery</h1><br />
                   <h3>Pursue your passion,Create your life</h3>
                   <h3>Experiences for the Artist in you</h3>  
                </div>
            </div>
            <nav> 
                <Link to="/home">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                
            </nav>
             
        </div>
    );
};

export default Header;