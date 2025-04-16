import React, { useEffect, useState , useContext } from 'react'
import { ProductsContext } from '../store/ProductContext'
import { CartContext } from '../store/CartContext';


const All = () => {
  const [Loading, setLoading] = useState(false);
  let Products = useContext(ProductsContext);
  let { cart, setCart } = useContext(CartContext)

  function showstar(star) {

    let bold = star;
    let khali = 5 - star;
    let showstat = "";

    for (let i = 1; i <= bold; i++) {
      showstat += "⭐";
    }
    for (let i = 1; i <= khali; i++) {
      showstat += "👽";
    }
    return showstat;
  }

  function addtocart(item){
     console.log(item)
     let matched = cart.filter((fromcart)=>{
       return fromcart.productId == item.productId
     })
     console.log(matched)
     if(matched.length > 0){
          let newarr = cart.map((fromcart)=>{
               if(fromcart.productId == item.productId){
                return {...fromcart , quantity : fromcart.quantity + 1}
               }else{
                return fromcart
               }
          })
          console.log(newarr)
          setCart(newarr)
     }else{ 
      setCart([...cart ,{...item , quantity :1}])
     }
  }

  return (
    <div>
      <h1 className="text-6xl">Products</h1>
      {Loading && <h2>loading....... wait.....</h2>}
      <div className="flex gap-2.5 justify-center flex-wrap">
        {Products.map((item, index) => {
          return (
            <div key={item.productId} className="w-[250px] border border-2">
              <div>
                <img
                  src={item.image}
                  className="w-full object-contain h-[300px]"
                  alt=""
                />
              </div>
              <div>{showstar(item.rating)}</div>
              <div><button onClick={()=>addtocart(item)}>add to cart</button></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default All;
