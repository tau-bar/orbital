import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './carousel-container.styles.scss';

import image1 from '../../assets/images/v.jpeg';
import image2 from '../../assets/images/e.jpeg';
import image3 from '../../assets/images/s.jpeg';

const CarouselContainer = () => {
  return (
    <div className='carousel'>
      <h1>Basic Virus Anatomy</h1>
    <Carousel fade={false} pause={false}>
      <Carousel.Item interval={10000}>
        <img
          className="d-block w-25"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Virus Cell</h3>
          <div>&nbsp;</div>
          <div>{'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'}
           There are three main components of a virus. 
            The spike protein, the envelop protein, and the membrane protein. RNA of the virus is embedded 
          </div>
          <div>
          {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'}
          inside the viral envelop
          </div>
           
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={10000}>
        <img
          className="d-block w-25"
          src={image2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Enevelop Protein</h3>
          <div>
          {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} Present in the viral envelop. These envelop protein helps the reproduction of virus particles upon 
            entering the host cell
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={10000}>
        <img
          className="d-block w-25"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
        <h3>Spike Protein</h3>
        <div>
        {'\u00A0'} {'\u00A0'} Virus will not survive without a living host. These spike proteins act as grappling hooks. It allows 
            the virus to crack open the host cell for infection
        </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarouselContainer;