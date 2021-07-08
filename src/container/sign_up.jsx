import React from 'react';
import './sign_up.css';
import { useForm } from "react-hook-form";
import firebase from "../utils/firebase";

function Sign_up(props) {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async(data) => {console.log(data)
    
    	try {
			await firebase.register(data.username, data.email, data.password)
			// await firebase.addQuote(quote)
			props.history.replace('/main')
		} catch(error) {
			alert(error.message)
		}
    
    };

    return (
        <>
            <div className="sign-up">
                <div className="box1">
                </div>
                <div className="box2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>Username</label>
                        <input type="text" placeholder="Type here your name" {...register("username")}/>
                        <label>Email-id</label>
                        <input type="text" placeholder="Type here your e-mail" {...register("email")}/>
                        <label>Password</label>
                        <input type="password" placeholder="Type here your password" {...register("password")}/>
                        <label>Repeat Password</label>
                        <input type="password" placeholder="Repeat your password" {...register("password")}/>
                        <a href="./home"><button>Sign up</button></a>
                    </form>
                    
                </div>
            </div>
        </>
    );
}

export default Sign_up;
