import React from 'react';
import './loading-bar.styles.scss';

const LoadingBar = ({ percentage, mr }) => (
    <div data-testid = "loading-bar" className = {`LoadingBar ${mr ? "mr" : ''}`}>
        <div className = 'percentage-bar'>
            <div className = 'red-bar' style = {{width: `${percentage}%`}}></div>
        </div>
        Loading model: {percentage}%
    </div>
)

export default LoadingBar;