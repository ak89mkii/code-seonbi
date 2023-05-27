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
        // Determines whether state should be rendred from localStorage check.
        check: 0,
        // Dark Mode state.
        open: false,
        mode: 'dark',
        mode2: 'darkNoText',
        cardMode: 'light',
        icon: moon,
        show: false
    }

    // Mode Toggle.
    toggleMode = () => {
        if (this.state.mode == 'light') {
            this.setState({
                mode: 'dark',
                mode2: 'darkNoText',
                cardMode: 'light',
                icon: moon,
            })
            this.handleFormSubmitDark();
        } else if (this.state.mode == 'dark') {
            this.setState({
                mode: 'light',
                mode2: 'lightNoText',
                cardMode: 'dark',
                icon: sun,
            })
            this.handleFormSubmitLight();
        }
    }

    // Save mode: light in local Storage:
    handleFormSubmitLight = () => {
        localStorage.setItem('check', 1);
        localStorage.setItem('mode', 'light');
        localStorage.setItem('mode2', 'lightNoText');
        localStorage.setItem('cardMode', 'light');
        localStorage.setItem('icon', sun);
    };

    // Save mode: dark in local Storage:
    handleFormSubmitDark = () => {
        // localStorage.setItem('check', 1);
        localStorage.setItem('mode', 'dark');
        localStorage.setItem('mode2', 'darkNoText');
        localStorage.setItem('cardMode', 'dark');
        localStorage.setItem('icon', moon);
    };

    handleShow = () => this.setState((prevState) => ({ show: !prevState.show }))
    // handleShow = () => this.setState({ show: true })
    handleClose = () => this.setState({ show: false })

    refreshPage = () => {
        setTimeout(function () { window.location.reload(); }, 10)
    }

    componentDidMount() {
        this.getCommandList();
        // Retreive mode in localStorage:
        const check = localStorage.getItem('check');
        this.setState({ check });
        console.log({check})

        if (check == 1) {
        // console.log("halo")

        const mode = localStorage.getItem('mode');
        this.setState({ mode });
        const mode2 = localStorage.getItem('mode2');
        this.setState({ mode2 });
        const cardMode = localStorage.getItem('cardMode');
        this.setState({ cardMode });
        const icon = localStorage.getItem('icon');
        this.setState({ icon });


        }
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
                        cardMode={this.state.cardMode}
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