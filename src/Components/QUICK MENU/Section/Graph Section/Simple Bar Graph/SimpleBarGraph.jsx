import "./simplebargraph.css"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

//data input here !!!
const data = [
    {
        name: 'User A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: 'User B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'User C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: 'User D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: 'User E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: 'User F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: 'User G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },

  ];

const SimpleBarGraph = () => {
  return (
    <div className="simplebargraph">
        <div className="title">Last Year (Post)</div>
        <ResponsiveContainer width="100%" aspect={0.7 / 1}>
        <BarChart
          width='auto'
          height='auto'
          data={data}
          
        >
          
          <XAxis dataKey="name" />
          
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SimpleBarGraph
