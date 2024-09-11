// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


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
import React, { useState } from 'react'

const App = () => {
  let [count,SetCount] = useState(0);
  let [color,SetColor] = useState('red')

  
  function fun1 () {
    SetCount(count+1);
  }

  function fun2 () {
    SetColor('green')
  }

  function fun3 () {
    SetColor('blue')
  }

  return (
    <div style={{backgroundColor:color,height:'100vh',width:'100vh'}}>
      <p>{count}</p>
      
      <button onClick={fun1}>Button</button>
      <button onClick={fun2}>Button green</button>
      <button onClick={fun3}>Button red</button>
    </div>
  )
}

export default App
