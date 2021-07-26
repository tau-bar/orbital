import React from 'react';
import './loading-bar.styles.scss';

const LoadingBar = ({ percentage }) => (
    <div data-testid = "loading-bar" className = "LoadingBar">
        <div className = 'percentage-bar'>
            <div className = 'red-bar' style = {{width: `${percentage}%`}}></div></div>
        Loading virus model: {percentage}%
    </div>
)

export default LoadingBar;