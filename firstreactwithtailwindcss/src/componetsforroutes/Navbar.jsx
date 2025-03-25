import React from 'react'
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <div className='p-1.5 bg-amber-300 flex justify-between'>
        <div>Navabr</div>
        <ul className='flex gap-1 list-none'>
            <li> <NavLink to={'/'}>HOME</NavLink></li>
            <li> <NavLink to={'/about'}>About</NavLink></li>
            <li> <NavLink to={'/contact'}>contact</NavLink></li>
      
        </ul>
    </div>
  )
}

export default Navbar