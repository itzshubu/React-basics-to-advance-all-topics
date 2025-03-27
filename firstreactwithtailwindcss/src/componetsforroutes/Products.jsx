import React, { useEffect, useState } from 'react'

const Products = () => {
    const [Products , setproducts] = useState([])
    const [Loading , setLoading] = useState(false)

    useEffect(()=>{
              async function fetchdata(){
                setLoading(true)
                 let response = await fetch("https://full-stack-ecommerce-mern.onrender.com/products")
                 let data = await response.json()
                 setproducts(data)
                 setLoading(false)
                console.log(data)
              }
              fetchdata()
    },[])

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