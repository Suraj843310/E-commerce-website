import React, { useContext, useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

  const[menu,setmenu] = useState("shop");
  const {cartItems, all_product} = useContext(ShopContext);

  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((total, qty) => total + qty, 0);
  };

  const getTotalProducts = () => {
    return all_product.length;
  };

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt=""/>
            <p>SHOPPING</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setmenu("shop")}}><Link style={{ textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>men</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("womens")}}><Link style={{ textDecoration:'none'}} to='/womens'>women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("kids")}}><Link style={{ textDecoration:'none'}} to='/kids'>kids</Link>{menu==="kids"?<hr/>:<></>}</li>

        </ul>
        <div className="nav-login-cart">
           <Link to='/login'><button>Login</button></Link>
            <Link to='cart'><img src={cart_icon} alt=""/></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
            <div className="nav-total-products">Total Products: {getTotalProducts()}</div>
        </div>

    </div>
  )
}

export default Navbar
