import "./bargraph.css"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

//data input here !!!
const data = [
  {
    name: 'User A',
    total: 32
  },
  {
    name: 'User 3',
    total: 87
  },
  {
    name: 'User C',
    total: 50
  },
  ];

const BarGraph2 = () => {
  return (
    <div className="bargraph">
        <div className="title">Most Post Created (Top 3)</div>
        <ResponsiveContainer width="100%" aspect={0.7 / 1}>
        <BarChart
          width='auto' 
          height= 'auto' 
          data={data}
        >
            
            <XAxis dataKey="name" />
            <Tooltip />
            <Legend />
            <Bar dataKey="total" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarGraph2
