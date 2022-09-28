import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import '../../App.css';

let choices = ['goku', 'spock', 'winston', 'darth', 'masterchief', 'gondor', 'halo', 'charmander', 'data']
let num = Math.floor(Math.random() * choices.length)

class The404Button extends Component {
    state = {
        random: choices[num],
    }

    randomChoice = () => {
        // let newNum = Math.floor(Math.random() * choices.length)
        this.setState({
            random: choices[num]
        })
    }

    render() {
        // Button:
        return (
            <div>
                <Link to={this.state.random}>
                    <Button variant="outline-light" onClick={this.randomChoice}>
                        404
                    </Button>
                    {' '}
                </Link>
            </div>
        )
    }
}

export default The404Button;