import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Card, Button, Row, Container, Form } from 'react-bootstrap';
import Nav from '../../components/Nav/Nav.jsx'

class BugAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
        //  Temporary array before JSON data mapped from fetch.
            project: 'test',
            // technology: 'test',
            // status: 'test', 
            description: 'test' ,
            error:  'test', 
            links: 'test', 
            solution: 'test', 
            notes: 'test', 
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
            [name]: value
        });
    }
  

    // Function: POST request for "BugAdd" form.
    postBugList = (e) => {
        e.preventDefault();
        const bug = { project: this.state.project, description: this.state.description, error: this.state.error, links: this.state.links, solution: this.state.solution, notes: this.state.notes, };
        console.log(bug)

        fetch("/backend/bug-add", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(bug)
        })
    }

    render() {
        return (
            <div>
                <Nav />
                    <div>
                    <br></br>
                    <br></br>
                    <Container>
                        <Row className="justify-content-md-center">
                            <Form 
                                // style={{ width: '40rem' }} 
                                // border="dark">
                                onSubmit={this.postBugList}
                            >
                                <Form.Group 
                                    className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Project</Form.Label>
                                    <Form.Control 
                                        name="project"
                                        type="text" 
                                        value={this.state.project}
                                        placeholder="Project" 
                                        onChange={this.handleInputChange}
                                    />
                                </Form.Group>
                                {/* <Form.Group 
                                    className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Technology</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Technology" 
                                    />
                                </Form.Group> */}
                                <button>Submit Bug</button>
                            </Form>
                        </Row>
                    </Container>
                    <br></br>
                    <br></br>
                   </div>
            </div>
        )
    }
}

export default BugAdd;