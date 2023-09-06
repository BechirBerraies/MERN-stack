import React from 'react'


const Display = ({todolist,DeleteTodo,SetTodolist}) => {



  return (
    <div>
    {todolist.map((todo,idx)=>
        <div key={idx}>
            
            <span 
            style={todo.is_confirmed?{textDecoration:"line-through"}:
            {textDecoration:"none"}
            }>{todo.content}
            
            </span>
            <input type="checkbox" 
            checked={todo.is_confirmed } 
            onChange={(e)=>{
                const Updatedlist = [...todolist] 
                Updatedlist[idx].is_confirmed = ! Updatedlist[idx].is_confirmed
                SetTodolist(Updatedlist);
            }}
            
            />
            
            
            <button
            onClick={()=>DeleteTodo(idx)}
            >Delete</button>

        </div>)}
    </div>
  )
}

export default Display