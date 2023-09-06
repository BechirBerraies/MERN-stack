import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  const[newTodo,SetNewTodo]=useState("");
  const[todos,setTodos]=useState([]);

  const handlenewtodosubmit = (event ) =>{
    event.preventDefault();

    if(newTodo.length == 0){
      return;
    }
    const todoItem = {
      text: newTodo,
      complete: false
    };


    setTodos([...todos,newTodo]);
    SetNewTodo("");
  }
  const handlenewtododelete= (delIdx) =>{
    const filterdTodos = todos.filter((todo,i)=>{
      return i !== delIdx;
    });
    setTodos(filterdTodos);
  }
  const handletoggleComplete= (idx)=>{
    const UpdatedTodos= todos.map((todo,i)=>{
      if (idx === i ){
        todo.complete = !todo.complete;
      }
      return todo;
    });
    setTodos(UpdatedTodos)
  }

  return (
    <>
     <form onSubmit={(event)=>{ 
        handlenewtodosubmit(event)
     }}>



      <input onChange={(event)=>{
        SetNewTodo(event.target.value);
      }} type="text" value={newTodo}/>

      <div>
        <button>Add</button>
      </div>

     </form>
     <hr />

     {
      todos.map((todo,i)=>{
        const todoClasses = ["bold","italic"];
 
        if (todo.complete){
          todoClasses.push("line-through");
        }


        return(
          <div key={i}>
          <input onChange={(event)=>{
            handletoggleComplete(i);
          }}
          checked={todo.complete} type="checkbox"
          
          
          
          ></input>
          <span className={todoClasses.join(" ")}>{todo}</span>
          <button onClick={(event)=>{
            handlenewtododelete(i)
          }}
          
          style={{marginLeft: "20px"}}
          >Delete
          
          
          </button>
        </div>
      );
      })
     }
    </>
  )
}

export default App
