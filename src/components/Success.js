import React from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  const formData = location.state?.formData || {};

  return (
    <div>
      <h2>Success</h2>
      <p>Your form has been successfully submitted!</p>
      <h3>Form Data:</h3>
      <ul>
        <li>First Name: {formData.fname}</li>
        <li>Last Name: {formData.lname}</li>
        <li>Username: {formData.username}</li>
        <li>Email: {formData.email}</li>
        <li>Password: {formData.password}</li>
        <li>Phone Number: {formData.phone}</li>
        <li>Country: {formData.country}</li>
        <li>City: {formData.city}</li>
        <li>PAN Number: {formData.panNo}</li>
        <li>Aadhar Number: {formData.aadharNo}</li>
      </ul>
    </div>
  );
};

export default Success;
