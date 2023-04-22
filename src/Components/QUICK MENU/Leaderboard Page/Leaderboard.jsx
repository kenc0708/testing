import "./Leaderboard.css"

import BarGraph from "../Section/Graph Section/Bar Graph/BarGraph"
import BarGraph1 from "../Section/Graph Section/Bar Graph/BarGraph1"
import BarGraph2 from "../Section/Graph Section/Bar Graph/BarGraph2"
import SimpleBarGraph from "../Section/Graph Section/Simple Bar Graph/SimpleBarGraph"
import JointLineScatterGraph from "../Section/Graph Section/Joint Line Scatter Graph/JointLineScatterGraph"

import Widget2 from "../Section/Widget2 Section/widget2"

//change widget with its type !!!
const Leaderboard = () => {
    

  return (
    <div className="charts">
      <div className="chartsContainer">
        <div className="widgets">
            <Widget2 type="second"/>
            <Widget2 type="first"/>
            <Widget2 type="third"/>
        </div>

        <div className="graphs">
          <BarGraph/>
          <BarGraph1/>
          <BarGraph2/>
        </div>

       
      </div>
    </div>
  )
}

export default Leaderboard