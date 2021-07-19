import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ active, map, children, onClick, filled }) => (
    <div onClick = {onClick} className = {`custom-button ${filled ? 'filled' : ''} ${map ? 'map' : ''}`}>
        {children}
    </div>
)

export default CustomButton