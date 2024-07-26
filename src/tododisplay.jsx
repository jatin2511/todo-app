import React from 'react'

function tododisplay({todo,index,deletetodo}) {
  return (
    <div className='text-black'>
        <div>
     
     {todo}</div>
     <button className='bg-red-900 border-2 rounded-xl px-3 py-1' onClick={()=>deletetodo(index)}>deletetodo</button>
    </div>
  )
}

export default tododisplay;