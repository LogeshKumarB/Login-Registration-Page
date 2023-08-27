import React, { Component, useState } from "react";
// import "./Manufacturing_page.css";

export default function Manufacturingportal() {
  const [from, setFrom] = useState("");
  const [toPlace, setToPlace] = useState("");
  const [quantity, setQuantity] = useState("");
  const [pickup, setPickup] = useState("");
  const [details, setDetails] = useState(true);
  const [transporter, setTransporter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(fname, lname, email, password);
    try {
      fetch("http://localhost:5000/manufacturing", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          from,
          toPlace,
          quantity,
          pickup,
          transporter,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status === "ok") {
            alert("Product Details Booked Successfully");
          } else {
            alert("Something went wrong");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        {details && (
          <form onSubmit={handleSubmit}>
            <h3>Product Details Booking</h3>

            <div className="mb-3">
              <label>From :</label>
              <input
                type="text"
                className="form-control"
                placeholder="From"
                onChange={(e) => setFrom(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label>To :</label>
              <input
                type="text"
                className="form-control"
                placeholder="To"
                onChange={(e) => setToPlace(e.target.value)}
              />
            </div>
            <div className="mb-3 ">
              <label>Pickup</label>
              <input
                style={{ height: "100px" }}
                type="password"
                className="form-control"
                placeholder={localStorage.getItem("address")}
                onChange={(e) => setPickup(e.target.value)}
              />
            </div>
            <div className="mb-1">
              <label>Quantity : </label>
            </div>
            <select
              onChange={(e) => setQuantity(e.target.value)}
              className="mb-3 mx-4"
            >
              <option value="1" selected="selected">
                1 Ton{"   "}
              </option>
              <option value="2">2 Ton</option>
              <option value="3">3 Ton</option>
            </select>

            <div className="mb-3">
              <label>Transporter Name</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Transporter"
                onChange={(e) => setTransporter(e.target.value)}
              />
            </div>

            <div className="d-grid mb-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        )}
        <div className="d-grid ">
          <button className="btn btn-primary">Display Booking Details</button>
        </div>
      </div>
    </div>
  );
}
