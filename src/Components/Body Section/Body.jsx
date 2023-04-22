import React, { useState, useEffect } from 'react';
import './body.css';
import Top from './Top Section/Top';
import Listing from './Listing Section/Listing';
import Activity from './Activity Section/Activity';
import TNB from '../../Components/TNB/TNB';
import Sidebar from '../QUICK MENU/SideBar Section/Sidebar';
import Button from '@mui/material/Button';
import GalleryHome from '../QUICK MENU/Community Page/Gallery Page/GalleryHome'
import SearchBar from '../TNB/SearchBar/SearchBar';
import SearchResultsList from '../TNB/SearchBar/SearchResultsList';
import { useNavigate } from 'react-router-dom';

const Body = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [results, setResults] = useState([]);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleShowCommonBirds = () => {
    navigate('/hkb'); // Redirect to '/hkb' when the button is clicked
  };

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
    <div className='mainContent'>
      <TNB />
      <Top />
      <div className='bottom flex'>
        {authenticated && <Listing />}
        {authenticated && <Activity />}
      </div>
      <div className="B2">
        <div className="LB">
          <span className='DescDiv3'>FEATURES</span>
            <div className="DescDiv">
              <div className="DescDiv1">
                <p className='DescText'>Find more birds</p>
                <br></br>
                <hr></hr>
                <br></br>
                <span className='DescText1'>Explore birds and hotspots near you and wherever you go,
                all based on the latest sightings from around Hong Kong.</span>
              </div>

              <div className="DescDiv2">
                <p className='DescText'>Share your sightings</p>
                <br></br>
                <hr></hr>
                <br></br>
                
                <span className='DescText1'>Join Hong Kong's largest birding community.
                Every sighting matters. Contribute yours.</span>
              </div>
            </div>

          <span className='DescDiv3'>TO GET STARTED</span>
            <div className="DescDiv4">
              <div className="leftDesc">
                <p className='DescText2'>Discover a new world of birding...</p>
                <Button 
                color="success"
                variant="outlined"
                style={{
                width: 150,
                marginTop: 15,
                padding: 10,
                marginBottom: 5,
                backgroundColor: 'white'
                }} 
                >
                Get started
                </Button>

                
              </div>
              <div className="rightDesc">
                <p className='DescText2'>Advancing science and conservation</p>
                <br></br>
                <span className='DescText4'>Your sightings contribute to hundreds of conservation decisions and peer-reviewed papers
                  , thousands of student projects, and help inform bird research worldwide.</span>
              </div>
            </div>  
        </div>

        <div className="RB">
          <span className='DescDiv6'>GALLERY</span>
          <GalleryHome/>
        </div>

        <div className="RB2">
          <p className='DescDiv7'>SEARCHING</p>

          <div className="SearchDesc">
            <SearchBar setResults={setResults} />

            {results && results.length > 0 &&           
            <SearchResultsList results={results} />}
            <br></br>
            <span className='DescText0'> Enter Bird Name or Bird Scientific Name For More Details ...</span>
          </div>
          <Button 
          color="success" 
          variant="outlined" 
          onClick={handleShowCommonBirds}
          style={{
            width: '100%',
            height: '30px',
            marginTop: 15,
            padding: 5,
          }}>Show Common Birds in Your Country</Button>
        </div>
      </div>
    </div>
  );
};

export default Body;