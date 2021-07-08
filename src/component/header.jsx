import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTint, faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import firebase from "../utils/firebase"

function Header(props) {
    let onLogout=() =>{
       firebase.logout();
       props.history.replace('/home');
    }
    return (
        <header>
        <div id="logo">
            <a href="/" class="logo"><FontAwesomeIcon icon={faTint} color="red"/>LifeDrop</a>
        </div>
        <div class="menu" id="menu">
            <button onclick="func()" class="btn"><FontAwesomeIcon icon={faBars} color="black"/></button>
            <div class="menu-content" id="menu-content">
                <a href="./main" class="link">Home</a>
                <a href="./donate" class="link">Donate</a>
                <a href="./request" class="link">Request</a>
                <a href="./searchDonor" class="link">Search a Donor</a>
                <a href="./nearby" class="link">Nearby Blood Bank</a>
                <a href="/" class="link" onClick={onLogout}>Logout</a>
                <a href="/fr" id="user" class="link"><FontAwesomeIcon icon={faUser} color="black"/></a>
            </div>
        </div>
        <navbar class="nav">
            <a href="./main" class="active">Home</a>
            <a href="./donate" class="link">Donate</a>
            <a href="./request" class="link">Request</a>
            <a href="./searchDonor" class="link">Search a Donor</a>
            <a href="./nearby" class="link">Nearby Blood Bank</a>
            <a href="/" class="link">Logout</a>
            <a href="/fr" id="user"><FontAwesomeIcon icon={faUser} color="black"/></a>
        </navbar>   
    </header>
    )
};

export default Header;