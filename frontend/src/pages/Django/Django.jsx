import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Card, Button, Row, Container, Alert } from 'react-bootstrap';
import Nav from '../../components/Nav/Nav.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import sun from '../../Img/sun.png'
import moon from '../../Img/moon.png'

class Django extends Component {
    state = {
        //  Temporary array before JSON data mapped from fetch.
        newData: [],
        // Dark mode state.
        open: false,
        mode: 'dark',
        mode2: 'darkNoText',
        icon: moon,
    }

    toggleMode = () => {
        if (this.state.mode == 'light') {
            this.setState({
                mode: 'dark',
                mode2: 'darkNoText',
                icon: moon,
            })
        } else if (this.state.mode == 'dark') {
            this.setState({
                mode: 'light',
                mode2: 'lightNoText',
                icon: sun,
            })
        }
    }

    // Function: Sets state to data from backend Bug model.
    // Need arrow function to use setState.
    getCommandList = () => {
        fetch("/backend/command-list")
            .then((response) => response.json())
            .then((data) => {
                this.setState ({
                    // "Bug" model data.
                    newData: data
                })
            })
    }

    // Function: Sends delete request to backend based on id.
    deleteCommandList  = (id) => {
        fetch('/backend/command-delete/' + id, {method: 'DELETE',})
            .then(res => {
                return res.json()
            }) 
            .then(data => console.log(data))
            .then(window.location.reload())
    }

    componentDidMount() {
        this.getCommandList();
    }

    render() {
        return (
            <div className={this.state.mode2}>
                <div className='halo2'>         
                    <Nav 
                        open={this.state.false}
                        mode={this.state.mode}
                        icon={this.state.icon}
                        toggleMode={this.toggleMode}
                    />
                    <figure class="text-center">
                        <div className={this.state.mode}>
                            <h1 className='title'>Django References and Commands</h1>
                            <blockquote class="blockquote">
                                <p className='title2Alt'>Terminal Commands, Documentation Links, and References</p>
                            </blockquote>
                        </div>
                        <Link to="/command_add"><Button>Add Command</Button></Link>
                    </figure>
                    <br></br>
                    {/* { this.getCommandList() } */}
                    { this.state.newData.filter(list => list.technology === 'Django').map((list) => (
                        <div>
                        <br></br>
                        <br></br>
                        <Container>
                            <Row className="justify-content-md-center">
                                <Card style={{ width: '40rem' }} border="dark">
                                    <Card.Header><p></p>
                                    <p><b>Description:</b> {(list.description)}</p></Card.Header>


                                    {/* Fetch test for infinite loop. */}
                                    {console.log('Fetch test for infinite loop.')}

                                    <Card.Body>                               
                                    <p><b>Command:</b></p>
                                    <Alert variant='primary'>
                                    {(list.command)}
                                    <div className="d-flex justify-content-end">
                                    <Button onClick={() => setShow(false)} variant="outline-dark">
                                        Copy
                                    </Button>
                                    </div>
                                    </Alert>
                                    <p><b>Notes:</b></p>
                                    <Alert variant='dark'>
                                    {(list.notes)}
                                    </Alert>
                                    <div className="mb-2">
                                    <Button variant="warning">Edit</Button>{' '}
                                    <Button 
                                        variant="danger" 
                                        onClick={ () => this.deleteCommandList(list.id) }
                                    >
                                        Delete
                                    </Button>{' '}
                                    </div>
                                    </Card.Body>
                                    {/* <Card.Img variant="bottom" src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto,c_pad,dpr_3.0,f_auto,q_auto,w_500/b_rgb:ffffff/v1/ncom/en_US/games/switch/s/sonic-mania-switch/hero" /> */}
                                    <Card.Footer className="text-center"><p>{(list.technology)}</p><p>
                                    {(list.timestamp)}</p>
                                    </Card.Footer>
                                </Card>
                            </Row>
                        </Container>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                    ))}
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Django;