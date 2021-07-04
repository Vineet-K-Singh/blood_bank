import React from "react";
import Header from "../component/header";

function Host() {
  return (
    <>
      <Header />
      <section className="host">
        <h1>Set up a Blood Host Drive</h1>
        <p>
          As the COVID-19 public health crisis continues, our mission to sustain
          the blood supply is tested in new ways that require our vigilance and
          flexibility. When viral spread subsides, recovery will require
          steadfast unity, and equal parts planning and adaptation for months to
          come. One of the ways you can prepare for a conversation with our
          representative is to examine your calendar for opportunities to host
          blood drives over the next year. Some areas least impacted by COVID-19
          can help us sustain patients in areas most impacted, so we may call
          upon your service at times of greatest need as the situation evolves.
          We are grateful for your commitment and flexibility during this
          challenging time and looking forward to coming TOGETHER again in
          service.{" "}
        </p>
        <div className="box">
          <h3>Lets get started...</h3>
          <div className="form">
            <div className="form1">
              <form>
                <label>First Name</label>
                <input type="text" />
                <label>Organization Name</label>
                <input type="text" />
                <label>Email-Id</label>
                <input type="text" />
                <label>Organization Type</label>
                <input type="text" />
              </form>
            </div>
            <div className="form2">
              <form>
                <label>Last Name</label>
                <input type="text" />
                <label>Title</label>
                <input type="text" />
                <label>Mobile Number</label>
                <input type="text" />
                <label>Host Location</label>
                <input type="text" />
              </form>
            </div>
          </div>
          <div className="for">
            <div className="for1">
              <form>
                <label>First Name</label>
                <input type="text" />
                <label>Last Name</label>
                <input type="text" />
                <label>Organization Name</label>
                <input type="text" />
                <label>Title</label>
                <input type="text" />
                <label>Email-Id</label>
                <input type="text" />
                <label>Mobile Number</label>
                <input type="text" />
                <label>Organization Type</label>
                <input type="text" />
                <label>Host Location</label>
                <input type="text" />
              </form>
            </div>
          </div>
          <form>
            <label>Any additional comments</label>
            <textarea name="comment"></textarea>
          </form>
          <button>Submit</button>
        </div>
      </section>
    </>
  );
}

export default Host;
