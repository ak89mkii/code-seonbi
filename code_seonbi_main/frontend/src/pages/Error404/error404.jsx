import React, { Component } from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import '../../App.css';
import Nav from '../../components/Nav/Nav.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import sun from '../../Img/sun.png'
import moon from '../../Img/moon.png'

class Error404 extends Component {
    state = {
        open: false,
        mode: 'dark',
        mode2: 'darkNoText',
        icon: moon,
    }

    toggleMode = () => {
        if (this.state.mode == 'light') {
            this.setState({
                mode: 'dark',
                mode2: 'darkNoText',
                icon: moon,
            })
        } else if (this.state.mode == 'dark') {
            this.setState({
                mode: 'light',
                mode2: 'lightNoText',
                icon: sun,
            })
        }
    }

    refreshPage = () => {
        setTimeout(function () { window.location.reload(); }, 10)
    }
  
    render() {
        return (
            <div className={this.state.mode}>
                <Nav 
                    open={this.state.false}
                    mode={this.state.mode}
                    icon={this.state.icon}
                    toggleMode={this.toggleMode}
                />
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