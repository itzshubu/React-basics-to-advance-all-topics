import { useState } from "react";
import "./App.css";
import Hello from "./components/showname";
import { Hoo } from "./components/showname";

function App() {
  const [data2, Setdata2] = useState(8);
  console.log("render")
  
  let firstnormal = 89
  function changenormal(){
    console.log("change to normal variable")
    firstnormal+= 1
    data2 += 1
    console.log(firstnormal)
  }
  // const [] = useState
  // let data = [
  //   { name: "shubham" },
  //   { name: "rahul" },
  //   { name: "sachin" },
  //   { name: "aman" },
  // ];

  return (
    <>
      {Hello.HOO2()}
      {Hello.Showname()}
      <Hoo /> hello hii i am in appp
      {/* {data.map((item) => {
        console.log(item);
        return <p>{item.name}</p>;
      })} */}
      <button className="border p-2" onClick={changenormal}>change {firstnormal}</button>
      <button className="border p-2" onClick={()=>Setdata2(data2+1)}>change data2  {data2}</button>

      <h2 className="bg-red-600 text-black"> hello iam h2 {data2}</h2>
    </>
  );
}

export default App;
