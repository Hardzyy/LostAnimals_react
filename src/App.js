import React from "react";
import Todolist from "./ToDo/Todolist";
import Navbarr from "./Navbarr";

function App() {


    const todos = [
        {id:1, completed: false, title:"Купить хлеб"},
        {id:2, completed: false, title:"Купить milk"},
        {id:3, completed: false, title:"Купить cheese"},
    ]
  return (
      <div>
          <Navbarr/>
          <div className="wrapper">
              <h1>React first app</h1>
              <Todolist todos={todos}/>
          </div>
      </div>
  )
}

export default App;
