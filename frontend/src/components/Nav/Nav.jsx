import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import '../../App.css';
import logo from '../../Img/logo.png';
import Toggle from '../Toggle/Toggle.jsx';

const Nav = (props) => {
    return (
        <Navbar bg="dark" variant="dark">
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
                Code Seonbi</div>
            </Navbar.Brand>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <br></br>
                <br></br>
                <Button variant="outline-light">Search</Button>            
            </Form>
            <Navbar.Brand></Navbar.Brand>
            <Toggle
                icon={props.icon}
                toggleMode={props.toggleMode}
            />
        </Navbar>
    )
}

export default Nav