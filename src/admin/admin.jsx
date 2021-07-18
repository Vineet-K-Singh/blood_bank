import React from 'react';
import "./admin.css";

function Admin() {
    return (
        <>
            <h1>Administrative Page</h1>
            <div className="add">
                <div className="data">
                    <h3>Track the donors details</h3>
                    <a href="./donorDetail">Click Here</a>
                </div>
                <div className="data">
                    <h3>Track the requestors details</h3>
                    <a href="./requestorDetail">Click Here</a>
                </div>
                <div className="data">
                    <h3>Track the host details</h3>
                    <a href="./hostDetail">Click Here</a>
                </div>
                <div className="data">
                    <h3>Track the volunteers details</h3>
                    <a href="./volunteerDetail">Click Here</a>
                </div>
            </div>
        </>
    )
}

export default Admin;
