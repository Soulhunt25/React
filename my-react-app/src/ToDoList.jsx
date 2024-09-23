import React, { useState } from 'react'

const ToDoList = () => {

  let [input, SetInput] = useState('')
  function fun1(e) {
    SetInput(e.target.value)
  }

  let [data, SetData] = useState([])
  function done() {
    SetData([...data, input]);
    SetInput('')
  }

  function deleteItem(item) {
    let newData = data.filter((_,y)=>{
      return y != item
    })
    SetData(newData)
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <input value={input} onChange={fun1} placeholder='Enter your name' />
      <button onClick={done}>save</button>
      {
        data.map((a, b) => {
          return (<>
            <li key={b} style={{color:'black'}}>
              {a} <button onClick={()=>deleteItem(b)}>Delete</button>
            </li>
          </>)
        })
      }
    </div>
  )
}
export default ToDoList
