import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Card, Button, Row, Container, Alert, } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Nav from '../../components/Nav/Nav.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import sun from '../../Img/sun.png'
import moon from '../../Img/moon.png'
import {CopyToClipboard} from 'react-copy-to-clipboard';

class Django extends Component {
    state = {
        // Temporary array before JSON data mapped from fetch.
        newData: [],
        user: [], 
        // Determines whether state should be rendred from localStorage check.
        check: 0,
        // Dark Mode state.
        open: false,
        mode: 'dark',
        mode2: 'darkNoText',
        icon: moon,
        value: '',
        // CopyToClipboard state.
        copied: false,
        show: 'Copy',
        showed: 'Copied',
        idCheck: undefined
    };

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
    };

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

    // Function: Sets state to data from backend Command model.
    // Need arrow function to use setState.
    getCommandList = () => {
        fetch("/backend/command-list")
            .then((response) => response.json())
            .then((data) => {
                this.setState ({
                    // "Command" model data.
                    newData: data
                })
            })
    };

    // Function: Sends update request to backend based on id.
    updateCommandList  = (id, name) => {
        // Retreives the CSRF Token for protected POST.
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        let token = value.slice(12)
        console.log(token)

        fetch('/backend/command-update/' + id, {method: 'UPDATE', headers: {'Content-Type': 'application/json', 'X-CSRFToken': token},
    })
            .then(res => {
                return res.json()
            }) 
            .then(window.location.reload())
    };

    // Function: Sends delete request to backend based on id.
    deleteCommandList  = (id, name) => {
        // Retreives the CSRF Token for protected POST.
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        let token = value.slice(12)
        console.log(token)

        fetch('/backend/command-delete/' + id, {method: 'DELETE', headers: {'Content-Type': 'application/json', 'X-CSRFToken': token},
    })
            .then(res => {
                return res.json()
            }) 
            .then(window.location.reload())
    };

    componentDidMount() {
        this.getUserLoggedIn();
        this.getCommandList();
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

    // Function: Clears then sets a timer for "add to list" message.
    componentDidUpdate() {
        if (this.state.copied == true) {
            clearTimeout(this.timer);
            this.timer = setTimeout(() => this.setState({idCheck: undefined, copied: false}), 5000)
        }
    }

    render() {
        let addCommandButton;
        if (this.state.user == 'Not_Signed_In') {
            addCommandButton = undefined;
        } else {
            addCommandButton = <Link to="/command_add"><Button>Add Command or Docs Link</Button></Link>;
        }
        
        return (
            <div className={this.state.mode2}>
                <div className='halo2'>         
                    <Nav 
                        open={this.state.false}
                        mode={this.state.mode}
                        icon={this.state.icon}
                        toggleMode={this.toggleMode}
                        userName={this.state.user}
                    />
                    <figure class="text-center">
                        <div className={this.state.mode}>
                            <h1 className='title2'>CLI  | Zsh (MacOS) References and Commands</h1>
                            <blockquote class="blockquote">
                                <p className='title2Alt'>Terminal Commands, Documentation Links, and References</p>
                            </blockquote>
                        </div>
                        {addCommandButton}
                        {/* <Link to="/command_add"><Button>Add Command or Docs Link</Button></Link> */}
                    </figure>
                    

                    {/* Section 01: Commands */}
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className={this.state.mode}>
                        <h1 className='sectTitle'>Commands:</h1>
                    </div>
                    {/* { this.getCommandList() } */}
                    { this.state.newData.filter(list => list.technology === 'CLI | Zsh' && list.type === 'Command').map((list) => (
                        <div>
                        <br></br>
                        <br></br>
                        <Container>
                            <Row className="justify-content-md-center">
                                <Card style={{ width: '40rem' }} border="dark">
                                    <Card.Header><p></p>
                                    {console.log(list.owner)}
                                    <p><b>Description:</b> {(list.description)}</p>
                                    </Card.Header>

                                    {/* Fetch test for infinite loop. */}
                                    {console.log('Fetch test for infinite loop.')}

                                    <Card.Body>                               
                                    <p><b>{(list.type)}:</b></p>
                                    <Alert variant='primary'>
                                    {(list.command)}
                                    <div className="d-flex justify-content-end">
                                    
                                    
                                    <CopyToClipboard text={(list.command)}
                                        onCopy={() => this.setState({copied: true, idCheck: list.id})}>
                                        {(list.id) === this.state.idCheck ? <Button variant='outline-dark'>Copied!</Button> : <Button variant='outline-dark'>Copy</Button>}                      
                                    </CopyToClipboard>

                                    </div>
                                    </Alert>
                                    <p><b>Notes:</b></p>
                                    <Alert variant='dark'>
                                    {(list.notes)}
                                    </Alert>
                                    <div className="mb-2">

                                    {(() => {
                                        if (this.state.user == 'Not_Signed_In') {
                                            return(
                                                <div></div>
                                            );
                                        } else {
                                            return (
                                                <div>
                                                    <Button 
                                                        variant="warning"
                                                        onClick={ () => this.updateCommandList(list.id) }
                                                        >
                                                        Edit 
                                                    </Button>{' '}
                                                    <Button 
                                                        variant="danger" 
                                                        onClick={ () => this.deleteCommandList(list.id) }
                                                    >
                                                        Delete
                                                    </Button>{' '}
                                                </div>
                                            )
                                        }
                                    })()}

                                    </div>
                                    </Card.Body>
                                    {/* <Card.Img variant="bottom" src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto,c_pad,dpr_3.0,f_auto,q_auto,w_500/b_rgb:ffffff/v1/ncom/en_US/games/switch/s/sonic-mania-switch/hero" /> */}
                                    <Card.Footer className="text-center">
                                    <p><b>{(list.technology)}</b></p>
                                    <p><b>Owner:</b> {(list.owner)} <b>| Created or Edited:</b> {(list.timestamp)}</p>
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

                    {/* Section 02: Documentation */}
                    <div className={this.state.mode}>
                        <h1 className='sectTitle'>Documentation Links:</h1>
                    </div>
                    {/* { this.getCommandList() } */}
                    { this.state.newData.filter(list => list.technology === 'CLI | Zsh' && list.type === 'Documentation Link').map((list) => (
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
                                    <p><b>{(list.type)}:</b></p>
                                    <Alert variant='primary'>
                                    {(list.command)}
                                    <div className="d-flex justify-content-end">
                                    
                                    
                                    <CopyToClipboard text={(list.command)}
                                        onCopy={() => this.setState({copied: true})}>
                                        <Button variant='outline-dark'>
                                            {this.state.show}
                                        </Button>                        
                                    </CopyToClipboard>

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
                                    <Card.Footer className="text-center">
                                    <p><b>{(list.technology)}</b></p>
                                    <p>{(list.timestamp)}</p>
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