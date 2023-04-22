import React, { useState } from 'react';
import Button from '@mui/material/Button';

const ImageUploadForm = ({ onSave, onCancel }) => {

  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file type
      if (file.type === 'image/png' || file.type === 'image/jpeg') {
        setSelectedImage(file);
  
        const reader = new FileReader();
        reader.onload = (e) => {
          setPreviewImage(e.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        // Show an error message or handle invalid file type
        console.error('Invalid file type. Please select a PNG or JPEG image.');
      }
    } else {
      setSelectedImage(null);
      setPreviewImage(null);
    }
  };

  const handleSaveClick = async () => {
    if (previewImage) {
      try {
        const response = await fetch('http://localhost:5000/api/users/me/icon', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': `${localStorage.getItem('jwt') || sessionStorage.getItem('jwt')}`,
          },
          body: JSON.stringify({ icon: previewImage }),
        });
        
        if (response.ok) {
          const updatedUserIcon = await response.json();
          onSave(updatedUserIcon.icon);
        } else {
          throw new Error('Failed to update user icon');
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error('No image selected');
    }
  };
  
  

  return (
    <div>
      <form>
        <input 
        type="file" 
        accept=".png, .jpeg, .jpg" 
        onChange={handleImageChange} 
        style={{
          width: '100%',
          marginTop: 50,
          marginBottom: 60,
          marginLeft: 40
          
        }}/>
      </form>
      {previewImage && (
        <img src={previewImage} alt="Preview" style={{ maxWidth: '100%' }} />
        
      )}
    <Button 
    onClick={handleSaveClick}
    color="success"
    variant="outlined"
    style={{
      width: '48%',
      height: '30px',
      marginLeft: 7,
      marginRight: 5,
      marginBottom: 20
    
    }}>
    Save
    </Button>

    <Button 
    onClick={onCancel}
    color="error"
    variant="outlined"
    style={{
      width: '48%',
      height: '30px',
      marginBottom: 20
    }}>
    Cancel
    </Button>
    </div>
  );
};

export default ImageUploadForm;