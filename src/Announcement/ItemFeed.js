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
    const isMobile = useMediaQuery({minWidth:300, maxWidth: 600 })
    return isMobile ? children : null
}

const Tablet = ({ children }) => {
    const isMobile = useMediaQuery({minWidth:600, maxWidth: 992 })
    return isMobile ? children : null
}

export default function ItemFeed({anno}){
    return (
        <div style={{background:"#CFB6D7"}}>
            <Desktop>
                <Container style={{marginTop: "3%"}}>
                    <Row>
                        <Col>
                            <img className="image"
                                 style={{width:"400px", height:"400px"}}
                                 src={anno.img_url}
                                 alt="Not loaded"
                            />
                        </Col>
                        <Col style={{ backgroundImage: `url(${background})`}}>
                            <h4 itemID="opa">{anno.title}</h4>
                            <p>Порода: {anno.type}</p>
                            <p style={{textAlign:"center"}}>Дата объявления: {anno.date}</p>
                            <div>{anno.description}</div>
                            <p style={{textAlign:"center"}}>На карте отображен район, в котором предположительно находиться питомец.</p>
                            <div style={{position:"absolute", bottom:"0px"}}>
                                <a style={{textDecoration:"none",position:"center"}} href={anno.source_url}>Нашли потеряшку? Дайте владельцу знать!</a>
                            </div>
                        </Col>
                        <Col style={{position: "relative"}}>
                            <div style={{width:"400px", height:"400px", marginLeft:"auto", marginRight:"auto"}}>
                                <Ymapsmy anno={anno} wid="100%" hei="100%"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Desktop>
            <LowResDesktop>
                <Container style={{marginTop: "2%"}}>
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
                            <p style={{textAlign:"center"}}>На карте отображен район, в котором предположительно находиться питомец.</p>
                            <div style={{position:"absolute", bottom:"0px"}}>
                                <a style={{textDecoration:"none",position:"center"}} href={anno.source_url}>Нашли потеряшку? Дайте владельцу знать!</a>
                            </div>
                        </Col>
                        <Col style={{position: "relative"}}>
                            <div style={{width:"300px", height:"300px", marginLeft:"auto", marginRight:"auto"}}>
                                <Ymapsmy anno={anno} wid="100%" hei="100%"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </LowResDesktop>
            <Tablet>
                <Container style={{marginTop: "2%"}}>
                    <Row>
                        <img className="image"
                             style={{width:"500px", height:"500px"}}
                             src={anno.img_url}
                             alt="Not loaded"
                        />
                    </Row>
                    <Row style={{ backgroundImage: `url(${background})` }}>
                        <h4>{anno.title}</h4>
                        <p>Порода: {anno.type}</p>
                        <p style={{textAlign:"center"}}>Дата объявления: {anno.date}</p>
                        <div>{anno.description}</div>
                        <p style={{textAlign:"center"}}>На карте отображен район, в котором предположительно находиться питомец.</p>
                        <a style={{textDecoration:"none"}} href={anno.source_url}>Нашли потеряшку? Дайте владельцу знать!</a>
                    </Row>
                    <Row>
                        <div style={{width:"500px", height:"500px", marginLeft:"auto", marginRight:"auto"}}>
                            <Ymapsmy anno={anno} wid="100%" hei="100%"/>
                        </div>
                    </Row>
                </Container>
            </Tablet>
            <Mobile>
                <Container style={{marginTop: "2%"}}>
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
                            <p style={{textAlign:"center"}}>На карте отображен район, в котором предположительно находиться питомец.</p>
                            <a style={{textDecoration:"none"}} href={anno.source_url}>Нашли потеряшку? Дайте владельцу знать!</a>
                        </Row>
                        <Row>
                            <div style={{width:"350px", height:"400px", marginLeft:"auto", marginRight:"auto"}}>
                                <Ymapsmy anno={anno} wid="100%" hei="100%"/>
                            </div>
                        </Row>
                </Container>
            </Mobile>
        </div>
    );
}