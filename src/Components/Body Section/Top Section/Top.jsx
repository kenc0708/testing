import React, { useState, useEffect } from 'react';
import './top.css';

// Imported Icons ===========>
import {BsArrowRightShort} from 'react-icons/bs';

// Imported Image =========>
import img2 from '../../../Assets/bird.png';
import video from '../../../Assets/video.mp4';

const Top = () => {
  const [authenticated, setAuthenticated] = useState(false);

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

  return (
    <div className='topSection'>
      <div className="cardSection flex">
        {authenticated && (
          <div className="leftCard flex">
            <div className="main flex">
              <div className="textDiv">
                <h1>My Stat</h1>
                <div className="flex">
                  <span>
                    Today <br /> <small>3 birds</small>
                  </span>
                  <span>
                    This Month <br /> <small>53 birds</small>
                  </span>
                </div>
                <span className="flex link">
                  Details <BsArrowRightShort className="icon"/>
                </span>
              </div>
              <div className="imgDiv">
                <img src={img2} alt="Image Name" />
              </div>
            </div>
          </div>
        )}

        <div className="rightCard flex">
          <h1>Discover a new world of birding...</h1>
          <p>Find more birds, Share your sightings, Track your lists!</p>
          <div className="buttons flex">
            <button className='btn'>Explore More</button>
            <button className='btn transparent'>Top Birdwatchers</button>
          </div>
          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Top;