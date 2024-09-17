import React, { useState } from 'react'

const Input = () => {
    let[data,SetData] = useState('Hello')
    function fun1(e){
        SetData(e.target.value)
    }

  return (
    <div>
        <h1>{data}</h1>
        <input onChange={fun1} placeholder='Enter your name'/>
    </div>
  )
}

export default Input