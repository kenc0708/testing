import "./bargraph.css"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

//data input here !!!
const data = [
  {
    name: 'November',
    total: 0
  },
  {
    name: 'Decemeber',
    total: 0
  },
  {
    name: 'January',
    total: 1
  },
  {
    name: 'February',
    total: 1
  },
  {
    name: 'March',
    total: 2
  },
  {
    name: 'April',
    total: 6
  },
  ];

const BarGraph3 = () => {
  return (
    <div className="bargraph">
        <div className="title">Last Six Months Created Post</div>
        <ResponsiveContainer width="100%" aspect={4 / 2}>
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

export default BarGraph3
