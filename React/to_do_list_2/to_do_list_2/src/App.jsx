import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Display from './components/Display'
import Form from './components/Form'

function App() {
  const [todolist, SetTodolist] = useState(
    [{content:"Get anything",is_confirmed:true},
  {content:"Say hi ",is_confirmed:false},
  ]
  )

  const DeleteTodo= (id)=>{
    console.log("Deleted todo",todolist[id]);
    const FiltredtodoList = todolist.filter((todo,idx)=>idx != id )
    SetTodolist(FiltredtodoList)
    console.log(FiltredtodoList);
  }

  return (
    <>
      <fieldset>
        <legend>Things I have to do</legend>
        <Form todolist={todolist} SetTodolist={SetTodolist}/>
        <Display todolist={todolist} DeleteTodo={DeleteTodo} SetTodolist={SetTodolist}/>
      </fieldset>
    </>
  )
}

export default App
