import React from 'react';
import "./homePage.styles.scss";
import MenuItem from '../../components/menu-item/MenuItem';
import Directory from '../../components/directory/directory';

const HomePage = () => {
    return (
        <div className='homepage'>
            <Directory />
        </div>
    );
};

export default HomePage;