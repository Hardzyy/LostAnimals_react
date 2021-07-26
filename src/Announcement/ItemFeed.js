import React from "react";
import {YMaps, Map, Polygon} from "react-yandex-maps";
import {Container, Row, Col} from "reactstrap";

export default function ItemFeed({anno}){
    const mapState = {
        center: anno.center,
        zoom: 14
    };

    const POLYGON_COORDS = [
        anno.cords
    ];

    return (
        <Container style={{margin: "2%"}}>
            <Row>
                <Col>
                    <img className="image"
                         src={anno.img_url}
                         alt="Not loaded"
                    />
                    <p style={{textAlign:"center"}}>{anno.date}</p>
                </Col>
                <Col>
                    <h4>{anno.title}</h4>
                    <p><span>Порода: {anno.type}</span><span> Квартал: {anno.square}</span></p>
                    <div>{anno.description}</div>
                </Col>
                <Col>
                    <YMaps>
                        <div>Территория вблизи места потери</div>
                        <Map defaultState={mapState} width="80%" heigth="80%">
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
                </Col>
            </Row>
        </Container>
    );
}