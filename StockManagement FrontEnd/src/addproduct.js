import React,{useState} from 'react'
import NavBar from './Nav';
import { TextField } from '@mui/material';
import axios from 'axios';
function Addproduct() {
    const[id,setid]= useState("");
    const[name,setname]= useState("");
    const[quantity,setquantity]= useState("");
    const[price,setprice]= useState("");
    async function handleSubmit(e) {
        e.preventDefault()
        const data = {
            id : Number(id),
            name : name,
            quantity : Number(quantity),
            price: Number(price)
        }
        const res = await axios.post("http://localhost:8080/product", data)
        await console.log(res);
    }                             
    async function handlechange()
    {
        window.alert("added");
    }
    return ( 
        <>
        <NavBar/>
        <div className='rishi'>
        <h1>Add Product</h1>
        <form onSubmit={(e) => {
            handleSubmit(e)
        }}>
        <div className='input-Container'>
        <TextField id="outlined-basic" value={id} onChange={(e)=>{setid(e.target.value)}} label="ProductId" variant="outlined" />
        </div>
        <div className='input-Container'>
        <TextField id="outlined-basic" value={name} onChange={(e)=>{setname(e.target.value)}} label="Product Name" variant="outlined" />
        </div>
        <div className='input-Container'>
        <TextField id="outlined-basic" value={quantity} onChange={(e)=>{setquantity(e.target.value)}} label="Quantity" variant="outlined" />
        </div>
        <div className='input-Container'>
        <TextField id="outlined-basic" value={price} onChange={(e)=>{setprice(e.target.value
            
            
            
            )}} label="Price" variant="outlined" />
        </div>
        <div className='input-Container'>
        <button onClick={()=>{handlechange()}} type='submit' className="button-33" role="button">Add Product </button>
        </div>


        </form>
        </div>
        </>

     );
}

export default Addproduct;