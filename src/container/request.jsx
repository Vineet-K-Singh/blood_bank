import React from "react";
import Header from "../component/header";
import "./request.css";
import { useForm } from "react-hook-form";
import firebase from "../utils/firebase";

function Request(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (requestor_data) => {
    console.log(requestor_data);
    firebase.addRequestorDetail(requestor_data);
    alert("Your request has been saved successfully");
    props.history.replace("/main");
  };
  return (
    <>
      <Header />
      <section className="req">
        <div className="b0x">
          <div className="b0x1"></div>
          <div className="b0x2">
            <h2>Make a Request</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>Name</label>
              <input type="text" {...register("RequestorName")} />
              <label>Aadhar Id</label>
              <input type="text" {...register("RequestorAadharId")} />
              <label>Resedential Address</label>
              <input type="text" {...register("RequestorAddress")} />
              <label>District</label>
              <input type="text" {...register("RequestorDistrict")} />
              <label>State</label>
              <input type="text" {...register("RequestorState")} />
              <label>Email Id</label>
              <input type="email" {...register("RequestorEmailId")} />
              <label>Mobile Number</label>
              <input type="text" {...register("RequestorMobNo")} />
              <label>Blood Group</label>
              <input type="text" {...register("RequestorBloodGroup")} />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Request;
