import React from 'react';
import Header from '../component/header';
import './home.css';
import {
    BloodDonation
}from "../constant/image"

export default Home=()=>{
    return (
        <>
            <Header/>
            <section className="home" style={{background:BloodDonation}}>
                <h3>The blood you donate gives someone</h3>
                <h3>another chance at life</h3>
                <h1>GIVE THE GIFT OF LIFE</h1>
                <h1>DONATE BLOOD</h1>
                <div className="log">
                    <a href="./sign-in.html"><button id="sign-in">Sign in</button></a>
                    <br/>
                    <h3>You are a New User</h3>
                    <a href="./sign-up.html"><button id="sign-up">Sign up</button></a>
                </div>
            </section>
        </>
    )
}
