import React from 'react'

const DynamicTable = (props) => {
  // get table column
  console.log(props)
  const {TableData} = props
 const column = Object.keys(TableData[0]);
 // get table heading data
 const ThData =()=>{
    
     return column.map((data)=>{
        if(data == "content" || data == "__v" || data == "_id"){
            return <></>
        }
        else{
            return <th key={data}>{data}</th>
        }
     })
 }
// get table row data
const tdData =() =>{
   
     return TableData.map((data)=>{
       return(
           <tr>
                {
                   column.map((v)=>{
                        if(v == "content" || v == "_v" || v == "_id"){
                            return <></>
                        } else{
                            return <td>{data[v]}</td>
                        }
                        console.log(v);
                   })
                }
           </tr>
       )
     })
}
  return (
      <table className="table">
        <thead>
         <tr>{ThData()}</tr>
        </thead>
        <tbody>
        {tdData()}
        </tbody>
       </table>
  )
}

export default DynamicTable