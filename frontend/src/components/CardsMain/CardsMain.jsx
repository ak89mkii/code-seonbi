import React from 'react'
import { Link } from "react-router-dom";
import '../../App.css'
import { Card, Container, Col, Row, CardGroup, Button, Modal, Tooltip } from 'react-bootstrap';

const CardsMain = (props) => {
    return (
        <div className={props.mode2}>
            <div className={props.mode2}><br></br></div>
                <Container>
                    <Container>
                        <CardGroup>
                            <Card>                            
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
                            <Card>
                                {/* <Link to="/bug"> */}
                                    <Card.Img variant="top" src="https://images2.alphacoders.com/602/thumb-1920-602223.jpg" onClick={props.handleShow}/>
                                {/* </Link> */}
                                    <Card.Body>
                                        <Card.Title>Code References:</Card.Title>
                                        <Card.Text>
                                        Useful programming and syntax documentation, tips, and references.
                                        </Card.Text>
                                    </Card.Body>
                            </Card>
                            <p className='break'>-</p>
                            <Card>
                                {/* <Link to="/bug"> */}
                                    <Card.Img variant="top" src="https://i.ytimg.com/vi/K7Yh_YywD-U/maxresdefault.jpg" onClick={props.handleShow}/>
                                {/* </Link> */}
                                    <Card.Body>
                                        <Card.Title>Project Documentation:</Card.Title>
                                        <Card.Text>
                                        Write and refer to project docs.
                                        </Card.Text>
                                    </Card.Body>
                            </Card>
                        </CardGroup>
                    </Container>
                </Container>


                <Modal show={props.show} onHide={props.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Under Construction</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>This section is currently under construction.</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>

            <div className={props.mode2}><br></br></div>
        </div>
    )
}

export default CardsMain