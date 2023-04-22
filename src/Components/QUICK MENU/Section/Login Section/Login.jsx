import React, { useEffect, useState } from 'react';
import '../../../../App.css';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Button from '@mui/material/Button';
// Import our assets
import video from '../../../../Assets/video.mp4';
import logo from '../../../../Assets/logo.png';

//IMported Icons
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';

import { useContext } from 'react';
import { AuthContext } from '../../../../AuthContext';

const Login = () => {
  const [loginUserName, setLoginUserName] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const { setAuthenticated } = useContext(AuthContext);
  const navigateTo = useNavigate();

  const [loginStatus, setLoginStatus] = useState('');
  const [statusHolder, setstatusHolder] = useState('message');

  const [showPassword, setShowPassword] = useState(false);

  const [rememberMe, setRememberMe] = useState(false);

  const setJwtToken = (response) => {
    if (response && response.data && response.data.token) {
      const jwtToken = response.data.token;
      if (rememberMe) {
        localStorage.setItem('jwt', jwtToken); // use localStorage if `rememberMe` is true
      } else {
        sessionStorage.setItem('jwt', jwtToken); // use sessionStorage if `rememberMe` is false
      }
      console.log('jwtToken:', jwtToken);
      navigateTo('/Body');
    }
    setAuthenticated(true);
  };
  

  const loginUser = () => {
    Axios.post('/api/users/login', {
      username: loginUserName,
      password: loginPassword,
    })
      .then((response) => {
        if (response.status === 200) {
          setJwtToken(response);
        } else {
          setLoginStatus('Invalid Credentials!');
          console.log('Invalid Credentials!');
        }
      })
      .catch((error) => {
        setLoginStatus('Something went wrong. Please try again later.');
        console.error(error);
      });
  };
  

  const onSubmit = (event) => {
    event.preventDefault();
    loginUser();
    setLoginStatus();
  };

  useEffect(() => {
    if (loginStatus !== '') {
      setstatusHolder('showMessage');
      setTimeout(() => {
        setstatusHolder('message');
      }, 10000);
    }
  }, [loginStatus]);

  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className="title">
              Find more birds, Share your sightings, Track your lists!
            </h2>
            <p>Adopt the peace of nature!</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Don't have an account?</span>
            <Link to={'/register'}>
              <button className="btn">Sign Up</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Welcome Back!</h3>
          </div>

          <form className="form grid" onSubmit={onSubmit}>
            <span className={statusHolder}>{loginStatus}</span>

            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="username"
                  placeholder="Enter Username"
                  onChange={(event) => {
                    setLoginUserName(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                    type={showPassword ? "text" : "password"} // show password if `showPassword` is true
                    id="password"
                    placeholder="Enter Password"
                    onChange={(event) => {
                      setLoginPassword(event.target.value);
                    }}
                />  
                <Button 
                color="success"
                variant="outlined"
                style={{
                width: 15,
                height: 20,
                marginTop: 5,
               
                marginBottom: 5,
                }} 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                >
                Show
                </Button>
              </div>
            </div>
    
            <button type="submit" className="btn flex">
              <span>Login</span>
              <AiOutlineSwapRight className="icon" />
            </button>
            <div className="rem">
              <label htmlFor="rememberMe" style={{marginRight: 10}}>Remember Me</label>           
              <input
                type="checkbox"
                id="rememberMe"
                onChange={(event) => {
                  setRememberMe(event.target.checked);
                }}
              />
            </div>
    
            
          </form>
        </div>
      </div>
    </div>
    );
  };
  
  export default Login;