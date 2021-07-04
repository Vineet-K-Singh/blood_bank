import React from "react";
import Header from "../component/header";

function Nearby() {
  return (
    <>
      <Header />
      <section className="near">
        <div className="boo0x">
          <div className="boo0x1"></div>
          <div className="boo0x2">
            <h2>Search the nearby</h2>
            <h2>blood donation center...</h2>
            <form>
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

export default Nearby;
