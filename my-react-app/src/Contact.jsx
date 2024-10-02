// import React from 'react'

// const Contact = () => {
//   return (
//     <div>
//       Contact
//     </div>
//   )
// }

// export default Contact

//////////////////////////////////////////////////////////////////

import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'

const Contact = () => {
  
  let [state,setState] = useState('');
  let data = useRef(0);


  useEffect(()=>{
    data.current= data.current + 1;
  })
  
  return (
    <div>
      <input type="text" value={state} onChange={e=>setState(e.target.value)}/>
      <br /><br />
      <h1>{data.current}</h1>
    </div>
  )
}

export default Contact
