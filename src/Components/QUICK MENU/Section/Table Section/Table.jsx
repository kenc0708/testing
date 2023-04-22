import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import img1 from "../../../../Assets/bird1.jpg"
import img2 from "../../../../Assets/bird2.jpg"
import img3 from "../../../../Assets/bird3.jpg"
import img4 from "../../../../Assets/bird4.jpg"
import img5 from "../../../../Assets/bird5.jpg"
import img6 from "../../../../Assets/bird6.jpg"
import img7 from "../../../../Assets/bird7.jpg"
import img8 from "../../../../Assets/bird8.jpg"

const List = () => {
    //(<img src={img1} alt="User Icon" />)
    //const
    const rows = [
        {
          user_id: "1",
          bird_name: "bird 1",
          img: (<img src={img1} alt="User Icon" />),
          date: "1/2/2023",
          location: "HK",
          record_method: "Walk",
          start_time: "1:00am",
          distance: "100m",
          status: "swimming",
        },
        {
          user_id: "2",
          bird_name: "bird 2",
          img: (<img src={img2}/>),
          date: "2/2/2023",
          location: "HK",
          record_method: "Walk",
          start_time: "2:00am",
          distance: "200m",
          status: "walking",
        },
        {
          user_id: "3",
          bird_name: "bird 3",
          img: (<img src={img3}/>),
          date: "3/2/2023",
          location: "HK",
          record_method: "Walk",
          start_time: "3:00am",
          distance: "300m",
          status: "swimming",
        },
        {
          user_id: "4",
          bird_name: "bird 4",
          img: (<img src={img4}/>),
          date: "4/2/2023",
          location: "HK",
          record_method: "Walk",
          start_time: "4:00am",
          distance: "400m",
          status: "walking",
        },
        {
          user_id: "5",
          bird_name: "bird 5",
          img: (<img src={img5}/>),
          date: "5/2/2023",
          location: "HK",
          record_method: "Walk",
          start_time: "5:00am",
          distance: "500m",
          status: "swimming",
        },
        {
          user_id: "6",
          bird_name: "bird 6",
          img: (<img src={img6}/>),
          date: "6/2/2023",
          location: "HK",
          record_method: "Walk",
          start_time: "6:00am",
          distance: "600m",
          status: "walking",
        },
        {
          user_id: "7",
          bird_name: "bird 7",
          img: (<img src={img7}/>),
          date: "7/2/2023",
          location: "HK",
          record_method: "Walk",
          start_time: "7:00am",
          distance: "700m",
          status: "swimming",
        },
        {
          user_id: "8",
          bird_name: "bird 8",
          img: (<img src={img8}/>),
          date: "8/2/2023",
          location: "HK",
          record_method: "Walk",
          start_time: "8:00am",
          distance: "800m",
          status: "walking",
        },
    ]

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 1050 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">USER_ID</TableCell>
            <TableCell className="tableCell">BIRD_INFO</TableCell>
            <TableCell className="tableCell">DATE</TableCell>
            <TableCell className="tableCell">LOCATION</TableCell>
            <TableCell className="tableCell">RECORD_METHOD</TableCell>
            <TableCell className="tableCell">START_TIME</TableCell>
            <TableCell className="tableCell">DISTANCE</TableCell>
            <TableCell className="tableCell">BIRD_ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.user_id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image"/>
                  {row.bird_name}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.location}</TableCell>
              <TableCell className="tableCell">{row.record_method}</TableCell>
              <TableCell className="tableCell">{row.start_time}</TableCell>
              <TableCell className="tableCell">{row.distance}</TableCell>
              <TableCell className="tableCell">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List
