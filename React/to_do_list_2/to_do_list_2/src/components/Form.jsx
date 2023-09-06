import React, {useState} from 'react'

const Form = ({todolist,SetTodolist}) => {
 
    const [todo,SetTodo]= useState({content:"",is_completed:false})

  return ( 
    <div>
    <form action="">

    <input 
    onChange={(e)=>{
        console.log(todo);
        SetTodo({...todo,content:e.target.value})}}
    value={todo.conent} />



    <button style={{backgroundColor:"blue"}}>Add</button>

    </form>

    </div>
  )
}

export default Form