import React, { useState , useEffect } from "react";

const fetchandshow = () => {
  const [data, setData] = useState([]);
   const [Count , setCount] = useState(3)

  useEffect(()=>{
    async function fetchdata() {
        let response = await fetch(
          "https://full-stack-ecommerce-mern.onrender.com/products"
        );
        let data = await response.json();
        console.log(data);
        setData(data)
      }
      fetchdata();
  },[])

  useEffect(()=>{
    let interval1 = setInterval(() => {
        console.log("on rerender")
    }, 1000);
   return ()=> clearInterval(interval1)
  })

  useEffect(()=>{
           console.log('count changed')
  },[Count])

  console.log("hello");
  return (
    <div>
        <button onClick={()=>setCount(Count + 1)}>change count{Count}</button>
      {data.map((item) => {
        return (
          <div>
            {" "}
            <img src={item.image} alt="" /> <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default fetchandshow;
