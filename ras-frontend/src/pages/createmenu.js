import MenuItems from '@/components/MenuItems'
import Navbar from '@/components/Navbar'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const createmenu = () => {
  const [items, setItems] = useState([])
  const getitems = async() => {
    const response = await axios.get("http://localhost:5000/getitems");
    console.log(response)
    setItems(response.data);
  }
  useEffect(() => {
    getitems()
  }, [])
  
  return (
    <div className='w-screen h-screen'>
      <Navbar/>
      <div className='w-full min-h-[92%] h-fit bg-[#C0DBEA] flex flex-row flex-wrap justify-evenly items-center'>
        {items.map((item)=>{
          return(
            <>
              <MenuItems
                item ={item}
              />
            </>
          )
        })}
      </div>
    </div>
  )
}

export default createmenu