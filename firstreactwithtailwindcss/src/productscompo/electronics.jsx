import React ,{useContext , useState} from 'react'
import {ProductsContext} from "../store/ProductContext"

const electronics = () => {
    let data = useContext(ProductsContext)
    console.log(data)
    function showstar(star) {
        const [Loading, setLoading] = useState(false);
        let Products = useContext(ProductsContext);
    
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
    let electronics = data.filter((item)=>item.main_category == "Electronics") 
  return (
    <div>
          <div className="flex gap-2.5 justify-center flex-wrap">

        {electronics.map((item, index) => {
            return (
                <div className="w-[250px] border border-2">
              <div>
                <img
                  src={item.image}
                  className="w-full object-contain h-[300px]"
                  alt=""
                  />
              </div>
              <div>{showstar(item.rating)}</div>
            </div>
          );
        })}
        </div>
    </div>
  )
}

export default electronics