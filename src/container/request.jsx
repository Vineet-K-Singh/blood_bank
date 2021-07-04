import React from "react";
import Header from "../component/header";
import './request.css'

function Request() {
  return (
    <>
      <Header />
      <section className="req">
        <div className="b0x">
          <div className="b0x1"></div>
          <div className="b0x2">
            <h2>Make a Request</h2>
            <form>
              <label>Name</label>
              <input type="text" />
              <label>Aadhar Id</label>
              <input type="text" />
              <label>Resedential Address</label>
              <input type="text" />
              <label>District</label>
              <select name="district" id="dist">
                <option></option>
              </select>
              <label>State</label>
              <select name="state" id="state">
                <option></option>
              </select>
              <label>Email Id</label>
              <input type="email" />
              <label>Mobile Number</label>
              <input type="text" />
              <label>Blood Group</label>
              <input type="text" />
            </form>
            <a href="/">
              <button>Submit</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Request;
