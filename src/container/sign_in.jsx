import React from 'react'
import './sign_in.css'
import { useForm } from "react-hook-form";

function Sign_in() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {console.log(data)};

    return (
        <>
            <div className="sign-in">
                <div className="box1">
                </div>
                <div className="box2">
                    <h1>Sign in ...</h1>
                    <br/>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <label>Email-Id</label>
                        <input type="text" placeholder="Type here your name" {...register("email")}/>
                        <label>Password</label>
                        <input type="password" placeholder="Type here your password" {...register("password")}/>
                        <a href="./home"><button id="bt3">Sign in</button></a>
                    </form>
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
