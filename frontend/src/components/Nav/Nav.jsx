import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import '../../App.css';
import logo from '../../Img/logo.png';

const Nav = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Link to="/">
            <Navbar.Brand href="#home">
                <div className="title">
                <img
                alt=""
                src={logo}
                width="100"
                height="100"
                className="d-inline-block align-center"
                />{' '}
                Code Seonbi</div>
            </Navbar.Brand>
            </Link>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <br></br>
                <br></br>
                <Button variant="outline-primary">Search</Button>
            </Form>
        </Navbar>
    )
}

export default Nav