import React from 'react';
import styles from './Button.css';

const Button = ({ children, onClick, btnColor = 'teal', labelColor, disabled, type, style, ...props }) => {
    return (
        <button
            className={styles.btn}
        >
            {children || 'label'}
        </button>
    );
};

export default Button;