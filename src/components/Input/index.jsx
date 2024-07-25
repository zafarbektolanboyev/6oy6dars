import React, { useState } from 'react';
import "../Input/index.css";

function Input() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    bio: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log('Form data saved to localStorage:', formData);
    setFormData({
      fullName: '',
      email: '',
      username: '',
      password: '',
      bio: ''
    });
  };

  return (
    <div className='forms'>
      <div className="info">
        <h2>Create An Account</h2>
        <p>Kindly fill the following details to create your account</p>
      </div>
      <form className='form' onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="fullName"
          placeholder='Enter your full name' 
          value={formData.fullName} 
          onChange={handleChange} 
        />
        <input 
          type="email" 
          name="email"
          placeholder='Enter your email address' 
          value={formData.email} 
          onChange={handleChange} 
        />
        <input 
          type="text" 
          name="username"
          placeholder='Enter your email username' 
          value={formData.username} 
          onChange={handleChange} 
        />
        <input 
          type="password" 
          name="password"
          placeholder='Enter your email password' 
          value={formData.password} 
          onChange={handleChange} 
        />
        <textarea 
          name="bio"
          id="Bio" 
          placeholder='Your Biography' 
          value={formData.bio} 
          onChange={handleChange} 
        ></textarea>
        <button type="submit">Create Account</button>
        <p>You will receive an email after setting up your account</p>
      </form>
    </div>
  );
}

export default Input;
