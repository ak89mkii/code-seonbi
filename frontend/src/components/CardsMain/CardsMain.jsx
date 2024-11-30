import React from 'react'
import { Link } from "react-router-dom";
import '../../App.css'
import { Card, Container, CardGroup, Button, Modal, } from 'react-bootstrap';
import django from '../../Img/django.png'
import python from '../../Img/python.png'
import drf from '../../Img/drf.png'
import heroku from '../../Img/heroku.png'
import react from '../../Img/react.png'
import rn from '../../Img/rn.png'
import git from '../../Img/git.png'
import db from '../../Img/db.png'
import terminal from '../../Img/terminal.png'
import link from '../../Img/link.png'
import ps from '../../Img/ps.png'

const CardsMain = (props) => {
    return (
        <div className={props.mode2}>
            <div className={props.mode2}><br></br></div>
                <Container>
                    <Container>
                        <CardGroup className='cardGroup'>
                            <Card border={props.cardMode}>                            
                                {/* <Link to="/bug"> */}
                                <Card.Img id='bugImage' variant="top" src='https://qph.cf2.quoracdn.net/main-qimg-c7bf8a644276ec5ad35d658a19bc938e' onClick={props.handleShow}/>
                                {/* </Link> */}
                                <Card.Body>
                                    <Card.Title><div className='title2'>Bug Tracker</div></Card.Title>
                                    <Card.Text>
                                        Keep track of your programming bugs in an organized and efficicent manner.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <p className='break'>-</p>
                            <Card>
                                <Link to="/cli_zsh">
                                <Card.Img variant="top" src={terminal} onClick={props.handleShow}/>
                                </Link>
                                <Card.Body>
                                    <Card.Title><div className='title2'>CLI | MacOS (Zsh)</div></Card.Title>
                                    <Card.Text>
                                    Command Line Interface Commands                                    
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <p className='break'>-</p>
                            <Card>
                                <Link to="/cli_bash">
                                <Card.Img variant="top" src={terminal} onClick={props.handleShow}/>
                                </Link>
                                <Card.Body>
                                    <Card.Title><div className='title2'>CLI | Linux (Bash)</div></Card.Title>
                                    <Card.Text>
                                    Command Line Interface Commands                                    
                                    </Card.Text>
                                </Card.Body>
                            </Card>                            
                            </CardGroup>

                            <CardGroup className='cardGroup'>
                            <Card>
                                <Link to="/cli_ps">
                                <Card.Img variant="top" src={ps} onClick={props.handleShow}/>
                                </Link>
                                <Card.Body>
                                    <Card.Title><div className='title2'>CLI | Command Prompt | PowerShell</div></Card.Title>
                                    <Card.Text>
                                    Command Line Interface Commands                                    
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <p className='break'>-</p>
                            <Card>
                                <Link to="/django">
                                <Card.Img variant="top" src={django} onClick={props.handleShow}/>
                                </Link>
                                <Card.Body>
                                    <Card.Title><div className='title2'>Django</div></Card.Title>
                                    <Card.Text>
                                    Full-Stack Framework | <b>Frontend</b>: Bootstrap | <b>Database</b>: PostgreSQL | <b>Deployment</b>: Heroku
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <p className='break'>-</p>
                            <Card>
                                {/* <Link to="/bug"> */}
                                <Card.Img variant="top" src={drf} onClick={props.handleShow}/>
                                {/* </Link> */}
                                <Card.Body>
                                    <Card.Title><div className='title2'>Django REST FW</div></Card.Title>
                                    <Card.Text>
                                    Full-Stack Framework | <b>Frontend</b>: Bootstrap, React.js |<b>Database</b>: PostgreSQL | <b>Deployment</b>: Heroku 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>

                        <CardGroup className='cardGroup'>
                            <Card>                            
                                {/* <Link to="/bug"> */}
                                <Card.Img variant="top" src={git} onClick={props.handleShow}/>
                                {/* </Link> */}
                                <Card.Body>
                                    <Card.Title><div className='title2'>Git | GitHub</div></Card.Title>
                                    <Card.Text>
                                        Version Control | Remote Repository
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <p className='break'>-</p>
                            <Card>
                                {/* <Link to="/bug"> */}
                                <Card.Img variant="top" src={heroku} onClick={props.handleShow}/>
                                {/* </Link> */}
                                <Card.Body>
                                    <Card.Title><div className='title2'>Heroku</div></Card.Title>
                                    <Card.Text>
                                    Hosting Platform | Heroku CLI
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <p className='break'>-</p>
                            <Card>
                                {/* <Link to="/bug"> */}
                                <Card.Img variant="top" src={db} onClick={props.handleShow}/>
                                {/* </Link> */}
                                <Card.Body>
                                    <Card.Title><div className='title2'>PostgreSQL</div></Card.Title>
                                    <Card.Text>
                                    Relational Database | Shell Commands
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>

                        <CardGroup className='cardGroup'>
                            <Card>                            
                                {/* <Link to="/bug"> */}
                                <Card.Img variant="top" src={python} onClick={props.handleShow}/>
                                {/* </Link> */}
                                <Card.Body>
                                    <Card.Title><div className='title2'>Python 3</div></Card.Title>
                                    <Card.Text>
                                        General Purpose Programming Language | Terminal Commands | Virtual Environment Commands
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <p className='break'>-</p>
                            <Card>
                                {/* <Link to="/bug"> */}
                                <Card.Img variant="top" src={react} onClick={props.handleShow}/>
                                {/* </Link> */}
                                <Card.Body>
                                    <Card.Title><div className='title2'>React.js</div></Card.Title>
                                    <Card.Text>
                                    Front-End JavaScript Library
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <p className='break'>-</p>
                            <Card>
                                {/* <Link to="/bug"> */}
                                <Card.Img variant="top" src={rn} onClick={props.handleShow}/>
                                {/* </Link> */}
                                <Card.Body>
                                    <Card.Title><div className='title2'>React Native</div></Card.Title>
                                    <Card.Text>
                                    JavaScript Framework for Android and iOS Native Applications
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