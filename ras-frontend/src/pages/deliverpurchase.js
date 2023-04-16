import Navbar from '@/components/Navbar'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const deliverpurchase = () => {
    const [allpurchase, setAllpurchase] = useState([])
    const [pId, setPId] = useState("")
    const getpurchases = async() => {
        // console.log("getting")
        const response = await axios.get("http://localhost:5000/getpurchases")
        console.log(response)
        setAllpurchase(response.data)
    }
    const deliver = async() => {
        const response = await axios.put("http://localhost:5000/deliverpurchase", {purchaseid: pId})
        setAllpurchase(allpurchase.filter((p)=>{
            return p !== pId
        }))
        setPId("");
        console.log(response);
        if(response.data.Delivered === true){
            alert("Purchase Delivered and Database Updated");
        }
    }
    useEffect(() => {
      getpurchases();
    }, [])
    
  return (
    <div className='w-screen h-screen'>
    <Navbar/>
    <div className='w-[100%] h-[92%] flex flex-col justify-evenly items-center bg-[#C0DBEA]'>
    <div>
        <label>Purchase ID: </label>
        <input type='text' value={pId} onChange={(e)=>{setPId(e.target.value)}} list='plist'/>
    </div>
        <datalist id='plist'>
            {allpurchase.map(p=>{
                if(!p.Delivered){
                    return(
                    <option value={p.purchaseId}>{p.purchaseId}</option>
                    )
                }
            })}
        </datalist>
        <button onClick={deliver} className='w-1/4 bg-[#E8A0BF] '>Mark Delivered</button>
    </div>
    </div>

  )
}

export default deliverpurchase
