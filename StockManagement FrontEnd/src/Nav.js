import React from 'react'
import { Link } from 'react-router-dom';
function NavBar() {
    return ( 
        <>
        <div className='navbar'>
        <li>
        <Link to={"/"}>Home</Link>
        </li>
        <li>
        <Link to={"/add_product"}>Addproduct</Link>
        </li>
        <h2>₪ JPN</h2>
        </div>
        </>
  );
}

export default NavBar;