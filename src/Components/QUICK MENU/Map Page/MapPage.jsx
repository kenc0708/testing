import { useState, useEffect } from 'react';
import './mappage.css';
import Map from '../Section/Map Section/Map';
import SearchBox from '../Section/Map Section/SearchBox';
import IndividualPost from './IndividualPost';
import Button from '@mui/material/Button';

const MapPage = () => {
  const [selectPosition, setSelectPosition] = useState(null);
  const [locations, setLocations] = useState([]);
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleViewMoreDetails = (loc) => {
    setSelectedPost(loc);
    setIsModalOpen(true);
};


  const distance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return d * 1000;
  };

  useEffect(() => {
    const fetchLocations = async () => {
      const token = localStorage.getItem('jwt') || sessionStorage.getItem('jwt');
      const response = await fetch('http://localhost:5000/api/post/locations', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token,
        },
        });
        const data = await response.json();
  setLocations(data.map((item) => ({ ...item, location: [item.location[0], item.location[1]] })));
};

  fetchLocations();
  }, []);

  useEffect(() => {
  if (selectPosition) {
  const distance = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
  Math.sin(dLat / 2) * Math.sin(dLat / 2) +
  Math.cos((lat1 * Math.PI) / 180) *
  Math.cos((lat2 * Math.PI) / 180) *
  Math.sin(dLon / 2) *
  Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d * 1000;
  };
  
setFilteredLocations(
  locations.filter((loc) =>
    distance(
      selectPosition.lat,
      selectPosition.lon,
      loc.location[0],
      loc.location[1],
    ) <= 500
  ),
);
}
}, [selectPosition, locations]);

return (
    <div className="Map">
      <div className="MapContainer">
        <Map
          selectPosition={selectPosition}
          setSelectPosition={setSelectPosition}
          locations={locations}
        />
      </div>
      <div className="RContainer">
        <div className="SearchBoxContainer">
          <SearchBox
            selectPosition={selectPosition}
            setSelectPosition={setSelectPosition}
          />
        </div>
        <div className="FilteredLocationsContainer">
          <p className='NearbyPost'>Nearby Posts</p>
          <hr style={{margin: '10px',opacity: '0.3',}}></hr>
          <div className="Filtered">
            <ul>
                {filteredLocations.map((loc, index) => (
                  <li key={index} style={{ marginBottom: '10px' }}>
                    {loc.username} created a post on {loc.date} ({distance(
                      selectPosition.lat,
                      selectPosition.lon,
                      loc.location[0],
                      loc.location[1],
                    ).toFixed(0)}m){" "}
                    <Button 
                    onClick={() => handleViewMoreDetails(loc)}
                    color="success"
                    variant="outlined"
                    style={{
                      width: '100%',
                      marginTop: 5,
                      padding: 5,
                    }}>
                    
                      View more
                    </Button>

                      <hr style={{margin: '10px',opacity: '0.3',}}></hr>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        
      </div>
      <IndividualPost open={isModalOpen} onClose={() => setIsModalOpen(false)} selectedPost={selectedPost} />
    </div>
  );
};

export default MapPage;
