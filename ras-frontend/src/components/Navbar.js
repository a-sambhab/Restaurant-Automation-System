import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[8%] bg-[#BA90C6] flex justify-center items-center'>
        <Link href='/' className='text-white'>Restaurant Automation System</Link> 
    </div>
  )
}

export default Navbar