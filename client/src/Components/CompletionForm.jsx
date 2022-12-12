import React, { useState, useEffect } from "react";
import "./Completion.css";
import payment from "./payment.png";
function Completion() {
  //After completion of payment just return to homepage
  const ReturnToHome = () => {
    window.location.reload();
  };
  return (
    <div className="completionContainer border-2 border-gray-900 w-2/5 shadow-xl">
      <img src={payment} />
      <p>Payment Complete</p>
      <div className="details">
        <p>Name : {String(localStorage.getItem("name"))} </p>
        <p>Age : {String(localStorage.getItem("age"))} years </p>
        <p>Start Date : {String(localStorage.getItem("startDate"))} </p>
        <p>Batch : {String(localStorage.getItem("batchNumber"))} </p>
        <p>Fees Paid : 500 Rs. </p>
      </div>
      <button type="button" onClick={ReturnToHome}>
        Return to home
      </button>
    </div>
  );
}

export default Completion;
