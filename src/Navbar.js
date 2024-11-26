import React from 'react'
import './Navbar.css'
import { BsCoin } from "react-icons/bs";
import {Link} from 'react-router-dom'

const Navbar = () => {

  return (
    <Link to='/'>
      <div className='navbar'>
        <BsCoin className='icon' />
        <h1> Coin Watch </h1>
      </div>
    </Link>
  )

}

export default Navbar;
