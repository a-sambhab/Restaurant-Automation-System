import React from 'react'

const MenuItems = (props) => {
  return (
    <div className='w-1/2 h-36 flex flex-col justify-center items-center'>
        <div className='w-1/2 flex flex-row justify-between items-center h-1/5 border-b-2 border-[#BA90C6]'>
            <div>{props.item.name}</div>
            <div>&#8377; {props.item.price}</div>
        </div>
        <div>{props.item.description}</div>
    </div>
  )
}

export default MenuItems