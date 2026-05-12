import React from 'react'

const Child = (handleClick) => {
    console.log("child component rendered")
  return (
    <div>
        <button className='bg-blue-500 text-white' onClick={handleClick}>click from child  </button>
    </div>
  )
}

export default React.memo (Child)