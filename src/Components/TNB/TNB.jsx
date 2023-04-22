import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TNB.css';
import Button from '@mui/material/Button';

import icon from '../../Assets/3418582.png'

const TNB = () => {
  
  const [authenticated, setAuthenticated] = useState(false);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const jwt = localStorage.getItem('jwt') || sessionStorage.getItem('jwt');
    if (jwt) {
      // page reload
      fetch('http://localhost:5000/api/token', {
        method: 'GET',
        headers: {
          "x-auth-token": jwt,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.user_id && data.role_id) {
            setAuthenticated(true);
            setUserId(data.username);
          } else {
            setAuthenticated(false);
          }
        })
        .catch((error) => {
          setAuthenticated(false);
        });
    } else {
      setAuthenticated(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    sessionStorage.removeItem('jwt');
    setAuthenticated(false);
    // reload page
    window.location.reload();
  };

  return (
    <div className="headerSection flex">
      
      <div className="title">
        {authenticated ? (
          <div style={{display: 'flex',}}>
            <img src={icon} style={{width: 50, height: 50,}}/>
            <div>
            <h1>Welcome to BBird.</h1>
            <p>Hello {userId}, Welcome back!</p>
            </div>
          </div>
        ) : (
          <>
            <img src={icon} style={{width: 50, height: 50}}/>
            <h1>Login to explore more features!!</h1>
          </>
        )}
      </div>
  
      
  
      <div className="adminDiv flex">
        {authenticated ? (
          <div className='LogOutBtn'>
            <Button
            color="success"
            variant="outlined"
            style={{
              width: '95px',
            }}
            onClick={handleLogout}>Log out</Button>
          </div>
        ) : (
          <Link to="/Login">
      <Button
        color="success"
        variant="outlined"
        style={{
          marginLeft: '20px',
          width: '120px',
        }} 
      >
        Log in
      </Button>
    </Link>
        )}
      </div>
    </div>
  );
};

export default TNB;