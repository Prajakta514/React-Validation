import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css"

export default function Form(){


    const navigate = useNavigate();

  const [data, setData] = useState({
    fname: '',
    lname: '',
    username: '',
    email: '',
    password: '',
    phone: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!data.fname) {
      newErrors.fname = 'First name is required';
    }
    if (!data.lname) {
      newErrors.lname = 'Last name is required';
    }
    if (!data.username) {
      newErrors.username = 'Username is required';
    }
    if (!data.email) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(data.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!data.password) {
      newErrors.password = 'Password is required';
    } else if (!isValidPassword(data.password)) {
      newErrors.password =
        'Password must be at least 8 characters long and contain at least one symbol, one number, one uppercase letter, and one lowercase letter';
    }
    if (!data.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!isValidPhoneNumber(data.phone)) {
      newErrors.phone = 'Phone number must be with country code';
    }
    if (!data.country) {
      newErrors.country = 'Country is required';
    }
    if (!data.city) {
      newErrors.city = 'City is required';
    }
    if (!data.panNo) {
      newErrors.panNo = 'PAN number is required';
    }
    if (!data.aadharNo) {
      newErrors.aadharNo = 'Aadhar number is required';
    }

    setErrors(newErrors);

     return {
    isValid: Object.keys(newErrors).length === 0,
    errors: newErrors,
  };
   };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const isValidPassword = (password) => {
    const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return regex.test(password);
  };

  const isValidPhoneNumber = (phone) => {
   return /^\+\d{1,3}\s\d{9,15}$/.test(phone);
  };
const [isSubmitting, setIsSubmitting] = useState(false);


const handleSubmit = (e) => {
  e.preventDefault();
  setIsSubmitting(true); // Set submission state to true

  const { isValid, errors } = validate();

  if (isValid) {
    console.log('Form Submitted', data);
    // Redirect to success page
    navigate('/Success', { state: { formData: data } });
  } else {
    console.log('Form Validation Failed');
    setErrors(errors); // Update errors state only if validation fails
  }
};




   const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
        validate(); // Trigger validation on field change
    };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input type="text" name="fname" value={data.fname} placeholder="Enter First name" onChange={handleChange} />
        {errors.fname && <span className="error-message">{errors.fname}</span>}
      </div>

      <div>
        <label>Last Name:</label>
        <input type="text" name="lname" value={data.lname} placeholder="Enter last name" onChange={handleChange} />
        {errors.lname && <span className="error-message">{errors.lname}</span>}
      </div>

      <div>
        <label>Username:</label>
        <input type="text" name="username" value={data.username} placeholder="Enter username" onChange={handleChange} />
        {errors.username && <span className="error-message">{errors.username}</span>}
      </div>

      <div>
        <label>Email:</label>
        <input type="email" name="email" value={data.email} placeholder="Enter Email" onChange={handleChange} />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>

      <div>
        <label>Password:</label>
        <input type="password" name="password" value={data.password} placeholder="Enter password" onChange={handleChange} />
        {errors.password && <span className="error-message">{errors.password}</span>}
      </div>

      <div>
        <label>Phone Number:</label>
        <input type="text" name="phone" value={data.phone} placeholder="Enter Phone Number" onChange={handleChange} />
        {errors.phone && <span className="error-message">{errors.phone}</span>}
      </div>

      <div>
        <label>Country:</label>
        <select name="country" value={data.country} onChange={handleChange}>
          <option value="">Select</option>
          <option value="India">India</option>
          <option value="Japan">Japan</option>
        </select>
        {errors.country && <span className="error-message">{errors.country}</span>}
      </div>

      <div>
        <label>City:</label>
        <select name="city" value={data.city} onChange={handleChange}>
          <option value="">Select</option>
          <option value="Pune">Pune</option>
          <option value="Mumbai">Mumbai</option>
        </select>
        {errors.city && <span className="error-message">{errors.city}</span>}
      </div>

      <div>
        <label>PAN Number:</label>
        <input type="text" name="panNo" value={data.panNo} placeholder="Enter PAN Number" onChange={handleChange} />
        {errors.panNo && <span className="error-message">{errors.panNo}</span>}
      </div>

      <div>
        <label>Aadhar Number:</label>
        <input type="text" name="aadharNo" value={data.aadharNo} placeholder="Enter Aadhar Number" onChange={handleChange} />
        {errors.aadharNo && <span className="error-message">{errors.aadharNo}</span>}
      </div>

       <button type="submit" >
      Submit
    </button>
    </form>
  );
};

