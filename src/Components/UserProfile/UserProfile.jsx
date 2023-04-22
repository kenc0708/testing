import React, { useState, useEffect } from 'react';
import "./UserProfile.css"
import ImageUploadForm from './ImageUploadForm';
import { useNavigate } from 'react-router-dom';
import CurrentUserPost from "./CurrentUserPost";
import Button from '@mui/material/Button';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedIntro, setUpdatedIntro] = useState('');
  const [editMode, setEditMode] = useState(false);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/ChangePW'); 
  }

  const handleButton2Click = () => {
    navigate('/VerifyPost'); 
  }


  useEffect(() => {
    // Fetch user information from backend using the API endpoint
    const fetchUserProfile = async () => {
      try {
        
        const response = await fetch('http://localhost:5000/api/users/user/me', {
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': `${localStorage.getItem('jwt') || sessionStorage.getItem('jwt')}` 
          }
        });
        if (response.ok) {
          const user = await response.json();
          setUser(user); // Set retrieved user information to state
        } else {
          throw new Error('Failed to fetch user profile');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleSaveIntro = async () => {
    try {
      // Make API call to update intro
      const response = await fetch('http://localhost:5000/api/users/me/intro', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': `${localStorage.getItem('jwt') ||
            sessionStorage.getItem('jwt')}`,
        },
        body: JSON.stringify({ intro: updatedIntro }),
      });
  
      if (response.ok) {
        // Update user object in state with updated intro
        const updatedUser = { ...user, intro: updatedIntro };
        setUser(updatedUser);
        setIsEditing(false); // Exit editing mode
      } else {
        throw new Error('Failed to update user intro');
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleCancelEdit = () => {
    setIsEditing(false); // Exit editing mode
    setUpdatedIntro(''); // Reset updated intro value
  };
  
  const handleEditClick = () => {
    setEditMode(true);
  };

  // Function to handle cancel button click
  const handleCancelClick = () => {
    setEditMode(false);
  };

  const handleSaveIcon = (updatedIcon) => {
    const updatedUser = { ...user, icon: updatedIcon };
    setUser(updatedUser);
    setEditMode(false);
  };
  
  const handleCancelIcon = () => {
    setEditMode(false);
  };


  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Profile">
      <div className="leftProfile" >
        <div className="user-profile1">
          <p className='UserInfoText'>
            User Name : 
            <span className='UserInfoText1'> {user.username}</span>
          </p>
          <p className='UserInfoText'>
            User ID : 
            <span className='UserInfoText1'> {user.user_id}</span>
          </p>
          <p className='UserInfoText'>
            Role ID : 
            <span className='UserInfoText1'> {user.role_id} </span>
          </p>
          
          
          {isEditing ? (
          <input
            type="text"
            value={updatedIntro}
            onChange={(e) => setUpdatedIntro(e.target.value)}
            style={{
              width: '100%',
              height: '100%',
              margin: 5,
              
            }}
          />
          ) : (
            <p className='UserInfoText'>
              Description: 
              <span className='UserInfoText1'> {user.intro} </span>
            </p>
          )}
          {isEditing ? null : (
            <Button 
            onClick={() => setIsEditing(true)} 
            color="success"
            variant="outlined"
            style={{
            width: '100%',
            marginTop: 5,
            padding: 5,
            marginBottom: 5,
            }}>
            Edit Description
            </Button>
          )}
          {isEditing && (
            <>
              <Button 
              onClick={handleSaveIntro}
              color="success"
              variant="outlined"
              style={{
              width: '48%',
              height: '30px',
              marginLeft: 7,
              marginRight: 5,
              marginTop: 5,
              marginBottom: 5,
              padding: 5,
              }}>
              Save
              </Button>

              <Button 
              onClick={() => handleCancelEdit()}
              color="error"
              variant="outlined"
              style={{
              width: '48%',
              height: '30px',
              marginTop: 5,
              marginBottom: 5,
              padding: 5,
              }}>
              Cancel
              </Button>
            </>
          )}
          </div>
             
        <div className="user-profile2">
          {user && (
          <div>
              
              {!editMode && (
              // Show edit icon button if not in edit mode
              <div className='UserIconUpdate'>
                <img 
                src={user.icon} 
                alt="User Icon"
                className='UserIconShow'
                />
                <Button 
                onClick={handleEditClick}
                color="success"
                variant="outlined"
                style={{
                  width: '100%',
                  marginTop: 5,
                  padding: 5,
                }}>
                Upload Icon
                </Button>
              </div>
              )}
              {editMode && (
              // Show "choose file" button and "save/cancel" buttons in edit mode
              <div>
                <ImageUploadForm onSave={handleSaveIcon} onCancel={handleCancelIcon}/>
              </div>
              )}
          </div>
          )}
          </div>

        <div className="user-profile3">
          <Button 
          onClick={handleButtonClick}
          color="success"
          variant="outlined"
          style={{
            width: '100%',
            marginTop: 5,
                  padding: 5,
          }}>
          Change Password
          </Button>

          <Button 
          onClick={handleButton2Click}
          color="success"
          variant="outlined"
          style={{
            width: '100%',
            marginTop: 5,
            padding: 5,
          }}>
          Verify Post
          </Button>
        </div>
      </div>

      <div className="rightProfile">
        
          <br></br>
          <span className='UserInfoText2'>POST (PENDING) : [LATEST]</span>
          <hr style={{margin:'20px', opacity: '0.5'}}></hr>
        
        
          <CurrentUserPost/>
        
      </div>
   </div>
  
  );
};

export default UserProfile;