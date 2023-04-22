import './posts.css'
import { useState, useEffect } from 'react';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';   
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

//postTitle: 'user 123',
//postUserImage: require('./user.png'),
//postImage: require('./post.png'),
//likes: 76245,
//isLiked: false,
//location: 'Ho Man Tin',
//postUserComment: 'そう 嘘はとびきりの愛だ'

const Post = () => {
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
                                    src={post.photo} 
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
                            <div className="Touchable">
                                <div className="leftView">
                                    <button className='btn1'>
                                        <FavoriteBorderOutlinedIcon 
                                        style={{ 
                                            fontSize: 30, 
                                            }}/>
                                    </button>

                                    <button className='btn1'>
                                        <ChatBubbleOutlineIcon
                                        style={{
                                            fontSize: 30, 
                                            }}/>
                                    </button>
                                    <button className='btn1'>
                                        <ShareOutlinedIcon
                                        style={{
                                            fontSize: 30, 
                                            }}/>
                                    </button>
                                </div>
                                <div className="rightView">
                                    <button className='btn1'>
                                        <BookmarkAddOutlinedIcon
                                        style={{
                                            fontSize: 30, 
                                            marginRight: 10
                                            }}/>
                                    </button>
                                </div>
                            </div>
                            <div className="NumView">
                                <span>Liked by {post.postDetail.like.length} People</span>
                            </div>
                            <div className="CommentView">
                                <div className="userComment">
                                    <span>{post.postDetail.caption}</span>
                                </div>
                                <div className="CommentOption">
                                    View all comments
                                </div>
                                <div className="userComment1">
                                    <span>{post.postDetail.date}</span>
                                </div>
                            </div>
                            
                            <div className="AddCommentView">
                                
                                <p className='TitleViewText2'> Add a comment</p> 
                            </div>
                        </div>
                    </div>
                    <hr size="1" color="grey"  align="center" style={{marginTop: 25, opacity: 0.5}}></hr>
                </div>
            ))
            ) : (
              <p>Loading data...</p>
        )}
    </div>
    )
}

export default Post
