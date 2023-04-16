import Navbar from '@/components/Navbar'
import axios from 'axios'
import React, { useState } from 'react'
import DynamicTable from '@/components/DynamicTable'

const generatereport = () => {
  const [sales, setSales] = useState([])
  const [purchases, setPurchases] = useState([])
  const [edate, setEdate] = useState()
  const [sdate, setSdate] = useState()
  const [fetched, setFetched] = useState(false)
  const getdata = async() => {
    const response = await axios.get("http://localhost:5000/getsalepurchase", {
      headers: {
          "edate": edate,
          "sdate": sdate,
      }
    });
    console.log(response.data);
    setSales(response.data.sales);
    setPurchases(response.data.purchases);
    setFetched(true);
  }
  return (
    <div className='w-screen h-screen'>
      <Navbar/>
      <div className='w-full h-[92%] bg-[#C0DBEA] flex flex-col flex-wrap justify-evenly items-center'>
        <label for="sdate">Start Date</label>
        <input id='sdate' type='date' onChange={(e)=>{setSdate(e.target.value)}}/>
        <label for="edate">End Date</label>
        <input id='edate' type='date' onChange={(e)=>{setEdate(e.target.value)}}/>
        <button onClick={getdata}>Get Data</button>
        {fetched?
        <>
        <DynamicTable
          TableData = {sales}
        />
        <DynamicTable
          TableData = {purchases}
        />
        </>:
        <></>}
      </div>
    </div>
  )
}

export default generatereport