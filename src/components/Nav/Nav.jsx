import React from 'react'
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../../Img/logo.png'

const Nav = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img
                alt=""
                src={logo}
                width="100"
                height="100"
                className="d-inline-block align-center"
                />{' '}
                Code Seonbi
            </Navbar.Brand>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
            </Form>
        </Navbar>
    )
}

export default Nav