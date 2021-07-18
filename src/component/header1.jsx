import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons"
import { faTint } from '@fortawesome/free-solid-svg-icons';

function Header1() {
    return (
        <div id="header">
            <div id="logo">
                <a href="/" className="logo"><FontAwesomeIcon icon={faTint} color="black"/>LifeDrop</a>
            </div>
            <div className="navbar">
                <a href="/" className="active">Home</a>
                <a href="./signIn" className="active">Login</a>
                <a href="/" className="active">Admin</a>
                <a href="/" className="social"><FontAwesomeIcon icon={faFacebook} color="black"/></a>
                <a href="/" className="social"><FontAwesomeIcon icon={faTwitter} color="black"/></a>
                <a href="/" className="social"><FontAwesomeIcon icon={faInstagram} color="black"/></a>
            </div>   
        </div>
    )
};

export default Header1;
