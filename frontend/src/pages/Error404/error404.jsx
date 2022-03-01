import React, { Component } from 'react';
import { Navbar, Form, FormControl,Button } from 'react-bootstrap';
import '../../App.css';
import Nav from '../../components/Nav/Nav.jsx'
import Footer from '../../components/Footer/Footer.jsx'

class Error404 extends Component {
    state = {
        
    }
  
    render() {
        return (
            <div>
                <Nav />
                <br></br>
                <br></br>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <h1 className="title">404: Page Not Found</h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <h2 className="title">Fireball (Left Mouse Click) | Movement (A, S, D) |  Jump (Spacebar)</h2>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div>
                    <iframe  class="container-fluid"frameborder="0" src="https://itch.io/embed-upload/4416194?color=333333" allowfullscreen="" width="1000" height="720"><a href="https://a-i-chasm-games.itch.io/bug-buster">Play Bug Buster on itch.io</a>
                    </iframe>       
                </div>
                <br></br>
                <br></br>   
                <Footer />     
            </div>
        )
    }
}

export default Error404;