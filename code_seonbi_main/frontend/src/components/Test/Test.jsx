import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {Navbar} from 'react-bootstrap';

class Test extends Component {
    state = {
        //  Temporary array before JSON data mapped from fetch.
        newData: []
    }

    // Function: Sets state to data from backend Bug model.
    // Need arrow function to use setState.
    getBugList = () => {
        fetch("/backend/bug-list")
            .then((response) => response.json())
            .then((data) => {
                this.setState ({
                    // "Bug" model data.
                    newData: data
                })
            })
    }

    render() {
        return (
            <div>
                <button onClick={this.getBugList()}>GET Request</button>
                <br></br>
                { this.state.newData.map((list) => (
                    <div>
                        <p>ID: {JSON.stringify(list.id)}</p>
                        <p>Project: {JSON.stringify(list.project)}</p>
                        <p>Status: {JSON.stringify(list.status)}</p>
                        <p>Description: {JSON.stringify(list.description)}</p>
                        <p>Error: {JSON.stringify(list.error)}</p>
                        <p>Links: {JSON.stringify(list.links)}</p>
                        <p>Solution: {JSON.stringify(list.solution)}</p>
                        <p>Timestamp: {JSON.stringify(list.timestamp)}</p>
                    </div>
                ))}

            </div>
        )
    }
}

export default Test;