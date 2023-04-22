import Post2 from "./Post2.jsx"

const Observatory = () => {
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
        <Post2/>
        
        
      </div>
      
    </div>
  )
}

export default Observatory;
