import React from "react";
import Header from "../component/header";
import "./search_donor.css";
import { useForm } from "react-hook-form";
import "./register.css";
import firebase from "../utils/firebase";

function Search_donor(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    firebase.addSearcherDetail(data);
    alert("Your data saved successfully");
    props.history.replace("/main");
  };

  return (
    <>
      <Header />
      <section className="search">
        <div className="bo0x">
          <div className="bo0x1"></div>
          <div className="bo0x2">
            <h1>Search a Donor</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>Country</label>
              <input type="text" {...register("SearchedCoutry")} />
              <label>State</label>
              <input type="text" {...register("SearchedState")} />
              <label>District</label>
              <input type="text" {...register("SearcheDistrict")} />
              <label>Blood Type</label>
              <input type="text" {...register("SearchedBloodType")} />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Search_donor;
