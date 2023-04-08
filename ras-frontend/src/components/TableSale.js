import React, { useState, useEffect } from 'react'
import axios from 'axios';

const TableSale = (props) => {
    const [currentsale, setCurrentsale] = useState((JSON.parse(sessionStorage.getItem("tablesales"))));
    const [items, setItems] = useState([]);
    const [item, setItem] = useState("")
    const [quan, setQuan] = useState(0)
    const returntomenu = () =>{
        props.returntomenu();
    }
    const getitems = async() => {
        const response = await axios.get("http://localhost:5000/getitems");
        setItems(response.data);
        console.log(response.data);
    }
    const addorder = async() => {
        if(currentsale[props.tableNumber-1].content[item]){
            currentsale[props.tableNumber-1].content[item]=Number(currentsale[props.tableNumber-1].content[item])+Number(quan);
        }
        else{
            currentsale[props.tableNumber-1].content[item]=Number(quan);
        }
        setItem("")
        setQuan(0);
        setCurrentsale(currentsale);
        sessionStorage.setItem("tablesales", JSON.stringify(currentsale));
        // console.log(currentsale[props.tableNumber])
        // console.log()
    }
    const deleteorder = (e) => {
        console.log(e);
        delete currentsale[props.tableNumber-1].content[e];
        setCurrentsale(currentsale);
        sessionStorage.setItem("tablesales", JSON.stringify(currentsale));
    }
    const handleitem = (e) => {
        setItem(e.target.value);
    }
    const handlequan = (e) => {
        setQuan(e.target.value);
    }
    const generateBill = async()=>{
        const issue = await axios.put("http://localhost:5000/issueingredients", {"content": currentsale[props.tableNumber-1].content})
        if(issue.status==200){
            const issuesale = await axios.post("http://localhost:5000/addsale", {"orders": currentsale[props.tableNumber-1].content, "tableNumber": props.tableNumber, "totalBill": 200});
            console.log(issuesale.data);
        }
        // console.log(issue);
        currentsale[props.tableNumber-1].content={};
        setCurrentsale(currentsale);
        sessionStorage.setItem("tablesales", JSON.stringify(currentsale));
        props.returntomenu();
    }
    useEffect(() => {
      getitems();
    }, [])
    
  return (
    <div className='w-[60rem] h-[40rem] absolute bg-white left-[18rem] top-[4rem] opacity-80 flex flex-col justify-center items-center'>
        <div className='text-3xl'>Add Order to Table Number {currentsale[props.tableNumber-1].tableNumber}</div>
        <div className='flex flex-col justify-evenly items-center h-[50%] w-1/2'>
            <input onChange={handleitem} type='text' list='itemlist' placeholder='Select item' className='w-[80%] h-1/5' value={item}/>
            <datalist id='itemlist'> 
                {items.map((item)=>{
                    return(
                        <>
                            <option value={item.code}>{item.name}</option>
                        </>
                    )
                })}
            </datalist>
            <input onChange={handlequan} type='number' className='h-1/5 w-4/5' placeholder='Enter quantity' value={quan}/>
            <div className='flex flex-row w-full justify-evenly items-center'>
                <div>Item Name</div>
                <div>Quantity</div>
                {/* <div>Click to Delete</div> */}
            </div>
            <div className='flex flex-col w-full h-1/2 justify-evenly items-center'>
                {Object.keys(currentsale[props.tableNumber-1].content).map((key)=>{
                    return(
                        <div className='w-full flex flex-row justify-evenly items-center'>
                            <button onClick={()=>deleteorder(key)} item={key}>x</button>
                            <div>{key}</div>                            
                            <div>{currentsale[props.tableNumber-1].content[key]}</div>                            
                            {/* <button onClick={deleteorder}>Delete Order</button> */}
                        </div>
                    )
                })}
            </div>
            <div className='buttons flex flex-row w-full justify-evenly items-center'>
                <button onClick={addorder}>Add Order</button>
                <button onClick={generateBill}>Generate Bill</button>
                <button onClick={returntomenu}>Close</button>
            </div>
        </div>
    </div>
  )
}

export default TableSale