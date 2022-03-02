import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import '../../App.css';
import Nav from '../../components/Nav/Nav.jsx'
import Welcome from '../../components/Welcome/Welcome.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import sun from '../../Img/sun.png'
import moon from '../../Img/moon.png'

class Home extends Component {
    state = {
        open: false,
        mode: 'dark',
        icon: moon,
    }

    toggleMode = () => {
        if (this.state.mode == 'light') {
            this.setState({
                mode: 'dark',
                icon: moon,
            })
        } else if (this.state.mode == 'dark') {
            this.setState({
                mode: 'light',
                icon: sun,
            })
        }
    }

    refreshPage = () => {
        setTimeout(function () { window.location.reload(); }, 10)
    }

    render() {

        return (
            <div>
                <Nav
                    open={this.state.false}
                    mode={this.state.mode}
                    icon={this.state.icon}
                    toggleMode={this.toggleMode}
                />
                <Welcome 
                    mode={this.state.mode} 
                />
                <Footer />
            </div>
        )
    }
}

export default Home