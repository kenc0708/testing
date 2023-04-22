import "./widget.css"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import LocationSearchingOutlinedIcon from '@mui/icons-material/LocationSearchingOutlined';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import NumbersOutlinedIcon from '@mui/icons-material/NumbersOutlined';

const widget = ({type}) => {
    let data;

        

        //changable information for charts widget
        switch(type){
            case "1":
                data={
                    title:"POSTS NUMBER",
                    amount: '10',
                    icon: (
                        <PostAddOutlinedIcon 
                            className="icon" 
                            style={{
                                color: "crimson",
                                backgroundColor: "rgba(255, 0, 0, 0.2)",
                            }}
                        />
                    ),  
                };
                break;

                case "2":
                data={
                    title:"Captured Bird Number",
                    amount: '10',
                    icon: (
                        <NumbersOutlinedIcon
                            className="icon" 
                            style={{
                                color: "goldenrod",
                                backgroundColor: "rgba(218, 165, 32, 0.2)",
                            }}
                        />
                    ),   
                };
                break;

                case "3":
                data={
                    title:"Latest Post Date",
                    amount: '2023/4/18',
                    icon: (
                        <QueryBuilderOutlinedIcon
                            className="icon" 
                            style={{
                                color: "green",
                                backgroundColor: "rgba(0, 128, 0, 0.2)",
                            }}
                        />
                    ),   
                };
                break;

                case "4":
                data={
                    title:"Latest Post Location",
                    amount: '22.31569877649862, 114.17889301062938',
                    icon: (
                        <LocationSearchingOutlinedIcon 
                            className="icon" 
                            style={{
                                width: 24,
                                color: "purple",
                                backgroundColor: "rgba(128, 0, 128, 0.2)",
                            }}
                        />
                    ),  
                };
                break;

                case "Top User":
                data={
                    title:"Top User",
                    isMoney: false,
                    link: "View all orders",
                    icon: (
                        <ShoppingCartOutlinedIcon 
                            className="icon" 
                            style={{
                                color: "goldenrod",
                                backgroundColor: "rgba(218, 165, 32, 0.2)",
                            }}
                        />
                    ),   
                };
                break;
              default:
                break;
        }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>

                <span className="counter">
                    {data.amount}
                </span>

                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                
                {data.icon}
            </div>
        </div>
    )
}

export default widget 