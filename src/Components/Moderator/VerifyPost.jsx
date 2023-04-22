import { useState, useEffect } from 'react';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Button from '@mui/material/Button';

/*
<p>Scientific Name: {post.sci_name}</p>
            <p>Post Detail:</p>
            <ul>
              <li>Like: {post.postDetail.like.join(', ')}</li>
              <li>Caption: {post.postDetail.caption}</li>
              <li>Date: {post.postDetail.date}</li>
              <li>Start Time: {post.postDetail.startTime}</li>
              <li>Observation ID: {post.postDetail.observation_id}</li>
              <li>Quantity ID: {post.postDetail.quantity_id}</li>
              <li>Duration: {post.postDetail.duration}</li>
              <li>Distance: {post.postDetail.distance}</li>
              <li>Area: {post.postDetail.area}</li>
              <li>Party Size: {post.postDetail.partySize}</li>
            </ul>
            <p>Photo: <img className="post-photo" src={post.postPhoto} alt="Post Photo" /></p>
*/

// ...
const handleApprove = async (postId) => {
  try {
    const response = await fetch('http://localhost:5000/api/moderator/approve', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': `${localStorage.getItem('jwt') || sessionStorage.getItem('jwt')}`,
      },
      body: JSON.stringify({ post_id: postId }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Refresh the current page
    window.location.reload();
  } catch (error) {
    console.error('Error approving post:', error);
  }
};

const handleReject = async (postId) => {
  try {
    console.log(JSON.stringify({ post_id: postId }))
    const response = await fetch('http://localhost:5000/api/moderator/reject', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': `${localStorage.getItem('jwt') || sessionStorage.getItem('jwt')}`,
      },
      body: JSON.stringify({ post_id: postId }),
      
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Refresh the current page
    window.location.reload();
  } catch (error) {
    console.error('Error rejecting post:', error);
  }
};


const VerifyPost = () => {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the updated API endpoint with custom headers
        const response = await fetch('http://localhost:5000/api/moderator/pending', {
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
        // Set the retrieved data to the state
        setPostData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {postData ? (
        postData.map(post => (

          <div className='View' key={post._id} >
            <div className='ViewContainer' >
              <div className='ImageView'>
                <div className="leftView">

                  <div className="TextView">
                    <p className='TitleViewText'>
                      {post.sci_name}
                    </p>

                  </div>
                </div>
                <div className="rightView">
                  <MoreVertOutlinedIcon className='vertical' style={{ fontSize: 30, color: 'black' }} />
                </div>
              </div>
            </div>
            <div className='PostImageView'>
              <img
                src={post.postPhoto}
                className='img2'
                style={{ width: 400, height: 400, }}
              />
            </div>
            <div className='BottomView'>
              <div className='TouchableView'>

                <div className="NumView">
                  <span>Liked by {post.postDetail.like.join(', ')} People</span>
                </div>

                <div className="CommentView">
                  <div className="userComment">
                    <span>{post.postDetail.caption}</span>
                  </div>

                  <div className="CommentOption">
                    <span>Click to Show More Details</span>
                  </div>
                  <br></br>
                  <div className="birdDetailComment">
                    <span>Bird Name: {post.sci_name}</span>


                    <span>Observation ID: {post.postDetail.observation_id}</span>

                    <span>Date: {post.postDetail.date}</span>
                    <span>Start Time: {post.postDetail.startTime}</span>

                    <span>Quantity ID: {post.postDetail.quantity_id}</span>
                    <span>Duration: {post.postDetail.duration}</span>
                    <span>Distance: {post.postDetail.distance}</span>
                    <span>Area: {post.postDetail.area}</span>
                    <span>Party Size: {post.postDetail.partySize}</span>



                  </div>
                </div>



              </div>
              <div className='ApproveRejectButtons'>
                <Button 
                onClick={() => handleApprove(post.post_id)}
                color="success"
                variant="outlined"
                style={{
                  width: '100px',
                  marginTop: 10,
                  padding: 5,
                }}>
                  Approve
                </Button>

                <Button 
                onClick={() => {
                console.log('Post ID:', post._id); // Add this line to log the Post ID
                handleReject(post.post_id);
                }}
                color="error"
                variant="outlined"
                style={{
                  width: '100px',
                  marginTop: 10,
                  marginLeft: 15,
                  padding: 5,
                }}>
                  Reject
                </Button>

              </div>
            </div>
            <hr size="1" color="grey" align="center" style={{ marginTop: 25, opacity: 0.5 }}></hr>
          </div>

        ))
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default VerifyPost;