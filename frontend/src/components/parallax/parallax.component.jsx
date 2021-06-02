import React from 'react';
import { Parallax } from 'react-parallax';
import './parallax.styles.scss';

const ParallaxComponent = ({ children, imgSrc, direction }) => (
    <Parallax
        bgImage= {imgSrc}
        strength = {400}
        renderLayer={percentage => (
            <div
                className = 'parallax-info-box'
                style={{
                    [direction]: percentage * 300,
                }}
            >Ebola is blah bvlahs</div>
        )}
    >{children}</Parallax>
)

export default ParallaxComponent;

