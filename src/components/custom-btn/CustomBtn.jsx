import React from 'react';
import "./custom-btn.scss";

const CustomBtn = ({children, ...otherProps}) => {
    return (
        <div className='custom-btn' {...otherProps}>
            {children}
        </div>
    );
};

export default CustomBtn;