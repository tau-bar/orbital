import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ color, bgColor, map, children, onClick, filled }) => (
    <div 
    style = { color && bgColor ? {color : `${color}` , backgroundColor: `${bgColor}`} : {}} 
    onClick = {onClick} 
    className = {`custom-button ${filled ? 'filled' : ''} ${map ? 'map' : ''}`}>
        {children}
    </div>
)

export default CustomButton