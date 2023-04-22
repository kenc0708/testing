import React, { useState, useEffect } from 'react';
import './sidebar.css'

// Imported Images ==========>
import logo from '../../../Assets/user.png'

// imported Icons ===========>
import {BiHome} from 'react-icons/bi'
import {MdOutlineLeaderboard} from 'react-icons/md'
import {BiMap} from 'react-icons/bi'
import {MdNotificationsNone} from 'react-icons/md'
import {AiOutlinePieChart} from 'react-icons/ai'
import {MdOutlineForum} from 'react-icons/md'
import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlinePicture} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {IoMdSettings} from 'react-icons/io'
import {BsQuestionCircle} from 'react-icons/bs'

import { useContext } from 'react';
import { AuthContext } from '../../../AuthContext';
import Button from '@mui/material/Button';
const Sidebar = () => {
  const { authenticated, setAuthenticated } = useContext(AuthContext);
  const [userId, setUserId] = useState('');
  const [userRole, setUserRole] = useState('');
  const [userIcon, setUserIcon] = useState('');
  const hasToken = sessionStorage.getItem("jwt") || localStorage.getItem("jwt");

  useEffect(() => {
    const jwt = localStorage.getItem('jwt') || sessionStorage.getItem('jwt');
    
    if (jwt) {
      fetch('http://localhost:5000/api/token', {
        method: 'GET',
        headers: {
          'x-auth-token': jwt,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.username && data.role_id && data.icon) {
            setAuthenticated(true);
            setUserId(data.username);
            if(data.role_id === 1){
              setUserRole('Admin');
            } else if(data.role_id === 2){
              setUserRole('Moderator');
            } else if(data.role_id === 3){
              setUserRole('User');
            } else {setUserRole('Researcher');}
            setUserIcon(data.icon);
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
  }, [authenticated]);

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    sessionStorage.removeItem('jwt');
    setAuthenticated(false);
    // reload page
    window.location.reload();
  };

  return (
    <div className='sideBar grid'>


      {authenticated ? (
        <>
          <div className="logoDiv flex">
            <a href='/UserProfile'>
            <img src={userIcon} alt="Image Name" style={{ borderRadius: '15%' }} /></a>
            <div className="UserInfo">
              <h2>{userId}</h2>
              <p>{userRole}</p>
            </div>
            <div className="UserInfo">
              <Button
                color="success"
                variant="outlined"
                style={{
                  width: '100px',
                }} 
                onClick={handleLogout}>
                Log out
              </Button>
            </div>
            </div>
        </>
      ) : (
        <a href=""></a>
      )}
      

      <div className="menuDiv">
        <h3 className="divTitle">
          QUICK MENU
        </h3>
        <hr className='hr' style={{margin:'20px', opacity: '0.5'}}></hr>
        <ul className="menuLists grid">

          <li className="listItem">
            <a href="/" className='menuLink flex'>
                <BiHome className="icon" style={{fontSize: '24px'}}/>
                <span className="smallText">
                  Home
                </span>
            </a>
          </li>

          <li className="listItem">
            <a href="/Tools" className='menuLink flex'>
                <AiOutlineSearch className="icon" style={{fontSize: '24px'}}/>
                <span className="smallText">
                  Searching
                </span>
            </a>
          </li>

          <li className="listItem">
            <a href={hasToken ? "/leaderboard" : "/Error"} className='menuLink flex'>
                <MdOutlineLeaderboard className="icon" style={{fontSize: '24px'}}/>
                <span className="smallText">
                  Leaderboard
                </span>
            </a>
          </li>
          
          <li className="listItem">
            <a href={hasToken ? "/map" : "/Error"} className='menuLink flex'>
                <BiMap className="icon" style={{fontSize: '24px'}}/>
                <span className="smallText">
                  Map
                </span>
            </a>
          </li>

          

          <li className="listItem">
            <a href={hasToken ? "/Charts" : "/Error"} className='menuLink flex'>
                <AiOutlinePieChart className="icon" style={{fontSize: '24px'}}/>
                <span className="smallText">
                  Charts
                </span>
            </a>
          </li>

          <li className="listItem">
            <a href={hasToken ? "/Forum" : "/Error"} className='menuLink flex'>
                <MdOutlineForum className="icon" style={{fontSize: '24px'}}/>
                <span className="smallText">
                  Forum
                </span>
            </a>
          </li>

          

          <li className="listItem">
            <a href={hasToken ? "/Observatory" : "/Error"} className='menuLink flex'>
                <AiOutlineInstagram className="icon" style={{fontSize: '24px'}}/>
                <span className="smallText">
                  Post
                </span>
            </a>
          </li>

          <li className="listItem">
            <a href={hasToken ? "/Gallery" : "/Error"} className='menuLink flex'>
                <AiOutlinePicture className="icon" style={{fontSize: '24px'}}/>
                <span className="smallText">
                  Gallery
                </span>
            </a>
          </li>
          
          

        </ul>
      </div>

      
    </div>
  )
}

export default Sidebar