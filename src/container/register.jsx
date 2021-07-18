import React from "react";
import Header from "../component/header";
import { useForm } from "react-hook-form";
import "./register.css";
import firebase from "../utils/firebase";

function Register(props) {
  // const { register, handleSubmit, formState: {} } = useForm();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    firebase.addUserDetail(data);
    alert("User data saved successfully");
    props.history.replace("/main");
  };
  // let getUserDetail = async () => {
  //   const data = await firebase.getUserDetail();
  //   console.log(data);
  // };
  return (
    <>
      <Header />
      <section className="reg">
        <div className="booox">
          <div className="booox1"></div>
          <div className="booox2">
            <h2>Fill up the form to donate blood</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>Donor Name</label>
              <input type="text" {...register("donorName")} />
              <label>Aadhar Id</label>
              <input type="text" {...register("aadharId")} />
              <label>Resedential Address</label>
              <input type="text" {...register("address")} />
              <label>District</label>
              <input type="text" {...register("district")} />
              <label>State</label>
              <input type="text" {...register("state")} />
              <label>Email Id</label>
              <input type="email" {...register("email")} />
              <label>Mobile Number</label>
              <input type="text" {...register("mobileNo")} />
              <label>Blood Group</label>
              <input type="text" {...register("bloodGroup")} />
              <label>Name of Hospital</label>
              <input type="text" {...register("hospital")} />
              {/* <label>Medical History(if any)</label>
              <input type="file" {...register("mediacal-report")}/> */}
              <button type="submit">Submit</button>
            </form>
            {/* <button onClick={getUserDetail}>Get Data</button> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
