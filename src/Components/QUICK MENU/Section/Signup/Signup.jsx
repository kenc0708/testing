import React, {useEffect, useState} from "react"
import axios from "axios"
import {useNavigate, Link} from "react-router-dom"

function Signup() {

  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')

  async function submit(e){
    e.preventDefault();

    try{

      await axios.post("http://localhost:3000/api/users/signUp",{
        username,password
      })

    }
    catch(e){
      console.log(e);

    }
  }

  return (
    <div className="login">

      <h1>Signup</h1>

      <form action="POST">
        <input type="text" onChange={(e)=>{setUsername(e.target.value)}} placeholder="Username" id="" />
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" id="" />
        <input type="submit" onClick={submit} />

        </form>

        <br />
        <p>OR</p>
        <br />

        <Link to="/signup">Login Page</Link>
        
    </div>
  )
}

export default Signup