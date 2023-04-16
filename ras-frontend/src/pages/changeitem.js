import Navbar from '@/components/Navbar'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const changeitem = () => {
  const [form, setForm] = useState({
    code: "",
    newprice: 0
  });
  const [items, setItems] = useState([])
  const getitems = async() =>{
    const response = await axios.get("http://localhost:5000/getitems")
    console.log(response.data)
    setItems(response.data);
  }
  const changeprice = async() => {
    console.log(form);  
    const response = await axios.put("http://localhost:5000/changeprice", form);
    console.log(response);
    if(response.status===200){
      alert("Price changed successfully")
    }
    setForm({
      code: "",
      newprice: 0
    })
  }
  useEffect(() => {
    getitems();
  }, [])
  
  return (
    <div className='h-screen w-screen'>
      <Navbar/>
      <div className='w-full h-[92%] bg-[#C0DBEA] flex flex-col flex-wrap justify-evenly items-center'>
        <label for="item">Item Name</label>
        <input type='text' id="item" placeholder='item Name' list='itemlist' className='w-1/6 h-8' value={form.code} onChange={(e)=>{setForm({...form, code : e.target.value})}}/>
        <datalist id='itemlist'> 
          {items.map((item)=>{
            return(
              <>
                <option value={item.code} >{item.name}</option>
              </>
            )
          })}
        </datalist>
        <label for="newprice">New Item Price</label>
        <input type='number' id='newprice' className='w-1/6 h-8' value={form.newprice} onChange={(e)=>{setForm({...form, newprice: Number(e.target.value)})}}/>
        <button className='bg-[#BA90C6] w-1/6 h-8' onClick={changeprice}>Change Item Price</button>
      </div>
    </div>
  )
}

export default changeitem