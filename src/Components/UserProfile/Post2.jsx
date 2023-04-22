import { useState, useEffect } from 'react';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import IndividualPost from '../QUICK MENU/Community Page/Post Page/IndividualPost';


const Post2 = () => {
    const [postData, setPostData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);
    const [userId, setUserId] = useState(null);
    const [postId, setPostId] = useState(null);



    const handleViewMoreDetails = (post) => {
        setSelectedPost(post);
        setIsModalOpen(true);
    };

    const handleLike = async (post) => {
        if (post.postDetail.like.includes(userId)) {
            return;
        }

        try {
            const response = await fetch(`http://localhost:5000/api/post/like`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': `${localStorage.getItem('jwt') || sessionStorage.getItem('jwt')}`,
                },
                body: JSON.stringify({ post_id: post.postDetail.post_id }),
            });
            console.log(post.postDetail.post_id);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }


            const updatedPost = await response.json();

            if (post.postDetail.like.includes(userId)) {
                updatedPost.postDetail.like = updatedPost.postDetail.like.filter((id) => id !== userId);
            } else {
                updatedPost.postDetail.like.push(userId);
            }

            setPostData((prevPosts) =>
                prevPosts.map((p) => (p._id === updatedPost._id ? updatedPost : p))
            );


        } catch (error) {
            console.error('Error updating like status:', error);
        }
    };



    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch data from the updated API endpoint with custom headers
                const response = await fetch('http://localhost:5000/api/post', {
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
        const fetchUserId = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/token', {
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
                setUserId(data.user_id);
            } catch (error) {
                console.error('Error fetching user ID:', error);
            }
        };
        fetchData();
        fetchUserId();
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
                                            width: 40,
                                            height: 40,
                                            borderRadius: '50%'
                                        }}
                                    />
                                    <div className="TextView">
                                        <p className='TitleViewText'>
                                            {post.username}
                                        </p>
                                        <p className='TitleViewText1'>
                                            <LocationOnOutlinedIcon className='locationIcon' style={{ fontSize: 16 }} />
                                            {post.location.join(', ')}
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
                                src={post.photo}
                                className='img2'
                                style={{ width: 400, height: 'auto' }}
                            />
                        </div>
                        <div className='BottomView'>
                            <div className='TouchableView'>
                                <div className="Touchable">
                                    <div className="leftView">
                                        <button
                                            className='btn1'
                                            onClick={() => handleLike(post)}
                                        >
                                            {post.postDetail.like.includes(userId) ? (
                                                <FavoriteBorderOutlinedIcon style={{ color: "red", fontSize: 30 }} />
                                            ) : (
                                                <FavoriteBorderOutlinedIcon style={{ fontSize: 30 }} />
                                            )}

                                        </button>


                                        <button className='btn1'>
                                            <ChatBubbleOutlineIcon
                                                style={{
                                                    fontSize: 30,
                                                }} />
                                        </button>
                                        <button className='btn1'>
                                            <ShareOutlinedIcon
                                                style={{
                                                    fontSize: 30,
                                                }} />
                                        </button>
                                    </div>
                                    <div className="rightView">
                                        <button className='btn1'>
                                            <BookmarkAddOutlinedIcon
                                                style={{
                                                    fontSize: 30,
                                                    marginRight: 10
                                                }} />
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
                                    <div className="CommentOption" onClick={() => handleViewMoreDetails(post)}>
                                        View more details
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
                        <hr size="1" color="grey" align="center" style={{ marginTop: 25, opacity: 0.5 }}></hr>
                    </div>
                ))
            ) : (
                <p>Loading data...</p>
            )}
            <IndividualPost open={isModalOpen} onClose={() => setIsModalOpen(false)} selectedPost={selectedPost} />
        </div>

    );


}

export default Post2;