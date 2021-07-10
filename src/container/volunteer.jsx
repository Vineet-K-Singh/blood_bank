import React from "react";
import Header from "../component/header";
import './volunteer.css';
import Image1 from "../assets/img/image1.jfif";
import { useForm } from "react-hook-form";
import firebase from "../utils/firebase";

function Volunteer(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    firebase.addVolunteerDetail(data);
    alert("User data saved successfully");
    props.history.replace("/main");
  };
  return (
    <>
      <Header />
      <section className="ghost">
        <h1>Volunteer Needed</h1>
        <h2>Here Are Our Most-Needed Volunteer Opportunities</h2>
        <img src={Image1} alt="vimg" />
        <p>
          Discover a new purpose by joining a lifesaving team to help support
          blood collections in your community. Two key volunteer opportunities
          are available:
        </p>
        <p>
          As a <strong>Blood Donor Ambassador</strong> volunteer, you will
          engage donors by greeting, registering, answering questions, providing
          information, and supporting them through the recovery process at the
          refreshments table. The special attention you would provide helps
          create a favorable impression that encourages ongoing donor support.
        </p>
        <p>
          As a <strong>Transportation Specialist</strong> volunteer, you will be
          the critical link between blood donors and blood recipients by
          delivering blood, platelets or other blood products to a hospital.
        </p>
        <div className="box">
          <h3>Apply here..</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" {...register("VolunteerName")}/>
            <label>Resedential Address</label>
            <input type="text" {...register("VolunteerAddress")}/>
            <label>Email-Id</label>
            <input type="email" {...register("VolunteerEmailId")}/>
            <label>Mobile Number</label>
            <input type="text" {...register("VolunteerMobNo")}/>
            <label>Post of volunteer</label>
            <select name="post" id="post" {...register("VolunteerPost")}>
              <option value="Blood Donor Ambassador">Blood Donor Ambassador</option>
              <option value="Transportation Specialist">Transportation Specialist</option>
            </select>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Volunteer;
