import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./Payment.css";

function Payment() {
  const [UPI, setUPI] = useState("");
  const [payMode, setpayMode] = useState("");
  const [card, setcard] = useState("");
  const [expDate, setExpCard] = useState("");
  const [account, setaccount] = useState("");
  const [IFSCCode, setIfscCode] = useState("");

  //Implement the Payment function as provided
  const Payment = () => {
    //Store the data on database by calling the REST API
    fetch("http://localhost:8000/payment", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        payMode: payMode,
        card: {
          holderName: card,
          expirationDate: expDate,
          cardNo: account,
          cvvCode: IFSCCode,
        },
        UPI: UPI,
        email: localStorage.getItem("email"),
      }),
    })
      .then((response) => response.json())
      //Response from the REST API
      .then((responseData) => {
        const message_id = responseData.message_id;
        //If data is updated or stored successfully
        if (message_id == 1 || message_id == 3) {
          document.querySelector(".paymentContainer").style.display = "none";
          document.querySelector(".completionContainer").style.display = "flex";
          toast.success("Successfully compeleted!");
        }
        //Else create mock up box for any other response
        else {
          const message = responseData.message;
          window.alert(message);
        }
      })
      .catch((err) => {
        console.log(`Error in accessing the server is ${err}`);
      });
  };
  return (
    <div className="paymentContainer align-center">
      <h className="optionsHeader mb-0">Choose Payment payMode:</h>
      <div>
        <div className="upiDiv">
          <div className="optionDiv">
            <input
              type="radio"
              id="UPI"
              name="optionNo"
              value={payMode}
              onChange={(e) => setpayMode("upi")}
            />
            <label for="UPI">UPI</label>
          </div>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="UPI_ID"
            name="upi_id"
            value={UPI}
            onChange={(e) => setUPI(e.target.value)}
            placeholder="UPI Id"
          />
        </div>
        <div className="cardDiv">
          <div className="optionDiv">
            <input
              type="radio"
              id="card"
              name="optionNo"
              value={payMode}
              onChange={(e) => setpayMode("card")}
            />
            <label for="card">Debit/ATM Card</label>
          </div>
          <div className="cardDetailsDiv">
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="card"
              name="card"
              value={card}
              onChange={(e) => setcard(e.target.value)}
              placeholder="Card holder's name"
            />
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="expDate"
              name="expDate"
              value={expDate}
              onChange={(e) => setExpCard(e.target.value)}
              placeholder="Expiration date"
            />
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="account"
              name="account"
              value={account}
              onChange={(e) => setaccount(e.target.value)}
              placeholder="Card Number"
            />
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              id="IFSCCode"
              name="IFSCCode"
              value={IFSCCode}
              onChange={(e) => setIfscCode(e.target.value)}
              placeholder="CVV Code"
            />
          </div>
        </div>

        <button className="toCompletion" onClick={Payment}>
          Complete Payment{" "}
        </button>
      </div>
    </div>
  );
}

export default Payment;
