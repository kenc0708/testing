import React, { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import pin from '../../../../Assets/placeholder.png';
import SearchIcon from '@mui/icons-material/Search';
//const
//input String for changing the searching requirement !!!

const NOMINATIM_BASE_URL ="https://nominatim.openstreetmap.org/search?";
const params ={
  
  format: 'json',
  addressdetails: 'addressdetails'
}

const SearchBox = (props) => {
  const {selectPosition, setSelectPosition} = props;
  const [searchText, setSearchText] = useState("");
  const [listPlace, setListPlace] = useState([]);

  const getCurrentLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setSelectPosition({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting user location:', error);
        },
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  
  return (
    <div className='SearchBox' 
    style={{ 
      maxHeight: "550px",
      maxWidth: "400px", 
      overflowY: "auto",
      boxShadow: "2px 4px 10px 1px rgba(201, 201, 201, 0.75)", 
      backgroundColor: 'white',
      borderRadius: '15px',
      }}>
      <div className="SearchContainer" >

        
          <OutlinedInput 
            style={{ width:'275px',
                     height: '50px',
                     margin: '10px',
                     
                    }} 
                    
            
            value={searchText} 
            onChange={(event) => {
              setSearchText(event.target.value);
            }}/>
            <Button 
            variant="outlined" 
            color="success"
            style={{ 
                    width:'100px',
                    height: '40px',
                    
                    }}
            onClick={() =>{
              // Search
              const params ={
                q: searchText,
                format: 'json',
                addressdetails: 1,
                polygon_geojson: 0
              };

              const queryString = new URLSearchParams(params).toString();
              const requestOptions ={
                method: "GET",
                redirect: "follow"
              };
              fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
              .then((response) => response.text())
              .then((result) => {
                console.log(JSON.parse(result));
                setListPlace(JSON.parse(result));
              })
              .catch((err) => console.log("err: ",err));
            }}> 
            Search 
          </Button>
          
      </div>

        

      

      <div className="ListSearcher" 
      style={{ 
        maxHeight: "400px",
        maxWidth: "400px", 
        overflowY: "auto", 
        marginRight: "10px", 
        marginLeft: "10px",
        }}>
        <List component="nav" aria-label='main mailbox folders'>
          {
            listPlace.map((item) =>{
              return (
                <div key={item?.place_id}>
                  <ListItem button onClick={() =>{
                    setSelectPosition(item);
                  }}>
                    <ListItemButton>
                      <ListItemIcon>
                        <img src= {pin} alt='Placeholder' style={{ width: 38, height:38}}/>
                      </ListItemIcon>
                      <ListItemText primary={item?.display_name} />
                    </ListItemButton>
                  </ListItem>
                  <Divider/>
                </div>
              );
            })
          }      
        </List>
      </div>
      <hr style={{margin: '10px',opacity: '0.3',}}></hr>
      <div className="CurrentLocationSearcher" 
        style={{
          Width: "100%", 
          overflowY: "auto", 
          padding: '10px', 
        }}>
        <Button
          color="success"
          variant="outlined"
          style={{
            width: '380px',
            marginRight: '10px',
          }}
          onClick={getCurrentLocation}
          startIcon={<SearchIcon />}
        >
          Use Current Location
        </Button>
      </div>
    </div>
  )
}
export default SearchBox