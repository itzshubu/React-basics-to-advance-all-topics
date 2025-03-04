import './App.css'
import Hello from "./components/showname"
import {Hoo} from './components/showname'

function App() {

  let data = [{name :"shubham"},{name:"rahul"},{name :"sachin"},{name : "aman"}]

  return (
    <>
      hello hii i am in appp
     { Hello.HOO2()}{ Hello.Showname()}
     <Hoo/>
    {
      data.map((item)=>{
        console.log(item)
        return <p>{item.name}</p>
      })
    }
    <h2 className='bg-red-600 text-black'> hello iam h2</h2>

    </>
  )
}

export default App
