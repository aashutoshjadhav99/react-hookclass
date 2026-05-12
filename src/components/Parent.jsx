import React, { useCallback, useState } from 'react'
import Child from './Child';

const Parent = () => {
    const [count,setCount]=useState(0);
    // const handleClick=()=>{
    //     console.log("child button clicked")

    // }
    const handleClick=useCallback (()=>{
        console.log("child button clickd")
    },[])
    // ifyou want to render the child pass count in above array
  return (
    <div>
        <h2 className='text-4xl text-green-600'>{count}</h2>
        <button className='bg-gray-500 text-white' onClick={()=>setCount(count+1)}>Increment</button>
        <Child  handleClick={handleClick}/>
    </div>
  )
}

export default Parent