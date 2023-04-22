import "./widget3.css"

import img1 from "../../../../Assets/user (1).png"
import img2 from "../../../../Assets/user (2).png"
import img3 from "../../../../Assets/user (4).png"

const widget3 = ({type}) => {
    let data;
        
        //changable information for charts widget
        switch(type){
            case "Forum":
                data={
                    text: "Forum"
                };
                break;
                case "Gallery":
                data={
                    text: "Gallery"
                };
                break;
                case "Post":
                data={
                    text: "Post"
                };
                break;
                case "Dictionary":
                data={
                    text: "Dictionary"
                };
                break;
                case "Notes":
                data={
                    text: "Notes"
                };
                break;
                
              default:
                break;
        }

    return (
        <div className="widget3">
            <div className="middle">
                <span className="text">{data.text}</span>
            </div>

        </div>
    )
}

export default widget3 