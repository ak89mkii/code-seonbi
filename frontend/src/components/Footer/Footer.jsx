import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import '../../App.css';
import The404Button from '../404Button/404Button.jsx'

class Footer extends Component {
    state = {
        value: 'code@pondermint.com',
        copied: false,
        open: false
    }

    handleClick = () => this.setState((prevState) => ({ open: !prevState.open }))
    handleClose = () => this.setState({ open: false })

    render() {
        const { open } = this.state
        return (
            <div className='footer'>
                <div class="container">
                    <div class='row'>
                        <div class="col">
                            © 2022 - 2025 Code Seonbi | Ponder Code | Ponder Enterprises LLC 
                        </div>
                        <div class="col">
                            <The404Button />
                        </div>
                        <div class="col">
                            {/* <a href='http://127.0.0.1:8000/api-auth/login/?next=/backend/command-list' target='_blank'> */}
                            <a href='/api-auth/login/?next=/backend/command-list' target='_blank'>
                            <Button variant='outline-light'>Admin Login</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer