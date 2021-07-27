import React from "react";
import {Container, Row, Col} from "reactstrap";
import{useMediaQuery} from "react-responsive";
import background from './text_back.png';
import Ymapsmy from "./Ymapsmy";

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1367 })
    return isDesktop ? children : null
}
const LowResDesktop = ({ children }) => {
    const isDesktop = useMediaQuery({minWidth: 992, maxWidth: 1367 })
    return isDesktop ? children : null
}

const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
}

export default function ItemFeed({anno}){
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
                        </Col>
                        <Col style={{ backgroundImage: `url(${background})` }}>
                            <h4>{anno.title}</h4>
                            <p>Порода: {anno.type}</p>
                            <p style={{textAlign:"center"}}>Дата объявления: {anno.date}</p>
                            <div>{anno.description}</div>
                        </Col>
                        <Col style={{position: "relative"}}>
                            <Ymapsmy anno={anno} wid="400px" hei="400px"/>
                        </Col>
                    </Row>
                </Container>
            </Desktop>
            <LowResDesktop>
                <Container style={{margin: "2%"}}>
                    <Row>
                        <Col>
                            <img className="image"
                                 style={{width:"300px", height:"300px"}}
                                 src={anno.img_url}
                                 alt="Not loaded"
                            />
                        </Col>
                        <Col style={{ backgroundImage: `url(${background})` }}>
                            <h4>{anno.title}</h4>
                            <p>Порода: {anno.type}</p>
                            <p style={{textAlign:"center"}}>Дата объявления: {anno.date}</p>
                            <div>{anno.description}</div>
                        </Col>
                        <Col style={{position: "relative"}}>
                            <Ymapsmy anno={anno} wid="300px" hei="300px"/>
                        </Col>
                    </Row>
                </Container>
            </LowResDesktop>
            <Mobile>
                <Container style={{margin: "2%"}}>
                        <Row>
                            <img className="image"
                                 style={{width:"350px", height:"350px"}}
                                 src={anno.img_url}
                                 alt="Not loaded"
                            />
                        </Row>
                        <Row style={{ backgroundImage: `url(${background})` }}>
                            <h4>{anno.title}</h4>
                            <p>Порода: {anno.type}</p>
                            <p style={{textAlign:"center"}}>Дата объявления: {anno.date}</p>
                            <div>{anno.description}</div>
                        </Row>
                        <Row>
                            <div style={{width:"350px", height:"400px"}}>
                                <Ymapsmy anno={anno} wid="100%" hei="100%"/>
                            </div>
                        </Row>
                </Container>
            </Mobile>
        </div>
    );
}