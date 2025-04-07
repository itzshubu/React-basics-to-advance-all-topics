import React, { useEffect, useState , useContext } from 'react'
import { ProductsContext } from '../store/ProductContext'

const Products = () => {
    const [Loading , setLoading] = useState(false)
         let Products = useContext(ProductsContext)
   

  function   showstar(star){
       let bold = star
       let khali = 5 - star
     let showstat = ""

      for(let i = 1 ; i<=bold ; i ++){
          showstat += "⭐"
      }
      for(let i =1 ; i <= khali ; i ++){
          showstat += "👽"
      }
      return showstat
     }


  return (
    <div>
        <h1 className='text-6xl'>Products</h1>
        {
            Loading && <h2>loading....... wait.....</h2>
        }
        <div className='flex gap-2.5 justify-center flex-wrap'>
            {Products.map((item , index)=>{
                return <div className='w-[250px] border border-2'>
                    <div>
                        <img src={item.image} className='w-full object-contain h-[300px]' alt="" />
                    </div>
                    <div>
                        {showstar(item.rating)}
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Products