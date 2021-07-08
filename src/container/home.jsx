import React from 'react';
import Header1 from '../component/header1';
import './home.css'

function Home(){
    return (
        <>
            <Header1/>
            <section className="home">
                <h3>The blood you donate gives someone</h3>
                <h3>another chance at life</h3>
                <h1>GIVE THE GIFT OF LIFE</h1>
                <h1>DONATE BLOOD</h1>
                <div className="log">
                    <a href="./signIn"><button class="btn">Sign in</button></a>
                    <br/>
                    <h3>You are a New User</h3>
                    <a href="./signUp"><button class="btn">Sign up</button></a>
                </div>
            </section>
        </>
    )
}
export default Home;