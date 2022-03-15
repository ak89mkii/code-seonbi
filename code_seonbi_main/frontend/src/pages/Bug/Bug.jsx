import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Card, Button, Row, Container } from 'react-bootstrap';
import Nav from '../../components/Nav/Nav.jsx'

class Test extends Component {
    state = {
        //  Temporary array before JSON data mapped from fetch.
        newData: []
    }

    // Function: Sets state to data from backend Bug model.
    // Need arrow function to use setState.
    getBugList = () => {
        fetch("/backend/bug-list")
            .then((response) => response.json())
            .then((data) => {
                this.setState ({
                    // "Bug" model data.
                    newData: data
                })
            })
    }

    render() {
        return (
            <div>
                <Nav />
                <Button onClick={this.getBugList()}>GET Request</Button>
                
                { this.state.newData.map((list) => (
                    <div>
                    <br></br>
                    <br></br>
                    <Container>
                        <Row className="justify-content-md-center">
                            <Card style={{ width: '40rem' }} border="dark">
                                <Card.Header as="h5">Project: {JSON.stringify(list.project)}</Card.Header>
                                <Card.Body>
                                <Card.Text>ID: {JSON.stringify(list.id)}</Card.Text>
                                <p>Status: {JSON.stringify(list.status)}</p>
                                <p>Description: {JSON.stringify(list.description)}</p>
                                <p>Error: {JSON.stringify(list.error)}</p>
                                <p>Links: {JSON.stringify(list.links)}</p>
                                <p>Solution: {JSON.stringify(list.solution)}</p>
                                <p>Timestamp: {JSON.stringify(list.timestamp)}</p>
                                </Card.Body>
                                {/* <Card.Img variant="bottom" src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto,c_pad,dpr_3.0,f_auto,q_auto,w_500/b_rgb:ffffff/v1/ncom/en_US/games/switch/s/sonic-mania-switch/hero" /> */}
                                <Card.Footer className="text-center">{JSON.stringify(list.id)}</Card.Footer>
                            </Card>
                        </Row>
                    </Container>
                    <br></br>
                    <br></br>
                   </div>
                ))}
            </div>
        )
    }
}

export default Test;