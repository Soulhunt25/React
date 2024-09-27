// rafc  -> Shortcut


// import React from 'react'.
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


// import React from 'react'
// import ToDoList from './ToDoList'

// const App = () => {
//   return (
//     <div>
//       {/* <Input/> */}
//       <ToDoList/>
//     </div>
//   )
// }

// export default App

//////////////////////////////////////////////////////////////////////////////

// import React, { useEffect, useState } from 'react';

// const App = () => {
//   const [count, setCount] = useState(0);
//   function fun1() {
//     setCount(count + 1)
//   }

//   const [city, SetCity] = useState('Bhopal');
//   function fun2() {
//     SetCity('Delhi');
//   }

//   const [api, SetApi] = useState([]);

//   useEffect(() => {
//     console.log('hello');
//     fetch('https://dummyjson.com/recipes').then((res) => {
//       return res.json();
//     }).then((data) => {
//       console.log(data, 'heh');
//       SetApi(data.recipeks);
//     })
//   }, [] );

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={fun1}>Click</button>
//       <h1>{city}</h1>
//       <button onClick={fun2}>change</button>
      
      
      
//       {
//         api.map((a) => {
//           return (<>
//             <h3>{a.id}</h3>
//             <p>{a.name}</p>
//             <img height='100px' src={a.image}/>
//           </>)
//         })
//       }
//     </div>
//   );
// }

// export default App;


//////////////////////////////////////////////////////////////////////////////

  // Routing

// import React from 'react'
// import NavBar from './NavBar'
// import Home from './Home'  
// import About from './About' 
// import Contact from './Contact'
// import ToDoList from './ToDoList'
// import { Route, Routes } from 'react-router-dom'

// const App = () => {
//   return (
//     <div>
//       <NavBar/>
//       <Routes>
//         <Route path='/' element={<Home/>} />
//         <Route path='/about' element={<About/>} />
//         <Route path='/contact' element={<Contact/>} />
//         <Route path='/list' element={<ToDoList/>} />
//       </Routes>
//     </div>
//   )
// }

// export default App


////////////////////////////////////////////////////////////

// import React from 'react'
// import NavBar from './NavBar'
// import 'bootstrap/dist/css/bootstrap.min.css';

// const App = () => {
//   return (
//     <div>
//       <NavBar/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Form from './form'

// const App = () => {
//   return (
//     <div>
//       <Form />
//     </div>
//   )
// }

// export default App
///////////////////////////////////////////////////


// import React from 'react'
// import SignUp from './SignUp'
// import LoginPage from './LoginPage'
// import { Route, Routes } from 'react-router-dom'


// const App = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path='/login' element={<LoginPage />} />
//         <Route path='/signup' element={<SignUp />} />
//         <Route path='/' element={<LoginPage />} />
//       </Routes>
//     </div>
//   )
// }

// export default App


///////////////////////////////////////////////////

import React from 'react'
import Reducer from './Reducer'

const App = () => {
  return (
    <div>
      <Reducer/>
    </div>
  )
}

export default App
