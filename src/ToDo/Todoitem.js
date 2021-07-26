import React from "react";

const contain = {
    width: "auto",
    height: "450px",
    margin: "1%"
}

const image = {
    objectFit: "cover",
    borderRadius: "5px",
    width: "400px",
    height: "400px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
}

export default function Todoitem({anno}){
    return (
        <div style={contain}>
            <div style={{width: "450px", height:"450px", float:"left"}}>
                <img style={image}
                     src={anno.url}
                     alt="new"
                />
            </div>
                <h4>{anno.title}</h4>
                <p>Порода: {anno.type} Квартал: {anno.square}</p>
            <div>

            </div>
        </div>
    );
}