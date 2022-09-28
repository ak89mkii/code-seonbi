import React from 'react'
import '../../App.css'
import {  } from 'react-bootstrap';

const Welcome = (props) => {
    return (
        <div className={props.mode}>
            <figure class="text-center">
                <div>
                    <h1 className='title'>Welcome to Code Seonbi</h1>
                    <blockquote class="blockquote">
                        <p className='title2Alt'>Code References Database | Bug Tracker | Project Documentation</p>
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