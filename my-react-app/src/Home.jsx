// import React from 'react'

// const Home = (a) => {
//   console.log(a,'heh');
  
//   return (
//     <div>
//       {`${a.name} ${a.id}`}
//     </div>
//   )
// }

// export default Home



//////////////////////////////////////////////////////////

// import React from 'react';
// import New from './New';

// const Home = (obj) => {
  // console.log(obj);
  
//   return (
//     <div>
//       <New id={obj.id} name={obj.name}/>
//     </div>
//   )
// }

// export default Home

//////////////////////////////////////////////////////////////

import React, { useContext } from 'react'
import Context from './Context'

const Home = () => {
  let data = useContext(Context)
  return (
    <div>
      {data}
    </div>
  )
}

export default Home
