import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from "../../assets/crown.svg"
import "./header.scss";

const header = () => {
    return (
        <div className='header'>
            <Link to="/"  className='logo-container'>
                <Logo className='logo'/>
            </Link>
            <div className="options">
                <Link className='option' to="/shop">Shop</Link>
                <Link className='option' to="/contact">Contact Us</Link>
                <Link className='option' to="/signin">Sign In</Link>
            </div>
        </div>
    );
};

export default header;