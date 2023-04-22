import React, { useState, useEffect } from 'react';
import './gallery.css';
import IndividualPost from './IndividualPost';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleViewImageDetails = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

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
      <p className='GalleryTitle'>Gallery</p>
      <div className="GalleryImage">
        {images.map((image) => (
          <div key={image.post_id} className='ImageGrid'>
            <img
              className='IG'
              src={`${image.photo}`}
              alt={`Photo ID: ${image.post_id}`}
              onClick={() => handleViewImageDetails(image)}
            />
          </div>
        ))
        }
      </div>
      
      <IndividualPost open={isModalOpen} onClose={() => setIsModalOpen(false)} selectedPost={selectedImage} />
    </div>
  );
};

export default Gallery;
