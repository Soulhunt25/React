// rafc  -> Shortcut


// import React from 'react'
// import './App.css';

// const App = () => {
//   let arr = [1,2,3,4,5,6,7,8,9]
//   return (
//     <div id = '' className = 'hello'>
//       {
//         arr.map( (a) =>{
//           return(
//             <div>
//             <li> {a} </li>
//             </div>
//           )
//         })
//       }
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Home from './Home'

// const App = () => {
//   let a = 25
//   const b = 'Pranjal Singh...'
//   return (
//     <div>
//       <Home id={a} name = {b}/>
//     </div>
//   )
// }

// export default App

/////////////////////////////////////////////////////////////////////
// import React, { useState } from 'react'

// const App = () => {
//   let [count,SetCount] = useState(0);
//   let [color,SetColor] = useState('red')

  
//   function fun1 () {
//     SetCount(count+1);
//   }

//   function fun2 () {
//     SetColor('green')
//   }

//   function fun3 () {
//     SetColor('blue')
//   }

//   return (
//     <div style={{backgroundColor:color,height:'100vh',width:'100vh'}}>
//       <p>{count}</p>
      
//       <button onClick={fun1}>Button</button>
//       <button onClick={fun2}>Button green</button>
//       <button onClick={fun3}>Button red</button>
//     </div>
//   )
// }

// export default App
//////////////////////////////////////////////////////////////////////////////

// import React, { useState } from 'react'


// const App = () => {
//     let [Time,SetTime] = useState();
//     setInterval(()=>{
//         let samay = new Date().toLocaleTimeString()
//         SetTime(samay)
//     })

//   return (
//     <div>
//       <h1>{Time}</h1>
//     </div>
//   )
// }

// export default App


//////////////////////////////////////////////////////////////////////////////


import React from 'react'
import Input from './Input'
import ToDoList from './ToDoList'

const App = () => {
  return (
    <div>
      {/* <Input/> */}
      <ToDoList/>
    </div>
  )
}

export default App
