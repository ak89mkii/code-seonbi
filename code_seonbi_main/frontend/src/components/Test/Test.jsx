import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {Navbar} from 'react-bootstrap';

class Test extends Component {
    state = {
        id: undefined,
        project: undefined,
        technology: undefined,
        status: undefined,
        description: undefined,
        error: undefined,
        links: undefined,
        solution: undefined,
        timestamp: undefined,
    }

    getBugList = () => {
        fetch("/backend/bug-list")
            .then((response) => response.json())
            .then((data) => {
                this.setState ({
                    id: JSON.stringify(data[0].id), 
                    project: JSON.stringify(data[0].project), 
                    technology: JSON.stringify(data[0].technology),
                    description: JSON.stringify(data[0].description),
                    timestamp: JSON.stringify(data[0].timestamp),
                })
            })
            // .then(data => console.log(data[0]));
    }

    render() {
        return (
            <div>
                <button onClick={this.getBugList}>GET Request</button>
                <br></br>
                <p>ID: {this.state.id}</p>
                <p>Project: {this.state.project}</p>
                <p>Technology: {this.state.technology}</p>
                <p>Status: {this.state.status}</p>
                <p>Description: {this.state.description}</p>
                <p>Error: {this.state.error}</p>
                <p>Links: {this.state.links}</p>
                <p>Solution: {this.state.solution}</p>
                <p>Timestamp: {this.state.timestamp}</p>
            </div>
        )
    }
}

export default Test;