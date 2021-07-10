import React from 'react';
import {useHistory} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTint, faBars, faUser } from '@fortawesome/free-solid-svg-icons';

function Header(props) {

    // let onLogout=() =>{
    //    firebase.logout();
    //    props.history.replace('/home');
    // };

    let history = useHistory();

    function handleLogOut() {
      sessionStorage.clear();
      history.replace("/signIn"); // whichever component you want it to route to
    }

    const func=()=>{
        document.getElementById("menu-content").classList.toggle("show");
    }

    return (
        <header>
        <div id="logo">
            <a href="/" className="logo"><FontAwesomeIcon icon={faTint} color="red"/>LifeDrop</a>
        </div>
        <div className="menu" id="menu">
            <button onClick={func} id="btn"><FontAwesomeIcon icon={faBars} color="black"/></button>
            <div className="menu-content" id="menu-content">
                <a href="./main" className="link">Home</a>
                <a href="./donate" className="link">Donate</a>
                <a href="./request" className="link">Request</a>
                <a href="./searchDonor" className="link">Search a Donor</a>
                <a href="./nearby" className="link">Nearby Blood Bank</a>
                <button id="button" onClick={handleLogOut}>Logout</button>
                <a href="/fr" id="user" className="link"><FontAwesomeIcon icon={faUser} color="black"/></a>
            </div>
        </div>
        <div className="nav">
            <a href="./main" className="active">Home</a>
            <a href="./donate" className="link">Donate</a>
            <a href="./request" className="link">Request</a>
            <a href="./searchDonor" className="link">Search a Donor</a>
            <a href="./nearby" className="link">Nearby Blood Bank</a>
            <a href="./signIn" className="link" onClick={handleLogOut}>Logout</a>
            <a href="/fr" id="user"><FontAwesomeIcon icon={faUser} color="black"/></a>
        </div>   
    </header>
    )
};

export default Header;