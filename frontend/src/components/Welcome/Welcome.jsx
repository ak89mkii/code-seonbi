import React from 'react'
import '../../App.css'
import {  } from 'react-bootstrap';

const Welcome = (props) => {
    return (
        <div className={props.mode}>
            <figure class="text-center">
                <div>
                    <h1>Welcome to Code Seonbi</h1>
                    <blockquote class="blockquote">
                        <p>Code References Database | Bug Tracker | Job Search References & Tracker</p>
                    </blockquote>
                    <br></br>
                    <p>Click on a card below to navigate to the corresponding section.</p>
                </div>
            </figure>
            <br></br>
        </div>
    )
}

export default Welcome