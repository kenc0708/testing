import "./charts.css"
import Widget from "../Section/Widget Section/widget"
import Featured from "../Section/Featured Section/Featured"
import BarGraph3 from "../Section/Graph Section/Bar Graph/BarGraph3"

//change widget with its type !!!
const Charts = () => {
    

  return (
    <div className="charts">
      <div className="chartsContainer">
        <div className="widgets">
            <Widget type="1"/>
            <Widget type="2"/>
            <Widget type="3"/>
            <Widget type="4"/>
        </div>

        <div className="graphs">
          
          <BarGraph3/>
        </div>
        
      </div>
    </div>
  )
}

export default Charts