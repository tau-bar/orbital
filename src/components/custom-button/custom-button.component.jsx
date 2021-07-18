import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, onClick, filled }) => (
    <div onClick = {onClick} className = {`custom-button ${filled ? 'filled' : ''}`}>
        {children}
    </div>
)

export default CustomButton