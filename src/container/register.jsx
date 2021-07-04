import React from "react";
import Header from "../component/header";
import './register.css'

function Register() {
  return (
    <>
      <Header />
      <section className="reg">
        <div className="booox">
          <div className="booox1"></div>
          <div className="booox2">
            <h2>Fill up the form to donate blood</h2>
            <form>
              <label>Donor Name</label>
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
              <label>Name of Hospital</label>
              <select name="hospital" id="hosp">
                <option></option>
              </select>
              <label>Medical History(if any)</label>
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

export default Register;
