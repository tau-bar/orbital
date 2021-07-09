import React from "react";
import { render } from "react-dom";
import { Parallax, Background } from "react-parallax";
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  color: "white",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};
const image2 = '/images/Black Plague.jpeg'
const image3 = '/images/Cholera.jpeg'
const image4 = '/images/Spanish Flu.jpeg'

const Container = () => (
  <div style={styles}>
       
    <h2>| | |</h2>
    <Parallax bgImage={image2} strength={-100}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>Reverse direction</div>
        <div>
        <Fade left>
          <h1 style={{ color: 'red' }}>3 million people died</h1>
        </Fade>
      </div>
      <div>
        <Fade right>
          <h1 style={{ color: 'red' }}>Half the world was wiped out</h1>
        </Fade>
      </div>
      <div>
        <Fade left>
        <h1 style={{ color: 'red' }}>Half the world was wiped out</h1>
        </Fade>
      </div>
      </div>
    </Parallax>
    <Parallax bgImage={image3}
    
    renderLayer={percentage => (
        <div
            style={{
                position: 'absolute',
                width: '100%',
                height: 1000,
                background: `rgba(0, 0, 0, ${percentage * 0.5})`,
            }}
        />
    )}
>
<div style={{ height: 500 }}>
        <div style={insideStyles}>Dynamic Brightness</div>
        <div>
        <Roll top>
        <h1 style={{ color: 'red' }}>No</h1>
        </Roll>
        <Roll left>
        <h1 style={{ color: 'red' }}>Cure</h1>
        </Roll>
        <Roll bottom>
        <h1 style={{ color: 'red' }}>Found</h1>
        </Roll>
      </div>
      </div>             
</Parallax>
    <h2>| | |</h2>
    <Parallax
      bgImage={image4}
      strength={200}
      renderLayer={(percentage) => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `rgba(0, 0, 0, ${percentage * 0.5})`,
              left: "50%",
              top: "50%",
              borderRadius: "10%",
              transform: "translate(-50%,-50%)",
              width: percentage * 800,
              height: percentage * 800
            }}
          />
        </div>
      )}
    >
      <div style={{ height: 500 }}>
        <div style={insideStyles}>Now lets begin </div>
      </div>
    </Parallax>
    <h2>| | |</h2>
    <Parallax strength={500}>
      <Background className="custom-bg">
        <div
          style={{
            height: 2000,
            width: 2000,
            backgroundImage: "url('https://i.imgur.com/8CV5WAB.png')"
          }}
        />
      </Background>
      <div>
        <br />
        custom background component
        <br />
        <br />
        custom background component
        <br />
        <br />
        custom background component
        <br />
        <br />
      </div>
    </Parallax>
    <div style={{ height: 500 }} />
    <h2>{"\u2728"}</h2>
  </div>
);

export default Container;
