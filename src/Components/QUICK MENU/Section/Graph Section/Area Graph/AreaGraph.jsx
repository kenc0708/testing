import "./areagraph.css"
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

//data input here !!!
const data = [
    { name: "January", Total: 2},
    { name: "February", Total: 1},
    { name: "March", Total: 3},
    { name: "April", Total: 2},
  ];

const AreaGraph = () => {
  return (
    <div className="areagraph">
        <div className="title">Last Four Months Created Post</div>
        <ResponsiveContainer width="100%" aspect={1.5 / 1}>
        <AreaChart 
            width={window.innerWidth > 768 ? 2000 : window.innerWidth} 
            height={window.innerWidth > 768 ? 1000 : 500} 
            data={data}
            margin={{ 
                top: window.innerWidth > 768 ? 10 : 5, 
                right: window.innerWidth > 768 ? 30 : 10, 
                left: window.innerWidth > 768 ? 0 : 10, 
                bottom: window.innerWidth > 768 ? 0 : 20 
            }}
        >
            <defs>
                <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <XAxis 
                dataKey="name" 
                stroke="black"
            />
            <CartesianGrid strokeDasharray="3 3" className="graphGrid"/>
            <Tooltip />
            <Area 
                type="monotone" 
                dataKey="Total" 
                stroke="#8884d8" 
                fillOpacity={1} 
                fill="url(#total)" 
            />
        </AreaChart>
    </ResponsiveContainer>
    </div>
  )
}

export default AreaGraph
