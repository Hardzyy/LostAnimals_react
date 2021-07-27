import React from "react";
import {YMaps, Map, Polygon} from "react-yandex-maps";
import {Container, Row, Col} from "reactstrap";
import{useMediaQuery} from "react-responsive";

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1367 })
    return isDesktop ? children : null
}

const LowResDesktop = ({ children }) => {
    const isDesktop = useMediaQuery({ maxWidth: 1367 })
    return isDesktop ? children : null
}

const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isTablet ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
}
// const Default = ({ children }) => {
//     const isNotMobile = useMediaQuery({ minWidth: 768 })
//     return isNotMobile ? children : null
// }

export default function ItemFeed({anno}){
    const mapState = {
        center: anno.center,
        zoom: 14
    };

    const POLYGON_COORDS = [
        anno.cords
    ];

    return (
        <div>
            <Desktop>
                <Container style={{margin: "2%"}}>
                    <Row>
                        <Col>
                            <img className="image"
                                 style={{width:"400px", height:"400px"}}
                                 src={anno.img_url}
                                 alt="Not loaded"
                            />
                            <p style={{textAlign:"center"}}>{anno.date}</p>
                        </Col>
                        <Col>
                            <h4>{anno.title}</h4>
                            <p>Порода: {anno.type}</p>
                            <div>{anno.description}</div>
                        </Col>
                        <Col>
                            <YMaps>
                                <div>Территория вблизи места потери</div>
                                <Map defaultState={mapState} width="400px" height="400px">
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
            </Desktop>
            <LowResDesktop>Low res desk</LowResDesktop>
            <Tablet>Tablet</Tablet>
            <Mobile>
                <Container style={{margin: "2%"}}>
                        <Row>
                            <img className="image"
                                 src={anno.img_url}
                                 alt="Not loaded"
                            />
                            <p style={{textAlign:"center"}}>{anno.date}</p>
                        </Row>
                        <Row>
                            <h4>{anno.title}</h4>
                            <p>Порода: {anno.type}</p>
                            <div>{anno.description}</div>
                        </Row>
                        <Row>
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
                        </Row>
                </Container>
            </Mobile>
            {/*<Default>Not mobile (desktop or laptop or tablet)</Default>*/}
        </div>

    );
}