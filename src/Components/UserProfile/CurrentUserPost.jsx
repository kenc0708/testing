import { useState, useEffect } from 'react';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import "./CurrentUserPost.css"
/* 
<h1>Username: {post.username}</h1>
<p>Primary Name: {post.primaryName}</p>
<p>Scientific Name: {post.sci_name}</p>
<p>Location: {post.location.join(', ')}</p>
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
<p>Photo: <img src={post.photo} /></p>
<p>Video: {post.video}</p>
<p>Audio: {post.audio}</p>
<p>Status: {post.status}</p>
*/

const CurrentUserPost = () => {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the updated API endpoint with custom headers
        const response = await fetch('http://localhost:5000/api/post/me', {
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
    <div >
        {postData ? (
            postData.map(post => (
                <div className='View' key={post._id} >
                    <div className='ViewContainer' >
                        <div className='ImageView'>
                            <div className="leftView">
                                <img 
                                    src={post.icon} 
                                    className='Img1'
                                    style={{
                                        width:40, 
                                        height:40, 
                                        borderRadius: '50%'
                                    }}
                                />
                                <div className="TextView">
                                    <p className='TitleViewText'>
                                        {post.username}
                                    </p>
                                    <p className='TitleViewText1'>
                                        <LocationOnOutlinedIcon className='locationIcon' style={{fontSize: 16}}/>
                                        {post.location.join(', ')}
                                    </p>
                                </div>
                            </div>
                            <div className="rightView">
                                <MoreVertOutlinedIcon className='vertical' style={{fontSize: 30, color: 'black'}}/>
                            </div>
                        </div>
                    </div>
                    <div className='PostImageView'>
                        <img
                            src={post.photo}  
                            className='img2'   
                            style={{width: 400, height: 'auto'}}                   
                        />
                    </div>
                    <div className='BottomView'>
                        <div className='TouchableView'> 
                            
                            <div className="NumView">
                                <span>Liked by {post.postDetail.like.length} People</span>
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
                                    <span>Bird Name: {post.primaryName} ({post.sci_name})</span>
                                    

                                    <span>Observation ID: {post.postDetail.observation_id}</span>

                                    <span>Date: {post.postDetail.date}</span>
                                    <span>Start Time: {post.postDetail.startTime}</span>
                                    
                                    <span>Quantity ID: {post.postDetail.quantity_id}</span>
                                    <span>Duration: {post.postDetail.duration}</span>
                                    <span>Distance: {post.postDetail.distance}</span>
                                    <span>Area: {post.postDetail.area}</span>
                                    <span>Party Size: {post.postDetail.partySize}</span>

                                    
                                    <span className='STATUS'>Status: {post.status}</span>
                                </div>
                            </div>
                            
                            
                            
                        </div>
                    </div>
                    <hr size="1" color="grey"  align="center" style={{marginTop: 25, opacity: 0.5}}></hr>
                </div>
            ))
            ) : (
                <div className="PostNull"><p className='PostNullText'> *No Post is created* </p></div>
               
        )}
    </div>
    )
}

export default CurrentUserPost;