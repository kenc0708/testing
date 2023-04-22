import React from 'react'
import './listing.css'

// imported icons ===========>
import {AiFillHeart} from 'react-icons/ai'
import {BsArrowRightShort} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'

// imported Images ===========>
import img from '../../../Assets/bird1.jpg'
import img1 from '../../../Assets/bird2.jpg'
import img2 from '../../../Assets/bird3.jpg'
import img3 from '../../../Assets/bird4.jpg'
import user1 from '../../../Assets/user (1).png'
import user2 from '../../../Assets/user (2).png'
import user5 from '../../../Assets/user (5).png'
import user4 from '../../../Assets/user (4).png'

const Listing = () => {
  return (
    <div className='lisitingSection'>

      <div className="heading flex">
        <h1>Most Liked</h1>
        <button className='btn flex'>
          See All <BsArrowRightShort className="icon"/>
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon"/>
          <img src={img} alt="Image Name" />
          <h3>Striped Prinia</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon"/>
          <img src={img1} alt="Image Name" />
          <h3>Vinous-throated Parrotbill</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon"/>
          <img src={img2} alt="Image Name" />
          <h3>Golden Parrotbill</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon"/>
          <img src={img3} alt="Image Name" />
          <h3>Green-backed Tit</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top</h3>
            <button className='btn flex'>
              See All <BsArrowRightShort className="icon"/>
             </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user1} alt="User Image" />
              <img src={user2} alt="User Image" />
              <img src={user4} alt="User Image" />
              <img src={user5} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                316 bird observed <br />
                <small>
                  32 bird watcher <span className="date">7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>


        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Followed</h3>
            <button className='btn flex'>
              See All <BsArrowRightShort className="icon"/>
             </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user5} alt="User Image" />
              <img src={user1} alt="User Image" />
              <img src={user4} alt="User Image" />
              <img src={user2} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                136 bird observed <br />
                <small>
                  4 bird watcher <span className="date">2 days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing