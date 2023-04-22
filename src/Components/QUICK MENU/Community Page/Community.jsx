import "./Community.css"



//change widget with its type !!!
const Community = () => {
    

  return (
    <div className="community">
      <div className="communityContainer">

        <div className="blocktop">
          <a href="/Forum">
            <span className="text">Forum</span>
          </a>
        </div>

        <div className="blockbottom">
          <div className="blockleft">
            <a href="/Post">
              <span className="text">Post</span>
            </a>
          </div>
        
          <div className="blockright">
            <a href="/Gallery">
              <span className="text">Gallery</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Community