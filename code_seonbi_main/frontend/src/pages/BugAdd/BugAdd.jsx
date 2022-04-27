import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Card, Button, Row, Container, Form } from 'react-bootstrap';
import Nav from '../../components/Nav/Nav.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import sun from '../../Img/sun.png'
import moon from '../../Img/moon.png'

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
            open: false,
            mode: 'dark',
            mode2: 'darkNoText',
            icon: moon,
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
            <div className={this.state.mode}>
                <Nav 
                    open={this.state.false}
                    mode={this.state.mode}
                    icon={this.state.icon}
                    toggleMode={this.toggleMode}
                />
                <figure class="text-center">
                    <div>
                        <h1 className='title'>Welcome to Code Seonbi</h1>
                        <blockquote class="blockquote">
                            <p className='title2Alt'>Code References Database | Bug Tracker | Project Documentation</p>
                        </blockquote>
                        <br></br>
                        <p>Click on a card below to navigate to the corresponding section.</p>
                    </div>
                </figure>
                <br></br>
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
                                <Button type="submit">Submit Bug</Button>
                            </Form>
                        </Row>
                    </Container>
                    <br></br>
                    <br></br>
                </div>
                <Footer />
            </div>
        )
    }
}

export default BugAdd;