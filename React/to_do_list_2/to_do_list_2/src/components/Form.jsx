import React, {useState} from 'react'

const Form = ({todolist,SetTodolist}) => {
 
    const [todo,SetTodo]= useState({content:"",is_completed:false})
    const createTodo= (e)=>{
        e.preventDefault()
        SetTodolist([...todolist,todo])
        SetTodo({content:"",is_completed:false})
    }

  return ( 
    <div>
    <form onSubmit={createTodo}>

    <input 
    onChange={(e)=>{
        console.log(todo);
        SetTodo({...todo,content:e.target.value})}}
    value={todo.content} />



    <button 
     style={{backgroundColor:"blue"}}>Add</button>

    </form>

    </div>
  )
}

export default Form