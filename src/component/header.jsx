import React from 'react';

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
                <a href="/" className="social"><span className="fab fa-facebook fa-2x"></span></a>
                <a href="/" className="social"><span className="fab fa-twitter fa-2x"></span></a>
                <a href="/" className="social"><span className="fab fa-instagram fa-2x"></span></a>
            </navbar>   
        </header>
    )
};

export default Header;
