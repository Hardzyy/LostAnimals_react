import React from "react";
import {YMaps, Map, Polygon} from "react-yandex-maps";

const contain = {
    width: "auto",
    height: "450px",
    margin: "1%"
}

export default function ItemFeed({anno}){
    const mapState = {
        center: [55.76, 37.64],
        zoom: 10
    };

    const POLYGON_COORDS = [
        [[55.75, 37.8], [55.8, 37.9], [55.75, 38.0], [55.7, 38.0], [55.65, 37.9], [55.7, 37.8]]
    ];

    return (
        <div style={contain}>
            <div className="container" style={{width: "450px", height:"450px", float:"left"}}>
                <img className="image"
                     src={anno.img_url}
                     alt="Not loaded"
                />
                <div className="overlay">
                    <div className="text"><a className="lost" href={anno.source_url} target={"_blank"}><strong>Нашли питомца?</strong></a></div>
                </div>
                <p style={{textAlign:"center"}}>{anno.date}</p>
            </div>
                <div style={{width: "450px", height:"450px", float:"left"}}>
                    <h4>{anno.title}</h4>
                    <p><span>Порода: {anno.type}</span><span> Квартал: {anno.square}</span></p>
                    <div>{anno.description}</div>
                </div>
                <div style={{float:"right", margin:"auto"}}>
                    <YMaps>
                        <div>Территория вблизи места потери</div>
                        <Map defaultState={mapState}>
                            <Polygon
                                geometry={POLYGON_COORDS}
                                options={{
                                    fillColor: "#cf453c",
                                    strokeColor: "#000000",
                                    opacity: 0.5,
                                    strokeWidth: 5,
                                    strokeStyle: "shortdash"
                                }}
                            />
                        </Map>
                    </YMaps>
                </div>
            <div>
            </div>
        </div>
    );
}