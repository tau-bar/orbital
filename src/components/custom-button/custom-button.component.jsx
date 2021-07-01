import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, onClick }) => (
    <div onClick = {onClick} className = 'custom-button'>
        {children}
    </div>
)

export default CustomButton