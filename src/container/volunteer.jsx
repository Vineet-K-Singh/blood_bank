import React from "react";
import Header from "../component/header";

function Volunteer() {
  return (
    <>
      <Header />
      <section className="ghost">
        <h1>Volunteer Needed</h1>
        <h2>Here Are Our Most-Needed Volunteer Opportunities</h2>
        <img src="./img/image1.jfif" alt="vimg" />
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
          <form>
            <label>Name</label>
            <input type="text" />
            <label>Resedential Address</label>
            <input type="text" />
            <label>Email-Id</label>
            <input type="email" />
            <label>Mobile Number</label>
            <input type="text" />
            <label>Post of volunteer</label>
            <select name="post" id="post">
              <option value="post1">Blood Donor Ambassador</option>
              <option value="post2">Transportation Specialist</option>
            </select>
          </form>
          <button>Submit</button>
        </div>
      </section>
    </>
  );
}

export default Volunteer;
