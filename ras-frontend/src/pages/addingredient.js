import Navbar from '@/components/Navbar'
import axios from 'axios'
import React, { useState } from 'react'

const addingredient = () => {
  const [formdata, setFormdata] = useState({
    name:"",
    quantity: 0,
  })
  const saveingredient = async(e) => {
    e.preventDefault();
    if(formdata.name===""||formdata.quantity===0){
      alert("Add Data");
    } else {
      const response = await axios.post("http://localhost:5000/addingredient", formdata)
      console.log(response);
      if(response.status===200){
        alert(`Ingredient ${response.data.name} added successfully`);
      }
    }
    setFormdata({
      name: "",
      quantity: ""
    })
  } 
  return (
    <div className='h-screen w-screen'>
      <Navbar/>
      <div className='w-full h-[92%] bg-[#C0DBEA] flex flex-col flex-wrap justify-evenly items-center'>
        <label for="ingredient">Ingredient Name</label>
        <input type='text' id="ingredient" placeholder='Ingredient Name' className='w-1/6 h-8' value={formdata.name} onChange={(e)=>{setFormdata({...formdata, name : e.target.value})}}/>
        <label for="quantity">Ingredient Name</label>
        <input type='number' id='quantity' className='w-1/6 h-8' value={formdata.quantity} onChange={(e)=>{setFormdata({...formdata, quantity: e.target.value})}}/>
        <button className='bg-[#BA90C6] w-1/6 h-8' onClick={saveingredient}>Add Ingredient</button>
      </div>
    </div>
  )
}

export default addingredient