import React, { useState } from 'react'
import "./Navbar.scss";
import Logo from "../../assets/Logo.png"
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";



const Navbar = () => {
  const [menu, setMenu] = useState(false)

  return (
    <header className='navbar'>
      <nav className='navbar_container wrapper'>
        <a href="#" className="navbar_logo">
          <img src={Logo} alt="logo" />
        </a>
        <ul className={`${menu ? "show" : "" }`}>
          <li><a href="#">Product</a></li>
          <li><a href="#">Company</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
        <div className="navbar_btns">
        <a href="#">Login</a>
        <a href="#" className='btn'>Register</a>
      </div>

    <div 
    onClick={()=> setMenu(!menu) }
    className="navbar_menu">
    {menu ? <IoClose/>  
    : <IoMdMenu/> }
    </div>

      </nav>
     
    </header>
  )
}

export default Navbar