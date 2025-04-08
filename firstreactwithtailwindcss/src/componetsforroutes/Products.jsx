import React, { useEffect, useState , useContext } from 'react'
import { ProductsContext } from '../store/ProductContext'
import { NavLink , Outlet } from 'react-router-dom'

const Products = () => {
   
  return (
     <div>
        <ul className='flex justify-center gap-3'><li><NavLink className='text-blue-600 underline' to="all">all</NavLink></li>    <li><NavLink className='text-blue-600 underline' to="electronics"> electronics </NavLink></li></ul>
        <Outlet/>
     </div>
  )
}

export default Products