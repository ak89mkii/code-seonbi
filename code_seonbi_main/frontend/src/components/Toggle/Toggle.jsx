import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import '../../App.css';

const Toggle = (props) => {
    return (
        <div>
            <label class="switch">
                <input type="checkbox" onClick={props.toggleMode} />
                <span class="slider round"></span>
            </label>
            <img
                className='iconSize'
                src={props.icon}
            />
        </div>
    )
}

export default Toggle