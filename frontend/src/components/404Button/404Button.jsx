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
        let newNum = Math.floor(Math.random() * choices.length)
        this.setState({
            random: choices[newNum]
        })
    }

    render() {
        // Button:
        return (
            <div className="S0">
                <Link to={this.state.random}>
                    <button type="button" 
                        class="btn btn-outline-light" 
                        onClick={this.randomChoice}
                    >
                        <h2 className="text404">404</h2>
                    
                    </button>
                </Link>
            </div>
        )
    }
}

export default The404Button;