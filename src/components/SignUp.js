import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import carImage from "../images/car-image.jpg"

const SignUp = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.name && formData.email && formData.mobile) {
      console.log("Form Submitted", formData);

      navigate("/");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="left-side">
          <img src={carImage}alt="Car" className="car-image" />
        </div>
        <div className="right-side">
          <h2>
            <span className="blue">Car</span>
            <span className="red">space</span>
          </h2>
          <button className="signup-btn">Sign up</button>
          <form onSubmit={handleSubmit}>
            <label>Enter your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label>Enter your Email ID</label>
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Enter your Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              placeholder="+91"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            <button type="submit" className="continue-btn">
              Continue
            </button>
          </form>
          {/* <Link to="/home   ">View Most Wanted Cars</Link> */}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
