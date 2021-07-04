import React from 'react'
import './sign_up.css'

function Sign_up() {
    return (
        <>
            <div className="sign-up">
                <div className="box1">
                </div>
                <div className="box2">
                    <form>
                        <label>Username</label>
                        <br/>
                        <input type="text" placeholder="Type here your name"/>
                        <br/>
                        <label>Email-id</label>
                        <br/>
                        <input type="email" placeholder="Type here your e-mail"/>
                        <br/>
                        <label>Password</label>
                        <br/>
                        <input type="text" placeholder="Type here your password"/>
                        <br/>
                        <label>Repeat Password</label>
                        <br/>
                        <input type="text" placeholder="Repeat your password"/>
                    </form>
                    <input type="checkbox" id="ïnt"/>
                    <span>By signing up I agree with Terms and Conditions</span>
                    <br/>
                    <br/>
                    <a href="./main.html"><button>Sign up</button></a>  or <a href="./sign-in.html">Log in</a>
                </div>
            </div>
        </>
    )
}

export default Sign_up
