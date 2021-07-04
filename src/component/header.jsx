import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTint, faBars, faUser } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
    return (
        <header>
        <div id="logo">
            <a href="/" class="logo"><FontAwesomeIcon icon={faTint} color="red"/>LifeDrop</a>
        </div>
        <div class="menu" id="menu">
            <button onclick="func()" class="btn"><FontAwesomeIcon icon={faBars} color="black"/></button>
            <div class="menu-content" id="menu-content">
                <a href="./main.html" class="link">Home</a>
                <a href="./donate.html" class="link">Donate</a>
                <a href="./request.html" class="link">Request</a>
                <a href="./search-donor.html" class="link">Search a Donor</a>
                <a href="./nearby.html" class="link">Nearby Blood Bank</a>
                <a href="/" class="link">Logout</a>
                <a href="/" id="user" class="link"><FontAwesomeIcon icon={faUser} color="black"/></a>
            </div>
        </div>
        <navbar class="nav">
            <a href="./main.html" class="active">Home</a>
            <a href="./donate.html" class="link">Donate</a>
            <a href="./request.html" class="link">Request</a>
            <a href="./search-donor.html" class="link">Search a Donor</a>
            <a href="./nearby.html" class="link">Nearby Blood Bank</a>
            <a href="/" class="link">Logout</a>
            <a href="/" id="user"><FontAwesomeIcon icon={faUser} color="black"/></a>
        </navbar>   
    </header>
    )
};

export default Header;