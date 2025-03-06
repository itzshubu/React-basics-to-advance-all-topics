import { useState } from "react";

function Calculator() {
  const [inputdata, setInputdata] = useState("");
  let button = [
    "9",
    "8",
    "7",
    "6",
    "+",
    "5",
    "4",
    "3",
    "2",
    "-",
    "1",
    "0",
    "=",
    "al",
    "*",
  ];

  function handleclick(e){
         
        if(e.target.value == "="){
            let result = eval(inputdata)
            setInputdata(result)
        }else{
            if(e.target.value == "al"){
                   setInputdata('')
            }else {
                console.log(e.target.value)
                setInputdata(inputdata + e.target.value)
            }
        }
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="inline-block border m-3.5">
          <div>
            <input type="text" readOnly value={inputdata} className="w-full" />
          </div>
          <div className="inline-grid grid-rows-3 grid-cols-5">
            {button.map((item) => {
              return <button key={item} onClick={handleclick} value={item} className="cursor-pointer border p-3">{item}</button>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
