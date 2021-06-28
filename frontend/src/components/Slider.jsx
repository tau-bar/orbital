import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import image1 from './../assets/images/v.jpeg';
import image2 from './../assets/images/e.jpeg';
import image3 from './../assets/images/s.jpeg';
import Button from './Button'


function Slider() {
    return (
  <AwesomeSlider animation="cubeAnimation">
    <div data-src={image1} />
    <div data-src={image2}/>
    <div data-src={image3} />
  </AwesomeSlider>
    )
  }

export default Slider;

