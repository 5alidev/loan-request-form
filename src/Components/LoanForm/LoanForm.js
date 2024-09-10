import { useState } from "react";
import "./LoanForm.css";
import Modal from "../Modal/Modal";

const LoanForm = () => {
  const myFormDataInitial = {
    name: "",
    phoneNumber: "",
    age: 0,
    isEmployee: false,
    salary: "",
  };

  const [myFormData, setMyFormData] = useState(myFormDataInitial);

  const isFormValid = () => {
    if (
      myFormData.name.trim() === "" ||
      myFormData.phoneNumber.trim() === "" ||
      myFormData.age === 0 ||
      myFormData.salary === ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  const [hideModal, setHideModal] = useState({
    hide: "hide",
    error: "",
    success: "",
  });
  const [message, setMessage] = useState("");
  const submitFormHandler = (e) => {
    e.preventDefault();
    setHideModal({ ...hideModal, hide: "" });
    if (myFormData.name.length < 4) {
      setMessage("Name Should be at Least 4 Characters Long");
      setHideModal({ ...hideModal, hide: "", error: "error", success: "" });
    } else if (
      myFormData.phoneNumber.length < 10 ||
      myFormData.phoneNumber.length > 12
    ) {
      setMessage("Please Insert a Valid Phone Number");
      setHideModal({ ...hideModal, hide: "", error: "error", success: "" });
    } else if (
      parseInt(myFormData.age) < 18 ||
      parseInt(myFormData.age) > 100
    ) {
      setMessage("Age Not Allowed");
      setHideModal({ ...hideModal, hide: "", error: "error", success: "" });
    } else {
      setMessage("Form Submited successfully");
      setHideModal({ ...hideModal, hide: "", success: "success", error: "" });
    }
  };

  return (
    <form id="myForm" action="">
      <h1>Requesting a Loan</h1>
      <div className="name-input-container">
        <div className="name-label">
          <label htmlFor="name">Name:</label>
        </div>
        <div className="name-input">
          <input
            type="text"
            name="name"
            id="name"
            value={myFormData.name}
            onChange={(e) => {
              setMyFormData({ ...myFormData, name: e.target.value });
            }}
          />
        </div>
      </div>
      <div className="phone-input-container">
        <div className="phone-label">
          <label htmlFor="phone">Phone Number:</label>
        </div>
        <div className="phone-input">
          <input
            type="tel"
            name="phone"
            id="phone"
            value={myFormData.phoneNumber}
            onChange={(e) => {
              setMyFormData({ ...myFormData, phoneNumber: e.target.value });
            }}
          />
        </div>
      </div>
      <div className="age-input-container">
        <div className="age-label">
          <label htmlFor="age">Age:</label>
        </div>
        <div className="age-input">
          <input
            type="number"
            name="age"
            id="age"
            value={myFormData.age === 0 ? "" : myFormData.age}
            onChange={(e) => {
              setMyFormData({ ...myFormData, age: e.target.value });
            }}
          />
        </div>
      </div>
      <div className="employee-check-input-container">
        <div className="employee-check-label">
          <label htmlFor="employee-check">Are you an Employee?:</label>
        </div>
        <div className="employee-check-input">
          <input
            type="checkbox"
            name="employee-check"
            id="employee-check"
            checked={myFormData.isEmployee}
            onChange={(e) => {
              setMyFormData({ ...myFormData, isEmployee: e.target.checked });
            }}
          />
        </div>
      </div>
      <div className="salary-input-container">
        <div className="salary-label">
          <label htmlFor="salary">Salary:</label>
        </div>
        <div className="salary-input">
          <select
            name="salary"
            id="salary"
            value={myFormData.salary}
            onChange={(e) => {
              setMyFormData({ ...myFormData, salary: e.target.value });
            }}
          >
            <option value="" disabled>
              Choose Your Salary
            </option>
            <option value="500$">Less than 500$</option>
            <option value="500$-2000$">Between 500$ and 2000$</option>
            <option value="2000$">Above 2000$</option>
          </select>
        </div>
      </div>
      <div className="submit-container">
        <button
          disabled={isFormValid()}
          onClick={(e) => {
            submitFormHandler(e);
          }}
        >
          Submit
        </button>
      </div>
      <Modal message={message} hide={hideModal} setHideModal={setHideModal} />
    </form>
  );
};

export default LoanForm;
