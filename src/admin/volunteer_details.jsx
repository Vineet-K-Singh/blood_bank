import React, { useEffect, useState } from "react";
import firebase from "../utils/firebase";
import "./details.css";

const VolunteerDetail = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPostsFromFirebase = [];
    const donor = firebase.db
      .collection("Volunteer_detail")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getPostsFromFirebase.push({
            ...doc.data(), //spread operator
            key: doc.id, // `id` given to us by Firebase
          });
        });
        setPosts(getPostsFromFirebase);
        setLoading(false);
      });

    // return cleanup function
    return () => donor();
  }, [loading]); // empty dependencies array => useEffect only called once

  if (loading) {
    return <h3>loading firebase data...</h3>;
  }

  return (
    <div className="container">
      <h1>Volunteer Track Panel</h1>
      <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Mobile No</th>
                        <th>Post</th>
                    </tr>
                    <tr>
                        <td className="tb"> {posts.length > 0 ? (
                            posts.map((post) => <div key={post.key}>{post.VolunteerName}</div>)
                        ) : (
                            <h3>no answers yet :(</h3>
                        )}</td>
                        <td className="tb"> {posts.length > 0 ? (
                            posts.map((post) => <div key={post.key}>{post.VolunteerAddress}</div>)
                        ) : (
                            <h3>no answers yet :(</h3>
                        )}</td>
                        <td className="tb"> {posts.length > 0 ? (
                            posts.map((post) => <div key={post.key}>{post.VolunteerEmailId}</div>)
                        ) : (
                            <h3>no answers yet :(</h3>
                        )}</td>
                        <td className="tb"> {posts.length > 0 ? (
                            posts.map((post) => <div key={post.key}>{post.VolunteerMobNo}</div>)
                        ) : (
                            <h3>no answers yet :(</h3>
                        )}</td>
                        <td className="tb"> {posts.length > 0 ? (
                            posts.map((post) => <div key={post.key}>{post.VolunteerPost}</div>)
                        ) : (
                            <h3>no answers yet :(</h3>
                        )}</td>
                    </tr>
                </tbody>
            </table>
        </div>
  );
};

export default VolunteerDetail;