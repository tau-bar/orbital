import React from 'react';
import './Cards.scss';
import CardItem from './CardItem';
import { withRouter } from 'react-router-dom';

const Cards = (props) => {
  const virusData = {
    coronavirus: {
      src:'/images/corona2.jpeg'
    },
    flavivirus: {
      src:'/images/fla.jpeg'
    },
    mobillivirus: {
      src:'/images/morbi.jpeg'
    },
    yersenia: {
      src:'/images/yersenia3.jpeg'
    },
    ebolavirus: {
      src:'/images/ebola2.jpeg'
    },
    orthopoxvirus : {
      src:'/images/ortho4.jpeg'
    },
    betacoronavirus: {
      src:'/images/corona2.jpeg'
    }
  }

  return (
    <div className='cards'>
      <h1>Understanding Viruses</h1>
      <div className='cards__container'>

          <div className='cards__items'>
          {
            Object.keys(virusData).map((key) => {
              console.log(key)
              return(
                <CardItem
                src= {virusData[key].src}
                label={key.charAt(0).toUpperCase() + key.slice(1)}
                onClick={() => props.history.push(`virus/${key}`)}
              />)
            }
              )
          }
          </div>
      </div>
    </div>
  );
}

export default withRouter(Cards);