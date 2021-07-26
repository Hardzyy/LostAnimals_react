import React from "react";

const contain = {
    width: "auto",
    height: "450px",
    margin: "1%"
}

export default function Todoitem({anno}){
    return (
        <div style={contain}>
            <div className="container" style={{width: "450px", height:"450px", float:"left"}}>
                <img className="image"
                     src={anno.img_url}
                     alt="Not loaded"
                />
                <div className="overlay">
                    <div className="text"><a className="lost" href={anno.source_url} target={"_blank"}><strong>Нашли питома?</strong></a></div>
                </div>
                <p style={{textAlign:"center"}}>{anno.date}</p>
            </div>
                <div style={{width: "450px", height:"450px", float:"left"}}>
                    <h4>{anno.title}</h4>
                    <p><span>Порода: {anno.type}</span><span> Квартал: {anno.square}</span></p>
                    <div>{anno.description}</div>
                </div>
                <div>
                    Some content
                </div>
            <div>

            </div>
        </div>
    );
}