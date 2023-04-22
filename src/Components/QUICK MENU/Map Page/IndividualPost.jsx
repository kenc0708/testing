import "./IndividualPost.css"
import { useState,useEffect } from 'react';
import {RxCross2} from 'react-icons/rx'

const IndividualPost = ({ open, onClose, selectedPost }) => {
  const [postDetails, setPostDetails] = useState(null);

  useEffect(() => {
    const fetchPostDetails = async () => {
      if (selectedPost) {
        try {
          const response = await fetch(`http://localhost:5000/api/post/id/${selectedPost.post_id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'x-auth-token': `${localStorage.getItem('jwt') || sessionStorage.getItem('jwt')}`,
            },
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          setPostDetails(data);
        } catch (error) {
          console.error('Error fetching post details:', error);
        }
      }
    };

    fetchPostDetails();
  }, [selectedPost]);

  if (!open) return null;

  return (
    <div className="modalContainer1">
      <RxCross2 onClick={onClose} className="closeBtn" />
      {postDetails ? (
        <div className="PostModal">
          <p className="IPT">{postDetails.primaryName} <span className="IPT1">({postDetails.sci_name})</span></p>
          
          <p className="IPT">Username: <span className="IPT1">{postDetails.username}</span></p>
          <p className="IPT">Location: <span className="IPT1">{postDetails.location.join(', ')}</span></p>
          <p className="IPT">Caption: <span className="IPT1">{postDetails.postDetail.caption}</span></p>
          <p className="IPT">Date: <span className="IPT1">{postDetails.postDetail.date}</span></p>
          <p className="IPT">Observation method: <span className="IPT1">{postDetails.postDetail.observation_id}</span></p>
          <p className="IPT">Quantity: <span className="IPT1">{postDetails.postDetail.quantity_id}</span></p>
          <p className="IPT">Duration: <span className="IPT1">{postDetails.postDetail.duration}</span></p>
          <p className="IPT">Distance: <span className="IPT1">{postDetails.postDetail.distance}</span></p>
          <p className="IPT">Party size: <span className="IPT1">{postDetails.postDetail.partySize}</span></p>
          <br></br>
          <img src={postDetails.photo} alt="Post" />
          {/* Add more information as needed */}
        </div>
      ) : (
        <p>Loading post details...</p>
      )}
    </div>
  );
  
};


export default IndividualPost