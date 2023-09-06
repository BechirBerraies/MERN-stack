import React from 'react'


const Display = ({todolist}) => {



  return (
    <div>
    {todolist.map((todo,idx)=>
        <div key={idx}>
            
            <span 
            style={todo.is_confirmed?{textDecoration:"line-through"}:
            {textDecoration:"none"}
            }>{todo.content}
            
            </span>
            <input type="checkbox" checked={todo.is_confirmed } />
            <button>Delete</button>

        </div>)}
    </div>
  )
}

export default Display