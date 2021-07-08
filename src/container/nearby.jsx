import React from "react";
import Header from "../component/header";
import './nearby.css';
import { useForm } from "react-hook-form";
import "./register.css";
import firebase from "../utils/firebase";

function Nearby(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (place_data) => {
    console.log(place_data);
    firebase.addPlaceDetail(place_data);
    alert("Your data saved successfully");
    props.history.replace("/main");
  };
  return (
    <>
      <Header />
      <section className="near">
        <div className="boo0x">
          <div className="boo0x1"></div>
          <div className="boo0x2">
            <h2>Search the nearby</h2>
            <h2>blood donation center...</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>Resedential Address</label>
              <input type="text" {...register("PlaceAddress")}/>
              <label>District</label>
              <input type="text" {...register("PlaceDistrict")}/>
              <label>State</label>
              <input type="text" {...register("PlaceState")}/>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Nearby;
