import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import Link from 'next/link';

const Dashboard = (props) => {
    const [user, setUser] = useState({})
    useEffect(() => {
        setUser(JSON.parse(sessionStorage.getItem("user")));
    }, [])
    return (
        <>
            <div className='w-full h-[100%] bg-[#C0DBEA] flex justify-center items-center'>
                <div className='w-[50%] h-[50%] flex flex-col justify-evenly items-center'>
                    <Link href='/addsale' className='w-[75%] h-[8%] flex justify-center items-center bg-[#E8A0BF]'>Generate Bill</Link>
                    {user.role==="sales clerk"?
                        <></>
                        :
                        <>
                        <Link href='/addingredient' className='w-[75%] h-[8%] flex justify-center items-center bg-[#E8A0BF]'>Add Ingredient</Link>

                        <Link href='/additem' className='w-[75%] h-[8%] flex justify-center items-center bg-[#E8A0BF]'>Add a New Item</Link>
                    
                        <Link href='/changeitem' className='w-[75%] h-[8%] flex justify-center items-center bg-[#E8A0BF]'>Change Price of Item</Link>
                    
                        <Link href='/createmenu' className='w-[75%] h-[8%] flex justify-center items-center bg-[#E8A0BF]'>Generate Menu</Link>
                        </>
                    }
                    {user.role==="owner"?
                        <Link href='/generatereport' className='w-[75%] h-[8%] flex justify-center items-center bg-[#E8A0BF]'>Generate Report</Link>
                        :
                        <></>
                    }
                </div>
            </div>
        </>
  )
}

export default Dashboard