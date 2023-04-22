import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../../../App.css';

// Import our assets
import video from '../../../../Assets/video.mp4';
import logo from '../../../../Assets/logo.png';

// Imported Icons
import { FaUserShield } from 'react-icons/fa'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [sameUserError, setSameUserError] = useState('');
  const navigateTo = useNavigate()

  const validateInput = () => {
    let isValid = true;

    if (username.length < 3 || username.length > 20) {
      setUsernameError("Username must be between 3 and 20 characters!");
      isValid = false;
    } else {
      setUsernameError("");
    }

    if (password.length < 8 || password.length > 100) {
      setPasswordError("Password must be between 8 and 100 characters!");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (sameUserError) {
      setSameUserError("");
    }
    validateInput();
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validateInput();
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (password !== e.target.value) {
      setConfirmPasswordError("Passwords do not match!");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInput()) {
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/users/signUp', {
        username,
        password,
      });
      console.log(response.data);
      setUsername('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      if (error.response && error.response.status >= 400) {
        setSameUserError("This username has been registered already!");
      }
    }
  };

  return (
    <div className='registerPage flex'>
      <div className="container flex">

        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className='title'>Find more birds, Share your sightings, Track your lists!</h2>
            <p>Adopt the peace of nature!</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Have an account?</span>
            <Link to={'/Login'}>
              <button className='btn'>Login</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Let Us Know You!</h3>
          </div>

          <form onSubmit={handleSubmit} action="" className='form grid'>

            <div className="inputDiv">
            <label htmlFor="username">Username</label>
<div className="input flex">
<FaUserShield className='icon' />
<input
               type="text"
               id="username"
               placeholder='Enter Username'
               value={username}
               onChange={handleUsernameChange}
             />
</div>
{usernameError && <p className="error">{usernameError}</p>}
{sameUserError && <p className="error">{sameUserError}</p>}
</div>
<div className="inputDiv">


<label htmlFor="password">Password</label>
          <div className="input flex">
            <BsFillShieldLockFill className='icon' />
            <input
              type="password"
              id="password"
              placeholder='Enter Password'
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          {passwordError && <p className="error">{passwordError}</p>}
        </div>

        <div className="inputDiv">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="input flex">
            <BsFillShieldLockFill className='icon' />
            <input
              type="password"
              id="confirmPassword"
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>
          {confirmPasswordError && <p className="error">{confirmPasswordError}</p>}
        </div>

        <button type='submit' className='btn flex' >
          <span>Register</span>
          <AiOutlineSwapRight className='icon' />
        </button>

        

      </form>
    </div>

  </div>
</div>
);
};
export default Register;
