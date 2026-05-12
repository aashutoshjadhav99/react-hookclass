import { useEffect, useState } from 'react'


function ReactHooks() {
const [count,setcount]=useState(0)
const [value,setvalue]=useState()

const Increment=()=>{
  console.log("Increment")
    setcount(count+1)
}


  useEffect(()=>{
   fetch("https://jsonplaceholder.typicode.com/users").then(res=>{
    return res.json()
   }).then((data)=>{
    console.log(data)
   })
  },[value])
 

  return (
    <>
      <h2>{count}</h2>
      <button onClick={Increment}>Increase</button>
      <br/>
      <h3>{value}</h3>
      <input onInput={(e)=>setvalue(e.target.value)} placeholder='Input Text'/>
    </>
  )
}

export default ReactHooks;
