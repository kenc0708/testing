import VerifyPost from './VerifyPost.jsx'

const VerifyPostPage = () => {
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
        <VerifyPost/>
        
        
      </div>
      
    </div>
  )
}

export default VerifyPostPage
