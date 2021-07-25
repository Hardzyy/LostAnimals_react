import React from "react";
import Todolist from "./ToDo/Todolist";

function App() {
    const todos = [
        {id:1, completed: false, title:"Купить хлеб"},
        {id:2, completed: false, title:"Купить milk"},
        {id:3, completed: false, title:"Купить cheese"},
    ]
  return (
      <div className="wrapper">
          <h1>React first app</h1>
          <Todolist todos={todos}/>
      </div>
  )
}

export default App;
