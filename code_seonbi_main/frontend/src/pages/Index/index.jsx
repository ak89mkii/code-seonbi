import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../App.css';
import Nav from '../../components/Nav/Nav.jsx'
import Welcome from '../../components/Welcome/Welcome.jsx'
import CardsMain from '../../components/CardsMain/CardsMain.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import sun from '../../Img/sun.png'
import moon from '../../Img/moon.png'

class Home extends Component {
    state = {
        open: false,
        mode: 'dark',
        mode2: 'darkNoText',
        icon: moon,
        show: false
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

    handleShow = () => this.setState((prevState) => ({ show: !prevState.show }))
    // handleShow = () => this.setState({ show: true })
    handleClose = () => this.setState({ show: false })

    refreshPage = () => {
        setTimeout(function () { window.location.reload(); }, 10)
    }

    render() {

        return (
            <div className={this.state.mode2}>   
                <div className='halo'>         
                    <Nav
                        open={this.state.false}
                        mode={this.state.mode}
                        icon={this.state.icon}
                        toggleMode={this.toggleMode}
                    />
                    <Welcome 
                        mode={this.state.mode} 
                    />
                    <CardsMain 
                        mode2={this.state.mode2}
                        show={this.state.show}
                        handleShow={this.handleShow}
                        handleClose={this.handleClose}
                    />
                </div>    
                <Footer />
            </div>
        )
    }
}

export default Home