import React from 'react'
import './App.css'


//for switching page !!! (react router dom)
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Charts from "./Components/QUICK MENU/Charts Page/Charts"
import Notification from "./Components/QUICK MENU/Notifications Page/Notification"
import Login from './Components/QUICK MENU/Section/Login Section/Login'
import Register from './Components/QUICK MENU/Section/Login Section/Register'

import Leaderboard from "./Components/QUICK MENU/Leaderboard Page/Leaderboard"
import Map from "./Components/QUICK MENU/Map Page/MapPage"

import Community from "./Components/QUICK MENU/Community Page/Community"
  import Forum from "./Components/QUICK MENU/Community Page/Forum Page/Forum"
  import Gallery from "./Components/QUICK MENU/Community Page/Gallery Page/Gallery"
  import Post from "./Components/QUICK MENU/Community Page/Post Page/Post"
  import Observatory from "./Components/UserProfile/Observatory"
  import HKB from './Components/HKBirds/HKB';
import Tools from "./Components/QUICK MENU/Tools Page/Tools"
  


  import SearchDetails from "./Components/TNB/SearchBar/SearchDetails"
  import SearchResult from './Components/TNB/SearchBar/SearchResult';

//sidebar
import Sidebar from './Components/QUICK MENU/SideBar Section/Sidebar'
import Body from './Components/Body Section/Body'



//floating_button
import {FloatButton} from 'antd'
import {PlusOutlined, EditOutlined, EnvironmentOutlined} from '@ant-design/icons'

//popup (modal)
import Modal from './Components/QUICK MENU/Section/Modal Section/Modal'
import {useState} from 'react'

//popup (form)
import zIndex from '@mui/material/styles/zIndex';

import { AuthProvider } from './AuthContext';

import UserProfile from './Components/UserProfile/UserProfile';
import ImageUploadForm from './Components/UserProfile/ImageUploadForm';
import ChangePW from './Components/UserProfile/ChangePW';
import VerifyPostPage from './Components/Moderator/VerifyPostPage';

import Error from './Components/QUICK MENU/Error Page/Error';

const App = () => {
  //popup default state
  const [openModal, setOpenModal] = useState(false);

  return (
    <AuthProvider>
    <div className='container'>
      
      <Sidebar/>
      
      <FloatButton.Group
        icon={<PlusOutlined/> } 
        style={{
          right:40, 
          fontSize:'32px',
          zIndex:"1"
        }}
        shape="circle"
        trigger="hover"
      >
        <FloatButton
          icon={<EditOutlined/>}
          style={{fontSize:'32px'}}
          shape="circle"
          tooltip="Add Report"
          onClick={()=>setOpenModal(true)}
        />
                
        
        
      </FloatButton.Group >

      
      <Modal open={openModal} onClose={()=>setOpenModal(false)}/>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/Body" element={<Body />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>

          <Route path="/leaderboard" element={<Leaderboard />}></Route>
          <Route path="/map" element={<Map />}></Route>
          <Route path="/notifications" element={<Notification />}></Route>
          <Route path="/charts" element={<Charts />}></Route>

          <Route path="/community" element={<Community />}></Route>
            <Route path="/forum" element={<Forum />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
            <Route path="/post" element={<Post />}></Route>
            <Route path="/Observatory" element={<Observatory />}></Route>

          <Route path="/tools" element={<Tools />}></Route>
            
          <Route path="/HKB" element={<HKB />}></Route>

        <Route path="/searchdetails" element={<SearchDetails />} />


        <Route path="/ImageUploadForm" element={<ImageUploadForm />}> </Route>
          <Route path="/UserProfile" element={<UserProfile />}> </Route>
          <Route path="/ChangePW" element={<ChangePW />}> </Route>
          <Route path="/Error" element={<Error />} />
					<Route path="/VerifyPost" element={<VerifyPostPage />} />
        </Routes>
      </BrowserRouter>
      
    </div>
    </AuthProvider>
  )
}

export default App;