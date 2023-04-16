import Navbar from '@/components/Navbar'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const additem = () => {
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    price: 0,
    description: "",
    ingredients: {},
  });
  const [ingred, setIngred] = useState("")
  const [ingredients, setIngredients] = useState([])
  const [quantity, setQuantity] = useState(0)
  const saveitem = async(e) => {
    // console.log()
    const saveitemres = await axios.post("http://localhost:5000/additems", {...formData, code: `${formData.name[0]+formData.name[2]+formData.name[4]+formData.name[8]}`.toUpperCase()});
    console.log(saveitemres);
    setFormData({
      name: "",
      code: "",
      price: 0,
      description: "",
      ingredients: {},
    })
    // console.log(formData);  
  }
  const addingredient = (e) => {
    if(formData.ingredients[ingred]){
      setFormData({...formData, ingredients: { ...formData.ingredients, [ingred]: ingredients[ingred]+Number(quantity) }})
    } else {
      setFormData({...formData, ingredients: {...formData.ingredients,[ingred]: Number(quantity)}})
    }
    setIngred("");
    setQuantity(0);
  }
  const deleteingred = (inkey) => {
    const {ingredients: ingredientList, ...rest} = formData;
    const {[inkey]: dontneed, ...resingredients} = ingredientList;
    setFormData({...rest, ingredients: resingredients});
  }
  const getingredients = async(e) => {
    const response = await axios.get("http://localhost:5000/getingredients");
    console.log(response)
    if(response.status===200){
      setIngredients(response.data);
    }
  }
  useEffect(() => {
    getingredients();
  }, [])
  return (
    <div className='w-screen h-screen'>
      <Navbar/>
      <div className='w-full h-[92%] bg-[#C0DBEA] flex flex-col flex-wrap justify-evenly items-center'>
        <label for="ingredient">Item Name</label>
        <input type='text' id="ingredient" placeholder='Ingredient Name' className='w-1/6 h-8' value={formData.name} onChange={(e)=>{setFormData({...formData, name : e.target.value})}}/>
        <label for="price">Item Price</label>
        <input type='number' id='price' className='w-1/6 h-8' value={formData.price} onChange={(e)=>{setFormData({...formData, price: e.target.value})}}/>
        <label for="description">Item Description</label>
        <input type='text' id='description' className='w-1/6 h-8' value={formData.description} onChange={(e)=>{setFormData({...formData, description: e.target.value})}}/>
        <input onChange={(e)=>{setIngred(e.target.value)}} type='text' list='itemlist' placeholder='Select Ingrendients' className='w-1/6 h-8' value={ingred}/>
        <datalist id='itemlist'> 
          {ingredients.map((ingredient)=>{
            return(
              <>
                <option value={ingredient.name}>{ingredient.name}</option>
              </>
            )
          })}
        </datalist>
        <input type='number' value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}/>
        <button className='bg-[#BA90C6] w-1/6 h-8' onClick={addingredient}> Add Ingredient</button>
        {Object.keys(formData.ingredients).map((inkey)=>{
          return(
            <>
              <button onClick={()=>{deleteingred(inkey)}}>x</button>
              <div>{inkey}</div>
              <div>{formData.ingredients[inkey]}</div>
            </>
          )
        })}
        <button className='bg-[#BA90C6] w-1/6 h-8' onClick={saveitem}>Save Item </button>
      </div>
    </div>
  )
}

export default additem