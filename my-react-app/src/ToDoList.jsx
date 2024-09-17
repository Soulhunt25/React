import React, { useState }  from 'react'

const ToDoList = () => {
    let[data,SetData] = useState('Hello')
    function fun1(e){
        SetData(e.target.value)
    }

  return (
    <div>
        <h1>{data}</h1>
        <input onChange={fun1} placeholder='Enter your name'/>
        <button onClick={fun1}>save</button>
    </div>
  )
}
export default ToDoList
