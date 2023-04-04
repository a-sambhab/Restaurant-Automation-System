import React from 'react'
import Link from 'next/link'

const Landing = () => {
  return (
    <div className='w-full h-[92%] bg-[#C0DBEA] flex justify-center items-center'>
        <button className='w-[20%] h-[7.5%] bg-[#FDF4F5]'>
            <Link className='w-full h-full' href="/login">Login</Link>
        </button>
        {/* <button>
            <Link href="/login">Login</Link>
        </button> */}
    </div>
  )
}

export default Landing