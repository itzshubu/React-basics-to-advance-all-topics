import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../store/CartContext'

const Cart = () => {
    let data = useContext(CartContext)
    console.log(data)
  return (
    <div>
        <h2>MyCart1</h2>
        <div>
          {data.cart.map((item)=>{
               return <div>
                <img src={item.image} alt="" />
                <p>{item.quantity}</p>
               </div>
          })}
        </div>
    </div>
  )
}

export default Cart