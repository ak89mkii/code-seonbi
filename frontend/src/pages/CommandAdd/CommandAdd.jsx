import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Select, Button, Row, Container, Form } from 'react-bootstrap';
import Nav from '../../components/Nav/Nav.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import sun from '../../Img/sun.png'
import moon from '../../Img/moon.png'

class CommandAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //  Temporary array state before JSON data mapped from fetch.
            technology: 'Django',
            description: '' ,
            command: '', 
            notes: '', 
            // Dark mode state.
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
    postCommandList = (e) => {
        e.preventDefault();
        const command = { project: this.state.project, technology: this.state.technology, status: this.state.status, description: this.state.description, error: this.state.error, links: this.state.links, command: this.state.command, notes: this.state.notes, };
        console.log(command)

        fetch("/backend/command-add", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(command)
        })

        window.location.href = "/"
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
                        <h1 className='title'>Add Command Form</h1>
                        <blockquote class="blockquote">
                            <p className='title2Alt'>Terminal Commands, Documentation Links, and References</p>
                        </blockquote>
                        <br></br>
                        <p>Write terminal command info in the fields below.</p>
                    </div>
                    <Link to="/django"><Button>View Django Commands</Button></Link>
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
                                onSubmit={this.postCommandList}
                            >
                                <label>Technology:</label>
                                <Form.Group>
                                <select 
                                    className='dropdown'
                                    onChange={(e) => this.setState({ technology: e.target.value })}
                                >
                                    <option value="Django">Django</option>
                                    <option value="Django REST Framework">Django REST Framework</option>
                                    <option value="JavaScript (ES9)">JavaScript (ES9)</option>
                                    <option value="MongoDB">MongoDB</option>
                                    <option value="PostgreSQL">PostgreSQL</option>
                                    <option value="Python 3">Python 3</option>
                                    <option value="React.js">React.js</option>
                                    <option value="React Native">React Native</option>
                                </select>
                                </Form.Group>                             
                                <Form.Group 
                                    className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Description:</Form.Label>
                                    <Form.Control
                                        name="description"
                                        type="text" 
                                        value={this.state.description}
                                        placeholder="Write project description here..." 
                                        onChange={this.handleInputChange}
                                    />
                                </Form.Group>
                                <Form.Group 
                                    className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Command:</Form.Label>
                                    <Form.Control
                                        as="textarea" rows={3} 
                                        name="command"
                                        type="text" 
                                        value={this.state.command}
                                        placeholder="Write terminal command here..." 
                                        onChange={this.handleInputChange}
                                    />
                                </Form.Group>
                                <Form.Group 
                                    className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Notes:</Form.Label>
                                    <Form.Control
                                        as="textarea" rows={3} 
                                        name="notes"
                                        type="text" 
                                        value={this.state.notes}
                                        placeholder="Write notes here..." 
                                        onChange={this.handleInputChange}
                                    />
                                </Form.Group>
                                <Button type="submit">Submit Command</Button>
                            </Form>
                        </Row>
                    </Container>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
                <Footer />
            </div>
        )
    }
}

export default CommandAdd;