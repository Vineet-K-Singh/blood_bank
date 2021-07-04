import React from 'react'
import './sign_in.css'

function Sign_in() {
    return (
        <>
            <div className="sign-in">
                <div className="box1">
                </div>
                <div className="box2">
                    <h1>Sign in ...</h1>
                    <br/>
                    <form>
                        <label>Username</label>
                        <br/>
                        <input type="text" placeholder="Type here your name"/>
                        <br/>
                        <label>Password</label>
                        <br/>
                        <input type="text" placeholder="Type here your password"/>
                    </form>
                    <a href="./main.html"><button id="bt3">Sign in</button></a>
                    <table>
                        <td><a href="/">Forgot Password?</a></td>
                        <td><a href="/">Not a member yet?</a></td>
                    </table>
                </div>
            </div> 
        </>
    )
}

export default Sign_in
