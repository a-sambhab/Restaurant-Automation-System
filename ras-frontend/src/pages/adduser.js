import Navbar from '@/components/Navbar'
import axios from 'axios'
import React, { useState } from 'react'

const adduser = () => {
    const [formdata, setFormdata] = useState({
        name: "",
        password: "",
        role: "",
        emp_id: ""
    })
    const saveuser = async() => {
        console.log(formdata)
        const response = await axios.post("http://localhost:5000/adduser", formdata);
        console.log(response)
        if(response.status === 200){
            alert("User Added Successfully");
            setFormdata({
                name: "",
                password: "",
                role: "",
                emp_id: ""
            })
        }
    }
  return (
    <div className='w-screen h-screen'>
        <Navbar/>
        <div className='w-full h-[92%] bg-[#C0DBEA] flex flex-col flex-wrap justify-evenly items-center'>
            <label>Name</label>
            <input type='text' value={formdata.name} onChange={(e)=>{setFormdata({...formdata, name: e.target.value})}}/>
            <label>Password</label>
            <input type='password' value={formdata.password} onChange={(e)=>{setFormdata({...formdata, password: e.target.value})}}/>
            <label>Role</label>
            <input type='text' list='rolelist' value={formdata.role} onChange={(e)=>{setFormdata({...formdata, role: e.target.value})}}/>
            <datalist id='rolelist'>
                <option value="Owner">Owner</option>
                <option value="Manager">Manager</option>
                <option value="Sales Clerk">Sales Clerk</option>
            </datalist>
            <label>Emp_ID</label>
            <input type='text' value={formdata.emp_id} onChange={(e)=>{setFormdata({...formdata, emp_id: e.target.value})}}/>
            <button className='bg-[#E8A0BF] w-1/5' onClick={saveuser}>Add User</button>
        </div>
    </div>
  )
}

export default adduser