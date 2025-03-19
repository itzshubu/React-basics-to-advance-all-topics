import React from 'react'
import "./button.css"

const buttons = (k) => {
    let arr = k.data?k.data:k
    let [innertext , color] =  arr
  return (
    <button style={{backgroundColor:color}} className={`m-2 p-1.5`} >{innertext}</button>
  )
}

export default buttons