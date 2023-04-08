import React, { useState } from 'react'
import TableSale from './TableSale'

const Table = (props) => {
    const [addingsale, setAddingsale] = useState(false)
    const addsaletotable = (e) => {
        e.preventDefault();
        setAddingsale(true);
        // console.log()
    };
    const returntomenu = () => {
        setAddingsale(false);
    }
  return (
    <div className='w-[25%] h-[20%] flex justify-center items-center'>
        <button className='w-[50%] h-[50%] bg-[#FDF4F5] text-[#BA90C6] hover:bg-[#BA90C6] hover:text-[#FDF4F5] transition-all duration-500 ease-in-out ' onClick={addsaletotable}>
            Table Number {props.tableNumber}
        </button>
        {addingsale?
            <TableSale
                tableNumber = {props.tableNumber}
                returntomenu = {returntomenu}
            />
        :
            <></>
        }
    </div>
  )
}

export default Table