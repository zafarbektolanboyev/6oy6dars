import React, { useRef } from "react";
import "../Form/index.css";

function Form() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const companyRef = useRef(null);
  const addressRef = useRef(null);
  const monthRef = useRef(null);
  const dayRef = useRef(null);
  const yearRef = useRef(null);

  const handleSubmit = () => {
    if (!validateForm()) return;
    saveFormData();
    clearForm();
  };

  function validateForm () {
    if (firstNameRef.current.value.trim() === '') {
      alert("First name is required.");
      firstNameRef.current.focus();
      return false;
    }

    if (lastNameRef.current.value.trim() === '') {
      alert("Last name is required.");
      lastNameRef.current.focus();
      return false;
    }

    if (emailRef.current.value.trim() === '' || !validateEmail(emailRef.current.value)) {
      alert("Valid email is required.");
      emailRef.current.focus();
      
      return false;
    }
    return true;
  };
  function saveFormData () {
    const formData = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      company: companyRef.current.value,
      address: addressRef.current.value,
      month: monthRef.current.value,
      day: dayRef.current.value,
      year: yearRef.current.value,
    };

    console.log("Form Data:", formData);
    localStorage.setItem("formData", JSON.stringify(formData));
  };

  const clearForm = () => {
    firstNameRef.current.value = '';
    lastNameRef.current.value = '';
    emailRef.current.value = '';
    companyRef.current.value = '';
    addressRef.current.value = '';
    monthRef.current.value = '';
    dayRef.current.value = '';
    yearRef.current.value = '';
  };

  return (
    <div className="forms1">
      <h2>YOUR EVENT</h2>
      <h3 onClick={handleSubmit}>Online Registration</h3>
      <form className="from1">
        <div className="names">
          <div className="name">
            <label>First Name</label>
            <input 
              type="text" 
              placeholder="First Name" 
              ref={firstNameRef} 
            />
          </div>
          <div className="lastname">
            <label>Last Name</label>
            <input 
              type="text" 
              placeholder="Last Name" 
              ref={lastNameRef} 
            />
          </div>
        </div>
        <div className="email">
          <label>Email Address</label>
          <input 
            type="email" 
            placeholder="Email Address" 
            ref={emailRef} 
          />
        </div>
        <div className="company">
          <label>Company (if applicable)</label>
          <input 
            type="text" 
            placeholder="Company" 
            ref={companyRef} 
          />
        </div>
        <div className="adres">
          <label>Physical Address</label>
          <input 
            type="text" 
            placeholder="Physical Address" 
            ref={addressRef} 
          />
        </div>
        <div className="data-birth">
          <label>Date of Birth</label>
          <div className="dob-inputs">
            <input 
              type="number" 
              placeholder="MM" 
              ref={monthRef} 
              min="1" 
              max="12" 
            />
            <input 
              type="number" 
              placeholder="DD" 
              ref={dayRef} 
              min="1" 
              max="31" 
            />
            <input 
              type="number" 
              placeholder="YYYY" 
              ref={yearRef} 
              min="1900" 
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
