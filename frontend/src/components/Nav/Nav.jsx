import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Form, InputGroup, Button, Container } from 'react-bootstrap';
import '../../App.css';
import logo from '../../Img/logo.png';
import Toggle from '../Toggle/Toggle.jsx';

const Nav = (props) => {
    return (<div>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand>
                <div className="title">
                <Link to="/">
                <img
                    alt=""
                    src={logo}
                    width="100"
                    height="100"
                    className="d-inline-block align-center"
                />            
                </Link>
                {' '}
                Code Seonbi
                </div>
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
            <Toggle
                icon={props.icon}
                toggleMode={props.toggleMode}
            />
        </Navbar.Collapse>
            </Container>
        </Navbar>
        <Container>
            <Toggle
                icon={props.icon}
                toggleMode={props.toggleMode}
            />
            <InputGroup className="mb-3">
            <Form.Control
            placeholder="Write Search Here..."
            />
            <Button variant="outline-secondary" id="button-addon2">
            Search
            </Button>
            </InputGroup>
        </Container>
        </div>
       
    )
}

export default Nav