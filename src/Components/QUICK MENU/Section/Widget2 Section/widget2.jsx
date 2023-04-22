import "./widget2.css"

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import PostAddIcon from '@mui/icons-material/PostAdd';

import img1 from "../../../../Assets/user (1).png"
import img2 from "../../../../Assets/user (2).png"
import img3 from "../../../../Assets/user (4).png"

const widget2 = ({type}) => {
    let data;
        //user (1).png
        //changable information for charts widget
        switch(type){
            case "first":
                data={
                    icon: (<img className="LDI" src={img1}/>),
                    userid:"USERS 1",
                    link: "Most Liked User",
                    place: "1245 Likes",
                    i: <FavoriteIcon/>
                };
                break;
                case "second":
                data={
                    icon: (<img className="LDI" src={img2}/>),
                    userid:"USERS 2",
                    link: "Best Record Duration",
                    place: "2348 Mins",
                    i: <DirectionsWalkIcon/>
                };
                break;
                case "third":
                data={
                    icon: (<img className="LDI" src={img3}/>),
                    userid:"USERS 3",
                    link: "Most Post Created",
                    place: "87 Posts",
                    i: <PostAddIcon/>
                };
                break;

                
              default:
                break;
        }

    return (
        <div className="widget2">
            <div className="left">
                <span className="link">{data.link}</span>

                <div className="counter">
                    <div className="userWInfo">
                    {data.icon}
                    <span className="userid">{data.userid}</span>
                    </div>
                    {data.i} {data.place}
                </div>
            </div>
            
            <div className="right">
                <div className="percentage positive">
                    <AutoAwesomeIcon/>
                    
                    
                </div>  
            </div>
        </div>
    )
}

export default widget2 