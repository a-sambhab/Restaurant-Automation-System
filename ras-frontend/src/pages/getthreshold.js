import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import axios from 'axios'
import { useRouter } from 'next/router'
import DynamicTable from '@/components/DynamicTable'

const getthreshold = () => {
    const [data, setData] = useState({})
    const {push} = useRouter()
    const getthresholddata = async() => {
        const response = await axios.put('http://localhost:5000/setthreshold');
        console.log(response);
        if(response.data.status===200){
            alert(response.data.message);
            // push('/')
            getpurchaseorder();
        }
    }
    const getpurchaseorder = async() => {
        const response = await axios.post("http://localhost:5000/generatepurchase");
        console.log(response);
        if(response.data.status===200){
            alert("purchase order generated")
            setData(response.data.content);
        }
    }
  return (
        <div className='w-screen h-screen'>
        <Navbar/>
        <div className='w-full h-[92%] bg-[#C0DBEA] flex flex-col justify-center items-center'>
            <button className='w-[25%] h-[8%] flex justify-center items-center bg-[#E8A0BF]' onClick={getthresholddata} >Get Threshold</button>
            {Object.keys(data).map(key=>{
                return(
                    <>
                        <div className='w-full h-[10%] flex flex-row justify-evenly items-center'>
                        <div>{key}</div>
                        <div>{data[key]}</div>
                        </div>  
                    </>
                )
            })}
        </div>
    </div>
  )
}

export default getthreshold