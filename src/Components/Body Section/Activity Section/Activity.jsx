import React from 'react'
import './activity.css'

// Imported Icons =========>
import {BsArrowRightShort} from 'react-icons/bs'

// Imported Images =========>
import user1 from '../../../Assets/user (1).png'
import user2 from '../../../Assets/user (2).png'
import user3 from '../../../Assets/user (3).png'
import user4 from '../../../Assets/user (4).png'
import user5 from '../../../Assets/user (5).png'

const Activity = () => {
  return (
    <div className='activitySection'>
       <div className="heading flex">
        <h1>Recent Activity</h1>
        <button className='btn flex'>
          See All
          <BsArrowRightShort className="icon"/>
        </button>
       </div>

       <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user1} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Ken</span>
            <small>Observed eurasian tree sparrow</small>
          </div>
          <div className="duration">
            14 hours ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user2} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Kenny</span>
            <small>Observed fork-tailed sunbird</small>
          </div>
          <div className="duration">
            6 hours ago
          </div>
        </div>

        

        <div className="singleCustomer flex">
          <img src={user4} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Peter</span>
            <small>Observed little egret</small>
          </div>
          <div className="duration">
            2 hours ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user5} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Michael</span>
            <small>Observed oriental magpie-robin</small>
          </div>
          <div className="duration">
            2 days ago
          </div>
        </div>
       </div>

        
    </div>
  )
}

export default Activity