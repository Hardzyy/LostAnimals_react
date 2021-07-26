import React from "react";
import AnnoFeed from "./Announcement/AnnoFeed";
import Navbarr from "./Navbarr";
import annos from "./Аnnouncement";

function App() {
  return (
      <div>
          <Navbarr/>
          <div className="wrapper">
            <AnnoFeed annos={annos}/>
          </div>
      </div>
  )
}

export default App;
