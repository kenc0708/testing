import "./bargraph.css"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

//data input here !!!
const data = [
  {
    name: 'User A',
    total: 1432
  },
  {
    name: 'User 2',
    total: 2348
  },
  {
    name: 'User C',
    total: 2159
  },
  ];

const BarGraph = () => {
  return (
    <div className="bargraph">
        <div className="title">Best Record Duration (Top 3)</div>
        <ResponsiveContainer width="100%" aspect={0.7 / 1}>
        <BarChart
          width='auto' 
          height= 'auto' 
          data={data}
        >
            
            <XAxis dataKey="name" />
            <Tooltip />
            <Legend />
            <Bar dataKey="total" fill="lightgreen" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarGraph
