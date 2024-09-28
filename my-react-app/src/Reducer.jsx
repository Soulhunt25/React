import React from 'react'
import { useReducer } from 'react';

const Reducer = () => {

    function reducer(count,action) {
        if (action.type === "inc") {
            return count +=1;
        }
        else if (action.type === "dec") {
            return count -=1;
        }
        else if (action.type === "rec") {
            return count = 0
        }
    }
    let [count,dispatch] = useReducer(reducer,0)

  return (
    <div>
        <h3>{count}</h3>
        <button onClick={()=>dispatch({ type:"inc"})}> Incerment </button>
        <button onClick={()=>dispatch({ type:"dec"})}> Decrment </button>
        <button onClick={()=>dispatch({ type:"rec"})}> Reset </button>
    </div>
  )
}

export default Reducer
