import './post.css'
import Post from "./screenComponents/posts"

const Screen = () => {
  return (
    <div className="View" 
      style={{
        width: '87%',
        display: 'flex',
        justifyContent: 'center'
      }}>
      
      <div className="PostsView" 
      style={{
        maxWidth: '420px', 
        backgroundColor: 'white', 
      }}>
        <Post/>
        
        
      </div>
      
    </div>
  )
}

export default Screen
