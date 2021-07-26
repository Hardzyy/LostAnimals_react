import React from "react";

export default function Todoitem({ anno, index }){
    return (
        <div>
            <img
                src={anno.url}
                alt="new"
            />
        </div>
    );
}