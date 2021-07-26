import React from "react";
import Todolist from "./ToDo/Todolist";
import Navbarr from "./Navbarr";
import annos from "./Аnnouncement";

function App() {
  return (
      <div>
          <Navbarr/>
          <div className="wrapper">
            <Todolist annos={annos}/>
          </div>
      </div>
  )
}

export default App;
