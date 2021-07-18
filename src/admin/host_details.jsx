import React, { useEffect, useState } from "react";
import firebase from "../utils/firebase";
import "./details.css";

const HostDetail = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPostsFromFirebase = [];
    const donor = firebase.db
      .collection("Host_detail")
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
      <h1>Host Track Panel</h1>
      <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Organization Name</th>
                        <th>Email</th>
                        <th>Mobile No</th>
                        <th>Host Location</th>
                    </tr>
                    <tr>
                        <td className="tb"> {posts.length > 0 ? (
                            posts.map((post) => <div key={post.key}>{post.HostFirstName} {post.HostLastName}</div>)
                        ) : (
                            <h3>no answers yet :(</h3>
                        )}</td>
                        <td className="tb"> {posts.length > 0 ? (
                            posts.map((post) => <div key={post.key}>{post.HostOrganizationName}</div>)
                        ) : (
                            <h3>no answers yet :(</h3>
                        )}</td>
                        <td className="tb"> {posts.length > 0 ? (
                            posts.map((post) => <div key={post.key}>{post.HostEmailId}</div>)
                        ) : (
                            <h3>no answers yet :(</h3>
                        )}</td>
                        <td className="tb"> {posts.length > 0 ? (
                            posts.map((post) => <div key={post.key}>{post.HostMobNo}</div>)
                        ) : (
                            <h3>no answers yet :(</h3>
                        )}</td>
                        <td className="tb"> {posts.length > 0 ? (
                            posts.map((post) => <div key={post.key}>{post.HostLocation}</div>)
                        ) : (
                            <h3>no answers yet :(</h3>
                        )}</td>
                    </tr>
                </tbody>
            </table>
        </div>
  );
};

export default HostDetail;