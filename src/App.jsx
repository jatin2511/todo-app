import React,{useState} from 'react';
import tododisplay from "./tododisplay";
function App() {
  const [todos,setTodos]=useState([]);
  const [newtodo,setNewTodo]=useState('');
  function addtodo(){
  
      setTodos([...todos,newtodo]);
      setNewTodo('');
      
  }
      function deletetodo(index){
    const newTodo=todos.filter((abc,indextodo)=>indextodo!==index);
    setTodos(newTodo)
  }
  return (
    <div className='flex flex-col items-center justify-center m-10 text-2xl'>
      <div className='flex gap-4 mb-6'>
        <abcd/>
        <input className=' border-2 w-96' value={newtodo} onChange={(e)=>{setNewTodo(e.target.value)}}></input>
        <button className='border-1 bg-red-800 rounded-xl w-20 px-3 font-semibold text-white' onClick={addtodo}>Add Todo</button>
      </div>
      <div className='flex gap-4 flex-col'>{todos.map((todo,index)=>
      //<tododisplay todo={todo} index={index} deletetodo={deletetodo}/>  
      <div className='flex justify-between text-black gap-10'>
      <div>
   {todo}</div>
   <button className='bg-red-900 border-2 text-white rounded-xl px-3 py-1' onClick={()=>deletetodo(index)}>deletetodo</button>
  </div>
       
    )
      }</div>
      
      </div>
  )
}

export default App