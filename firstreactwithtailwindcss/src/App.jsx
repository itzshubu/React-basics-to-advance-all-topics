import { useState } from "react";
import "./App.css";
import Hello from "./components/showname";
import { Hoo } from "./components/showname";
import Calculator from "./components/01Calculator";
import Button from "./components/buttons"
import Fetchandshow from "./fetchandshow";
import EventHandling from "./components/eventHandling";
import Purechildcompo from "./components/purechildcompo";

function App() {
  const [count , setCount] = useState(2)
  const [count2 , setCount2] = useState(3)
  const [data2, Setdata2] = useState(8);
  console.log("parent render")
  
  // let firstnormal = 89
  // function changenormal(){
  //   console.log("change to normal variable")
  //   firstnormal+= 1
  //   data2 += 1
  //   console.log(firstnormal)
  // }
  // const [] = useState
  // let data = [
  //   { name: "shubham" },
  //   { name: "rahul" },
  //   { name: "sachin" },
  //   { name: "aman" },
  // ];

  return (
    <>
      {/* {Hello.HOO2()}
      {Hello.Showname()}
      <Hoo /> hello hii i am in appp
      {/* {data.map((item) => {
        console.log(item);
        return <p>{item.name}</p>;
      })} */}
      {/* <button className="border p-2" onClick={changenormal}>change {firstnormal}</button>
      <button className="border p-2" onClick={()=>Setdata2(data2+1)}>change data2  {data2}</button>

      <h2 className="bg-red-600 text-black"> hello iam h2 {data2}</h2>
       <Calculator/>
       <div> */}
           {/* <Button data={["add","red"]}/>
           <Button data={["remove","blue"]}/>
           <Button data={["remove","blue"]}/>
           <Button data={["remove","balck"]}/>
           <Button data={["remove","#ff0f5a"]}/>
           <Button data={["remove","blue"]}/>
           {Button(["update" , "#bbbbbb"])} */}
       {/* </div> */}

       {/* <Fetchandshow/> */}
       {/* <EventHandling/> */}
       <button className="border border-black m-2" onClick={()=>setCount(count + 1)}>count1 is {count}</button>
       <button className="border border-black m-2" onClick={()=>setCount2(count2 + 1)}>count2 is {count2}</button>
     <Purechildcompo data={count2}/>
     <Hoc Data={Simplecompo}/>
    
    </>
  );
}

export default App;


const Hoc = ({Data})=>{
  console.log(Data)
  return <div> hello i am hoc <Data/> </div>
}

const Simplecompo = () =>{
  return <div>simple compo</div>
}