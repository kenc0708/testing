import React, { useState, useEffect } from 'react';
import './gallery.css';

const GalleryHome = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/gallery', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched data:', data);
        setImages(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="Gallery">
      
      <div className="GalleryImage">
        {images.map((image) => (
          <div key={image.post_id} className='ImageGrid1'>
            <img
              className='IG'
              src={`${image.photo}`}
              alt={`Photo ID: ${image.post_id}`}
            />
          </div>
        ))
        }
      </div>
      
    </div>
  );
};

export default GalleryHome;