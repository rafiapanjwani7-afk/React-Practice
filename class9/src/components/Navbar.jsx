import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const loction = useLocation()
    let activeStyle = "underline"
    
  return (
    <nav className='flex justify-between px-4 bg-cyan-800 text-amber-50 p-3'>
        <h2 className='text-3xl'>Smit</h2>
        {/* <div>
          <Link className={(`${loction.pathname == "/" ?"underline":""} m-3`)} to="/">Home</Link>
          <Link className={(`${loction.pathname == "/about" ?"underline":"m-3"}`)} to="/about">About Us</Link>
          <Link className={(`${loction.pathname == "/contact" ?"underline":"m-3"}`)} to="/contact">Contact Us</Link>
          <Link className={(`${loction.pathname == "/product" ?"underline":"m-3"}`)} to="/product">Product</Link>
        </div> */}
        <div className="">
          <Navlink className={(isActive)=>{ isActive ?"underline font-bold":"m-3"}} to="/"> Home</Navlink>
        </div>
      </nav>
  )
}

export default Navbar