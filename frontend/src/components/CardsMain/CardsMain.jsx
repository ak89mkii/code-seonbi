import React from 'react'
import '../../App.css'
import { Card, Button, CardGroup } from 'react-bootstrap';

const CardsMain = (props) => {
    return (
        <div>
            <div className={props.mode}><br></br></div>
            <CardGroup>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://cdn.wallpapersafari.com/21/2/zGAvKW.jpg" />
                <Card.Body>
                    <Card.Title>Code References</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://images2.alphacoders.com/602/thumb-1920-602223.jpg" />
                <Card.Body>
                    <Card.Title>Bug Tracker</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://i.ytimg.com/vi/K7Yh_YywD-U/maxresdefault.jpg" />
                <Card.Body>
                    <Card.Title>Jobs</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            </CardGroup>
            <div className={props.mode}><br></br></div>
        </div>
    )
}

export default CardsMain