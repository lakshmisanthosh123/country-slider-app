import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGoogle, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './LoginPage.css';
const Login = () => {
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    keepSignedIn: false,
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordRegex.test(formData.password)) {
      navigate('/home');
    } else {
      setError('Password must be at least 8 characters long, include at least 1 capital letter, 1 number, and 1 symbol.');
    }
  };

  return (
   
      <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <p>New user? <a href="#">Create an account</a></p>

        <div className="input-group">
          <label htmlFor="username">Username or Email</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group checkbox-group">
          <input
            type="checkbox"
            id="keepSignedIn"
            name="keepSignedIn"
            checked={formData.keepSignedIn}
            onChange={handleInputChange}
          />
          <label htmlFor="keepSignedIn">Keep me signed in</label>
        </div>
        <button type="submit" className="signin-button">Sign In</button>

        <div className="or-divider">Or Sign In With</div>

        <div className="social-signin">
          <button className="social-button google"><FaGoogle /></button>
          <button className="social-button facebook"><FaFacebookF /></button>
          <button className="social-button linkedin"><FaLinkedinIn /></button>
          <button className="social-button twitter"><FaTwitter /></button>
        </div>
      </form>

      <div className="person-icon">
        <img src="/person-walking.png" alt="Person walking" />
      </div>
    </div>
  );
};

export default Login;
