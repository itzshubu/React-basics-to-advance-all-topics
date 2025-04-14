import React from 'react'
import {NavLink} from "react-router-dom"
import logo from "../../public/logo.webp"

const Navbar = () => {

  return (
    <div className='p-1.5 bg-amber-300 flex justify-between'>
        <div>
            <img className='w-[50px] h-[50px]' src={'../../public/logo.webp'} alt="" />
        </div>
        <ul className='flex gap-3 list-none'>
        <li> <NavLink to={'/cart'}  className={({isActive})=>isActive?"text-red-600":""} >Cart</NavLink></li>
            <li> <NavLink to={'/'}  className={({isActive})=>isActive?"text-red-600":""} >HOME</NavLink></li>
            <li> <NavLink to={'/about'}  className={({isActive})=>isActive?"text-red-600":""} >About</NavLink></li>
            <li><NavLink to={'/products'}  className={({isActive})=>isActive?"text-red-600":""} >Products</NavLink></li>
            <li> <NavLink to={'/contact'}  className={(a)=>a.isActive?"text-red-600":""} >contact</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar


