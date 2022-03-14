import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {Navbar} from 'react-bootstrap';

class Test extends Component {
    state = {
        project: undefined,
        technology: 0,
        status: 0,
        description: 0,
        error: 0,
        links: 0,
        solution: 0,
    }

    render() {
        return (
            <div>
                <p>Project: {this.state.project}</p>
                <p>Technology: {this.state.technology}</p>
                <p>Status: {this.state.status}</p>
                <p>Description: {this.state.description}</p>
                <p>Error: {this.state.error}</p>
                <p>Links: {this.state.links}</p>
                <p>Solution: {this.state.solution}</p>
            </div>
        )
    }
}

export default Test;