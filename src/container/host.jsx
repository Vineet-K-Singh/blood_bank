import React from "react";
import Header from "../component/header";
import './host.css';
import { useForm } from "react-hook-form";
import "./register.css";
import firebase from "../utils/firebase";

function Host(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (host_data) => {
    console.log(host_data);
    firebase.addHostDetail(host_data);
    alert("User data saved successfully");
    props.history.replace("/main");
  };
  return (
    <>
      <Header />
      <section className="host">
        <h1>Set up a Blood Host Drive</h1>
        <p>
          As the COVID-19 public health crisis continues, our mission to sustain
          the blood supply is tested in new ways that require our vigilance and
          flexibility. When viral spread subsides, recovery will require
          steadfast unity, and equal parts planning and adaptation for months to
          come. One of the ways you can prepare for a conversation with our
          representative is to examine your calendar for opportunities to host
          blood drives over the next year. Some areas least impacted by COVID-19
          can help us sustain patients in areas most impacted, so we may call
          upon your service at times of greatest need as the situation evolves.
          We are grateful for your commitment and flexibility during this
          challenging time and looking forward to coming TOGETHER again in
          service.
        </p>
        <div className="box">
          <h3>Lets get started...</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label>First Name</label>
                <input type="text" {...register("HostFirstName")}/>
                <label>Last Name</label>
                <input type="text" {...register("HostLastName")}/>
                <label>Organization Name</label>
                <input type="text" {...register("HostOrganizationName")}/>
                <label>Title</label>
                <input type="text" {...register("HostTitle")}/>
                <label>Email-Id</label>
                <input type="text" {...register("HostEmailId")}/>
                <label>Mobile Number</label>
                <input type="text" {...register("HostMobNo")}/>
                <label>Organization Type</label>
                <input type="text" {...register("HostOrganizationType")}/>
                <label>Host Location</label>
                <input type="text" {...register("HostLocation")}/>
                <label>Any additional comments</label>
                <textarea name="comment" {...register("HostComment")}></textarea>
                <button type="submit">Submit</button>
              </form>
          </div>
      </section>
    </>
  );
}

export default Host;
