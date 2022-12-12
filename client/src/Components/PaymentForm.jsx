import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import "./Payment.css";

function Payment() {
  const [mode, setMode] = useState("");
  const [upiId, setUpiId] = useState("");
  const [cardName, setCardName] = useState("");
  const [expDate, setExpCard] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [IFSCCode, setIfscCode] = useState("");

  //Implement the CompletePayment function as provided
  const CompletePayment = () => {
    //Store the data on database by calling the REST API
    fetch("http://localhost:8000/api/payment", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mode: mode,
        card: {
          holderName: cardName,
          expirationDate: expDate,
          cardNo: accountNo,
          cvvCode: IFSCCode,
        },
        upiId: upiId,
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
          toast.success('Successfully compeleted!');
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
      <h className="amountDisclaimer mt-5">Net amount to be paid: 500 (in Rupess)</h>
      <h className="optionsHeader mb-0">Choose Payment mode:</h>
      <div>
      <div className="upiDiv">
          <div className="optionDiv">
            <input
              type="radio"
              id="UPI"
              name="optionNo"
              value={mode}
              onChange={(e) => setMode("upi")}
            />
            <label for="UPI">UPI</label>
          </div>
          <input
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            type="text"
            id="UPI_ID"
            name="upi_id"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            placeholder="UPI Id"
          />
        </div>
        <div className="cardDiv">
          <div className="optionDiv">
            <input
              type="radio"
              id="card"
              name="optionNo"
              value={mode}
              onChange={(e) => setMode("card")}
            />
            <label for="card">Debit/ATM Card</label>
          </div>
          <div className="cardDetailsDiv">
            <input
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
              type="text"
              id="cardName"
              name="cardName"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              placeholder="Card holder's name"
            />
            <input
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
              type="text"
              id="expDate"
              name="expDate"
              value={expDate}
              onChange={(e) => setExpCard(e.target.value)}
              placeholder="Expiration date"
            />
            <input
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
              type="text"
              id="accountNo"
              name="accountNo"
              value={accountNo}
              onChange={(e) => setAccountNo(e.target.value)}
              placeholder="Card Number"
            />
            <input
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
              type="password"
              id="IFSCCode"
              name="IFSCCode"
              value={IFSCCode}
              onChange={(e) => setIfscCode(e.target.value)}
              placeholder="CVV Code"
            />
          </div>
        </div>
       
        <button className="toCompletion" onClick={CompletePayment}>
          Complete Payment{" "}
        </button>
      </div>
    </div>
  );
}

export default Payment;
