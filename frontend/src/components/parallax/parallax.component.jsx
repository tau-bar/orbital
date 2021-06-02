import React from 'react';
import { Parallax } from 'react-parallax';
import ParallaxContent from '../parallax-content/parallax-content.component';
import ParallaxTitle from '../parallax-title/parallax-title.component';
import './parallax.styles.scss';

const ParallaxComponent = ({ children, imgSrc, direction, content, origin, year, deaths, type }) => (
    <Parallax
        bgImage= {imgSrc}
        strength = {400}
        renderLayer={percentage => (
            <div
            style = {{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: `rgba(0, 0, 0, ${percentage * 0.5})`,}}
            >
                <div
                    className = {`parallax-info-box ${type}`}
                    style={{
                        [direction]: percentage * 200,
                    }}
                >
                    <ParallaxContent
                        type = {type}
                        origin = {origin}
                        year = {year}
                        deaths = {deaths}>
                        {content}
                    </ParallaxContent>
                </div>
            </div>
        )}
    >{children}</Parallax>
)

export default ParallaxComponent;

