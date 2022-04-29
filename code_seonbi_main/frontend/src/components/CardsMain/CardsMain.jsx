import React from 'react'
import { Link } from "react-router-dom";
import '../../App.css'
import { Card, Container, Col, Row, CardGroup } from 'react-bootstrap';

const CardsMain = (props) => {
    return (
        <div className={props.mode2}>
            <div className={props.mode2}><br></br></div>
            <Container>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <CardGroup>
                            <Card style={{ width: '18rem' }}>                            
                            <Link to="/bug">
                                <Card.Img variant="top" src="https://www.comingsoon.net/assets/uploads/2021/05/dragon-ball.jpg" />                              
                            </Link>
                                <Card.Body>
                                    <Card.Title>Bug Tracker:</Card.Title>
                                    <Card.Text>
                                    Keep track of your programming bugs in an organized and efficicent manner.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <p className='break'>-</p>
                            <Card style={{ width: '18rem' }}>
                            <Link to="/bug">
                                <Card.Img variant="top" src="https://images2.alphacoders.com/602/thumb-1920-602223.jpg" />
                            </Link>
                                <Card.Body>
                                    <Card.Title>Code References:</Card.Title>
                                    <Card.Text>
                                    Useful programming and syntax documentation, tips, and references.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <p className='break'>-</p>
                            <Card style={{ width: '18rem' }}>
                            <Link to="/bug">
                                <Card.Img variant="top" src="https://i.ytimg.com/vi/K7Yh_YywD-U/maxresdefault.jpg" />
                            </Link>
                                <Card.Body>
                                    <Card.Title>Project Documentation</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </CardGroup>
                        </Col>
                    </Row>               
                </Container>
            <div className={props.mode2}><br></br></div>
        </div>
    )
}

export default CardsMain