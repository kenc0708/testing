import "./bargraph.css"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

//data input here !!!
const data = [
  {
    name: 'User A',
    total: 1087
  },
  {
    name: 'User 1',
    total: 1245
  },
  {
    name: 'User C',
    total: 962
  },
  ];

const BarGraph1 = () => {
  return (
    <div className="bargraph">
        <div className="title">Most Liked User (Top 3)</div>
        <ResponsiveContainer width="100%" aspect={0.7 / 1}>
        <BarChart
          width='auto' 
          height= 'auto' 
          data={data}
        >
            
            <XAxis dataKey="name" />
            <Tooltip />
            <Legend />
            <Bar dataKey="total" fill="orangered" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarGraph1
