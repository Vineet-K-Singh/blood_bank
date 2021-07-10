import React from "react";
import "./sign_in.css";
import { useForm } from "react-hook-form";
import firebase from "../utils/firebase.js";
// import { Link, withRouter } from 'react-router-dom'

function Sign_in(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      await firebase.login(data.email, data.password);
      props.history.replace("/main");
    } catch (error) {
      alert(errors.message);
    }
  };

  return (
    <>
      <div id="sign-in">
        <div className="box1"></div>
        <div className="box2">
          <h1>Sign in ...</h1>
          <br />
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Email-Id</label>
            <input
              type="text"
              placeholder="Type here your name"
              {...register("email")}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Type here your password"
              {...register("password")}
            />
            <a href="./home">
              <button id="bt3">Sign in</button>
            </a>
          </form>
          <table>
            <tbody>
            <tr>
            <td>
              <a href="/">Forgot Password?</a>
            </td>
            <td>
              <a href="/">Not a member yet?</a>
            </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Sign_in;
