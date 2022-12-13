import React, { useState, useEffect } from "react";
import "./Form.css";

function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [startDate, setStartDate] = useState("");
  const [batchNumber, setBatchNumber] = useState();
  useEffect(() => {
    localStorage.clear();
  }, []);
  const Datapass = () => {
    //Changing initial date format to mm/dd/year
    var newStartDate = "";
    newStartDate +=
      startDate[5] +
      startDate[6] +
      "/" +
      startDate[8] +
      startDate[9] +
      "/" +
      startDate.substr(0, 4);

    //Store the data on the database by calling the REST API
    fetch("http://localhost:8000/api/users/user", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        age: Number(age),
        email: email,
        startDate: newStartDate,
        feesPaid: 500,
        batchNumber: batchNumber,
      }),
    })
      .then((response) => response.json())
      //Response from the REST API
      .then((responseData) => {
        const message_id = responseData.message_id;

        //If successful updation is there or successfull insertion is there
        if (message_id == "1" || message_id == "3") {
          //Store the information locally to be used later
          localStorage.setItem("name", name);
          localStorage.setItem("age", Number(age));
          localStorage.setItem("email", email);
          localStorage.setItem("startDate", newStartDate);
          localStorage.setItem("batchNumber", batchNumber);
          //Move to the payment dialogue box
          document.querySelector(".formContainer").style.display = "none";
          document.querySelector(".paymentContainer").style.display = "flex";
        }
        //Else anything else happens then create a mockup box
        else {
          const message = responseData.message;
          window.alert(message);
          //If plan is active then simply reload the application
          if (message_id == "2") {
            window.location.reload();
          }
        }
      })
      .catch((err) => {
        console.log(`Error in accessing the server is ${err}`);
      });
  };

  return (
    <div className="formContainer w-3/4 shadow-sm">
      <p className="text-gray-900 font-bold">Yoga Form</p>
      <input
        type="text"
        value={name}
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="name@flexmoney.com"
        onChange={(e) => setName(e.target.value)}
        autocomplete="off"
      />

      <input
       class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="string"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        min="18"
        max="65"
      />

      <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="date"
        placeholder="Starting date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="batchTiming">
        <h>Select batch timing:</h>
        <div className="batchOptions">
          <div>
            <input
              type="radio"
              id="first"
              name="batchNo"
              value="1"
              onChange={(e) => setBatchNumber(e.target.value)}
            />
            <label for="first">6 AM-7 AM</label>
            <br />
          </div>
          <div>
            <input
              type="radio"
              id="second"
              name="batchNo"
              value="2"
              onChange={(e) => setBatchNumber(e.target.value)}
            />
            <label for="second">7 AM-8 AM</label>
            <br />
          </div>
          <div>
            <input
              type="radio"
              id="third"
              name="batchNo"
              value="3"
              onChange={(e) => setBatchNumber(e.target.value)}
            />
            <label for="third">8 AM-9 AM</label>
          </div>
          <div>
            <input
              type="radio"
              id="fourth"
              name="batchNo"
              value="4"
              onChange={(e) => setBatchNumber(e.target.value)}
            />
            <label for="fourth">5 PM-6 PM</label>
          </div>
        </div>
      </div>
      <button
        className="toPayment m-4 hover:bg-gray-900"
        onClick={Datapass}
      >
        Next
      </button>
    </div>
  );
}

export default Form;
