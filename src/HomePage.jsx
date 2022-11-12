import React from 'react';
import "./homePage.styles.scss";

const HomePage = () => {
    return (
        <div className='homepage'>
            <div className="directory-menu">

                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Shoes</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>

                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Jackets</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>

                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Bags</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>

                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Childs</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>

                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Mens</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomePage;