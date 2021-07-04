import React from "react";
import Header from "../component/header";
import './search_donor.css'

function Search_donor() {
  return (
    <>
      <Header />
      <section className="search">
        <div className="bo0x">
          <div className="bo0x1"></div>
          <div className="bo0x2">
            <h1>Search a Donor</h1>
            <form>
              <label>Country</label>
              <select name="country" id="country">
                <option value="India">India</option>
              </select>
              <label>State</label>
              <select name="state" id="state">
                <option value=""></option>
              </select>
              <label>District</label>
              <select name="district" id="district">
                <option value=""></option>
              </select>
              <label>Blood Type</label>
              <select name="blood" id="blood">
                <option value=""></option>
              </select>
            </form>
            <a href="/">
              <button>Search</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Search_donor;
