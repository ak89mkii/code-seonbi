import React from 'react'
import '../../App.css'
import { Container } from 'react-bootstrap';

const Welcome = (props) => {
    return (
        <div className={props.mode}>
            <Container>
            <figure class="text-center">
                <div>
                    <h1 className='title'>Welcome to Code Seonbi</h1>
                    <blockquote class="blockquote">
                        <p className='title2Alt'>Bug tracking, project setup guides, deployment references, and terminal / commands.</p>
                    </blockquote>
                    <br></br>
                    <p>Click on a card below to navigate to the corresponding section.</p>
                </div>
            </figure>
            <br></br>
            </Container>
        </div>
    )
}

export default Welcome