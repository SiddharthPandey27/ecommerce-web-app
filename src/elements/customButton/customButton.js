import React from 'react';

import './styles.scss';

const CustomButton = ({ children, isBlueButton, ...otherProps }) => {
    return (
        <button className={`custom-button ${isBlueButton ? 'blue-button' : ''}`} { ...otherProps }>
            { children }
        </button>
    );
}

export default CustomButton;