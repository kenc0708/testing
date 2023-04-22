import React, { useEffect, useState } from 'react';

const HKB = () => {
  const [birdsData, setBirdsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/birds/HKBirds');
        const data = await response.json();
        setBirdsData(data);
      } catch (error) {
        console.error('Error fetching birds data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='Gallery1'>
      <h1 className='UserInfoText3' >Birds from HKB</h1>
      <div className="GalleryImage1">
        {birdsData.map((bird, index) => (
          <li key={index}>
            <h2>{bird.birdDetail.PRIMARY_COM_NAME}</h2>
            <p>Scientific Name: {bird.birdDetail.SCI_NAME}</p>
            <img src={bird.photo} alt={`Photo of ${bird.birdDetail.PRIMARY_COM_NAME}`} 
            className='ImageGrid2'/>
          </li>
        ))}
      </div>
    </div>
  );
};

export default HKB;
