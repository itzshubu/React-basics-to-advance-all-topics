import React from 'react'
import {NavLink} from "react-router-dom"
import logo from "../../public/logo.webp"

const Navbar = () => {
  return (
    <div className='p-1.5 bg-amber-300 flex justify-between'>
        <div>
            <img className='w-[50px] h-[50px]' src={'../../public/logo.webp'} alt="" />
        </div>
        <ul className='flex gap-1 list-none'>
            <li> <NavLink to={'/'}>HOME</NavLink></li>
            <li> <NavLink to={'/about'}>About</NavLink></li>
            <li><NavLink to={'/products'}>Products</NavLink></li>
            <li> <NavLink to={'/contact'}>contact</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar