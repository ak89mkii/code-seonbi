import React from 'react'
import '../../App.css'
import {  } from 'react-bootstrap';

const Welcome = (props) => {
    return (
        <figure class="text-center">
            <div className={props.mode}>
                <h1>Welcome to Code Seonbi</h1>
                <blockquote class="blockquote">
                    <p>Code References Database | Bug Tracker | Job Search References & Tracker</p>
                </blockquote>
            </div>
        </figure>
    )
}

export default Welcome