import React from "react";
import Todoitem from "./Todoitem";

const styles = {
    ul:{
        listStyle: "none",
        margin: 0,
        padding: 0
    }
}

export default  function Todolist(props){
    return (
        <ul style={styles.ul}>
            {
                props.annos.map((anno,index)=>
                {
                    return <Todoitem  anno={anno} key={anno.id} index={index}/>
                })
            }
        </ul>
    )
}