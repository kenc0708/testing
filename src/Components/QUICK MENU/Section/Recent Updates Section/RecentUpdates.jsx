import "./recentupdate.css"
import img1 from "../../../../Assets/bird1.jpg"
import img2 from "../../../../Assets/bird2.jpg"
import img3 from "../../../../Assets/bird3.jpg"

const RecentUpdates = ({type}) => {
    //User Action
    let data;
    
    switch(type){
        case "user1":
            data={
                username:"USERS 1",
                icon:(<img src={img1} alt="User Icon" />),
                time: "2 Minutes Ago",
            };
            break;

            case "user2":
            data={
                username:"USERS 2",
                icon:(<img src={img2} alt="User Icon" />),
                time: "30 Seconds Ago",
            };
            break;

            case "user3":
            data={
                username:"USERS 3",
                icon:(<img src={img3} alt="User Icon" />),
                time: "4 Hours Ago",
            };
            break;
            default:
                break;
        }

  return (
    <div className='Recent'>
      
      <div className="updates">
        
        <div className="update">
            {data.icon}
        </div>

        <div className="message">
            <p><b>{data.username}</b> has posted a new post!</p>
            <small class="text-muted">{data.time}</small>
        </div>

      </div>
    </div>
  )
}

export default RecentUpdates

