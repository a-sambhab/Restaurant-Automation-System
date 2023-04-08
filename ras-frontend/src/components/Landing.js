import React from 'react'
import { useState,useEffect } from 'react'
import Link from 'next/link'
import axios from 'axios'
import Dashboard from './Dashboard'

const Landing = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState({})
    const [isLoggedIn, setIsLoggedIn] = useState();
    useEffect(() => {
        setIsLoggedIn(sessionStorage.getItem("user"));
    }, [])
    
    const handleusername = (e) => {
        setUsername(e.target.value);
    }
    const handlepassword = (e) => {
        setPassword(e.target.value);
    }
    const loginuser = async() => {
        const body = {
            name: username,
            password: password,
        }
        const response = await axios.get("http://localhost:5000/loginuser", {
            headers: {
                "name": username,
                "password": password
            }
        })
        if(response.status===200){
            setUser(response.data.user);
            sessionStorage.setItem("user",JSON.stringify(response.data.user));
            setIsLoggedIn(sessionStorage.getItem("user"));
        }
        else{
            alert(response.data.message);
        }
    }
  return (
    <>{isLoggedIn?
        <Dashboard
            user = {user}
        />
        :
        <div className='w-full h-[100%] bg-[#C0DBEA] flex justify-center items-center'>
        <div className='form w-[50%] h-[40%] flex flex-col justify-evenly items-center'>
            <div className='formfield flex flex-col w-[50%] h-[15%]'>
                <label for="username">Username</label>
                <input id='username' placeholder='Username' type="text" value={username} onChange={handleusername}/>
            </div>
            <div className='formfield flex flex-col w-[50%] h-[15%]'>
                <label for="password">Password</label>
                <input id='password' placeholder='Password' type="password" value={password} onChange={handlepassword}/>
            </div>
            <button className='w-[50%] h-[15%] bg-[#FDF4F5]' onClick={loginuser}>
                Login
            </button>
        </div>
    </div>
    }</>
  )
}

export default Landing