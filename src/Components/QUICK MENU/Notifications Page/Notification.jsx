import "./notification.css"
import List from "../Section/Table Section/Table"
import RecentUpdates from "../Section/Recent Updates Section/RecentUpdates"


const Notifications = () => {
  return (
    <div className="list">
 
      <div className="listContainer2">
        <div className="listTitle2">
          <h1>Notification (Latest Activity)</h1>
          <List/>
        </div> 
      </div>
      
      <div className="listContainer1">
        <div className="listTitle1">
          <h1>Recent Updates</h1>
          <RecentUpdates type="user1"/>
          <RecentUpdates type="user2"/>
          <RecentUpdates type="user3"/>
        </div> 
      </div> 

    </div>
  )
}

export default Notifications