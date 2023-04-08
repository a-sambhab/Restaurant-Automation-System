import Navbar from '@/components/Navbar'
import Table from '@/components/Table'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const addsale = () => {
    const [items, setItems] = useState([])
    const [tablesale, setTablesale] = useState([])
    const getitems = async() => {
        const response = await axios.get('http://localhost:5000/getitems');
        // console.log(response.data);
        setItems(response.data);
    }
    const populatetable = () => {
        if(sessionStorage.getItem("tablesales")){
            setTablesale(JSON.parse(sessionStorage.getItem("tablesales")));
        }
        else{
            let tablesale = []
            for (let index = 1; index <= 8; index++) {
                tablesale.push({"tableNumber": index, "content": {}})
            }
            setTablesale(tablesale);
            sessionStorage.setItem("tablesales", JSON.stringify(tablesale));
        }
    }
    useEffect(() => {
      getitems();
      populatetable();
    }, [])
    
  return (
    <>
        <div className='w-screen h-screen'>
            <Navbar/>   
            <div className='w-full h-[92%] bg-[#C0DBEA] flex flex-row flex-wrap justify-evenly items-center'>
                {tablesale.map((table)=>{
                    return(
                      <Table
                        tableNumber= {table.tableNumber}
                      />  
                    );
                })}
            </div>
        </div>
    </>
  )
}

export default addsale