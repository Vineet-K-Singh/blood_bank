import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <header>
            <div id="free">
                <a href="/" className="free1"><span className="fas fa-tint"></span>BBlood</a>
            </div>
            <navbar className="nav">
                <a href="/" className="active">Home</a>
                <a href="./sign-in.html" className="link">Login</a>
                <a href="/" className="link">Contact Us</a>
                <a href="/" className="social"><FontAwesomeIcon icon={faTwitter} color="black"/></a>
                <a href="/" className="social"><FontAwesomeIcon icon={faTwitter} color="black"/></a>
                <a href="/" className="social"><FontAwesomeIcon icon={faTwitter} color="black"/></a>
            </navbar>   
        </header>
    )
};

export default Header;
