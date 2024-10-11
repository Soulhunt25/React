// import React, { useState } from 'react'

// const CustomHook = () => {

//     let [count,setCount] = useState(0);
//     const increament = () => setCount(count+1);
//     const decreament = () => setCount(count-1);

//   return {count, increament, decreament}
// }

// export default CustomHook
////////////////////////////////////////////////////////////////////////


import axios from 'axios';
import React, { useState } from 'react'

const CustomHook = () => {

    let [data,setData] = useState([])

    async function call() {
        try {
            let apiData = await axios('https://dummyjson.com/recipes');
            setData(apiData.data.recipes);
            console.log(apiData.data.recipes);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    }


  return  {call,data}
}

export default CustomHook
