import axios from 'axios';
import React,{useEffect, useState} from 'react'
import NavBar from './Nav';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
function Home() {
  const[id,setid]= useState("");
  const[name,setname]= useState("");
  const[quantity,setquantity]= useState("");
  const[price,setprice]= useState("");
  const [data, setData] = useState([])
  const navigate = useNavigate()
    useEffect(() => {
        async function fetchData() {
            const res = await axios.get("http://localhost:8080/product")
            await console.log(res);
            await setData(res.data)
        }
        fetchData()
    }, []);
      async function handleupdate(id)
      {

        const data = {
          id : Number(id),
          name : name,
          quantity : Number(quantity),
          price: Number(price)
      }
      const res = await axios.post("http://localhost:8080/product", data)
      await console.log(res);
      }
    
       async function handleDelete(id) {
        const confirmDelete = window.confirm("Are you sure you want to delete this product?");
        if (confirmDelete) {
          try {
            const res = await axios.delete(`http://localhost:8080/product/${id}`);
            if (res.status === 200) {
              const updatedData = data.filter(product => product.id !== id);
              setData(updatedData);
            }
          } catch (err) {
            alert("Failed to delete product!");
          }
        }
    
      }
    return ( 
        <>
      <NavBar />
      <div className='data'>
        <div className='header'>
          <div className='product'>
            <p>PRODUCTID</p>
          </div>
          <div className='product'>
            <p>PRODUCT NAME</p>
          </div>
          <div className='product'>
            <p>PRODUCT QUANTITY</p>
          </div>
          <div className='product'>
            <p>PRODUCT PRICE</p>
          </div>
          <div className='product'>
            <p>ACTIONS</p>
          </div>
        </div>
        {data.map(product => (
          <div key={product.id}>
            <div className='product'>{product.id}</div>
            <div className='product'>{product.name}</div>
            <div className='product'>{product.quantity}</div>
            <div className='product'>{product.price}</div>
            <div className='product'>
            <Button onClick={() => {
              navigate('/edit_product', {state : product})
            }} variant="contained" color="success">Update</Button>
            <Button onClick={()=>{handleDelete(product.id)}} variant="outlined" color="error"> Delete</Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}


export default Home;
