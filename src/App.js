import React from "react";
import AnnoFeed from "./Announcement/AnnoFeed";
import Navbarr from "./Navbarr";
import annos from "./Аnnouncement";
import Footer from "./Footer";

function App() {
  return (
      <div style={{background:"#ECC7D8"}}>
          <Navbarr/>
          <div className="wrapper">
            <AnnoFeed annos={annos}/>
          </div>
        <Footer>
        </Footer>
      </div>
  )
}

export default App;
