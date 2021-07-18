import React from 'react';
import Container from '../../ThreeSceneAnother';

const VirusModelPage = ({ history }) => {
    const { key } = history.location.state;
    const virusModelPath = {
        coronavirus: {
          src:'/assets/eleph.obj',
          img:'/assets/coronaWrap.png'
        },
        flavivirus: {
          src:'/assets/flavivirus.obj',
          img:'/assets/flavWrap.png'
        },
        mobillivirus: {
          src:'/assets/mobillivirus.obj',
          img:'/assets/mobWrap.png'
        },
        yersenia: {
          src:'/assets/yersinia.obj',
          img: '/assets/yerWrap.png'
        },
        ebolavirus: {
          src:'/assets/ebolavirus.obj',
          img: '/assets/yerWrap.png'
        },
        orthopoxvirus : {
          src:'/assets/orthopox.obj',
          img: '/assets/orthoWrap.png'
        },
       
      }
    return(
        <Container img = {virusModelPath[key].img} modelPath ={virusModelPath[key].src}></Container>
    )
}

export default VirusModelPage;