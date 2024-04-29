import React, { Component } from 'react';
import { Link, useNavigate } from "react-router-dom";
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
            technology: '',
            description: '' ,
            command: '', 
            notes: '', 
            owner: '',
            user: '',
            // Determines whether state should be rendred from localStorage check.
            check: 0,
            // Dark mode state.
            open: false,
            mode: 'dark',
            mode2: 'darkNoText',
            icon: moon,
            value:''
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
            this.handleFormSubmitDark();
        } else if (this.state.mode == 'dark') {
            this.setState({
                mode: 'light',
                mode2: 'lightNoText',
                icon: sun,
            })
            this.handleFormSubmitLight();
        }
    }

    // Save mode: light in local Storage:
    handleFormSubmitLight = () => {
        localStorage.setItem('check', 1);
        localStorage.setItem('mode', 'light');
        localStorage.setItem('mode2', 'lightNoText');
        localStorage.setItem('icon', sun);
    };

    // Save mode: dark in local Storage:
    handleFormSubmitDark = () => {
        // localStorage.setItem('check', 1);
        localStorage.setItem('mode', 'dark');
        localStorage.setItem('mode2', 'darkNoText');
        localStorage.setItem('icon', moon);
    };

    // Function: Sets state to data from backend authenticated User.
    // Need arrow function to use setState.
    getUserLoggedIn = () => {
        fetch("/backend/user-logged_in")
            .then((response) => response.json())
            .then((data) => {
                console.log(data.username)
                console.log(data.id)
                if (data.username == '') {
                    this.setState ({
                        // "User" model data.
                        user: "Not_Signed_In"
                    })
                } else {
                    this.setState ({
                        user: data.username
                    })
                }
            })
    };

    componentDidMount() {
        this.getUserLoggedIn();
        // Retreive mode in localStorage:
        const check = localStorage.getItem('check');
        this.setState({ check });
        console.log({check})

        if (check == 1) {
        // console.log("halo")

        const mode = localStorage.getItem('mode');
        this.setState({ mode });
        const mode2 = localStorage.getItem('mode2');
        this.setState({ mode2 });
        const icon = localStorage.getItem('icon');
        this.setState({ icon });
        
        }
    }

    // Function: POST request for "CommandAdd" form.
    postCommandList = (e, name) => {
        e.preventDefault();
        const command = { description: this.state.description, technology: this.state.technology, type: this.state.type, command: this.state.command, notes: this.state.notes, owner: this.state.owner};
        console.log(command)

        // Retreives the CSRF Token for protected POST.
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        let token = value.slice(12)
        console.log(token)

        fetch("/backend/command-add", {
            credentials: 'include',
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'X-CSRFToken': token},
            body: JSON.stringify(command)
        })

        // window.location.href = "/"
    }

    render() {
        // const navigate = useNavigate();
        return (
            <div className={this.state.mode}>
                <Nav 
                    open={this.state.false}
                    mode={this.state.mode}
                    icon={this.state.icon}
                    toggleMode={this.toggleMode}
                    userName={this.state.user}
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
                    <Link to={-1}><Button>View Commands</Button></Link>
                    {/* <button onClick={() => navigate(-1)}>View Commands</button> */}
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
                                        <option value="CLI | Bash">CLI | Bash</option>
                                        <option value="CLI | Command Prompt">CLI | Command Prompt</option>                                        
                                        <option value="CLI | PowerShell">CLI |  PowerShell</option>
                                        <option value="CLI | Zsh">CLI | Zsh</option>
                                        <option value="Django">Django</option>
                                        <option value="Django REST Framework">Django REST Framework</option>
                                        <option value="Git | GitHub">Git & GitHub</option>
                                        <option value="Heroku">Heroku</option>
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
                                <label>Type:</label>
                                <Form.Group>
                                    <select 
                                        className='dropdown'
                                        onChange={(e) => this.setState({ type: e.target.value })}
                                    >
                                        <option value="Command">Command</option>
                                        <option value="Documentation Link">Link</option>
                                    </select>
                                </Form.Group>  
                                <Form.Group 
                                    className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Command or Link:</Form.Label>
                                    <Form.Control
                                        as="textarea" rows={3} 
                                        name="command"
                                        type="text" 
                                        value={this.state.command}
                                        placeholder="Write terminal command or docs link here..." 
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
                                <Button type="submit">Submit</Button>
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