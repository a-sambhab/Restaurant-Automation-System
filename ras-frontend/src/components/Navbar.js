import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Navbar = () => {
  const {push} = useRouter()
  const logout =()=>{
    sessionStorage.clear();
    // push('/'); 
    window.location.reload();
  }
  return (
    <div className='w-full h-[8%] bg-[#BA90C6] flex justify-center items-center'>
        <Link href='/' className='text-white'>Restaurant Automation System</Link> 
        {/* {se} */}
        <button className='w-[25%] bg-[#BA90C6] ' onClick={logout}>Log Out</button>
    </div>
  )
}

export default Navbar