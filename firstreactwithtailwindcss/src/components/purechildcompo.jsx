import React,{memo} from 'react'

const purechildcompo = ({data}) => {
    console.log("child render" , data)
  return (
    <div>purechildcompo</div>
  )
}

export default memo(purechildcompo)