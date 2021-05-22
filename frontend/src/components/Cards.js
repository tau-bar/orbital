import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { withRouter } from 'react-router-dom';

function Cards(props) {
  return (
    <div className='cards'>
      <h1>Understanding Viruses</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/corona2.jpeg'
              label='Coronavirus'
              path='../Coronovirus'
              onClick={() => props.history.push('/virus')}
            />
            <CardItem
              src='/images/fla.jpeg'
              label='Flavivirus'
              path='/services'
            />
            <CardItem
              src='/images/morbi.jpeg'
              label='Mobillivirus'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/yersenia3.jpeg'
              label='Yersenia'
              path='/services'
            />
            <CardItem
              src='/images/ebola2.jpeg'
              label='Ebolavirus'
              path='/services'
            />
            <CardItem
              src='/images/ortho4.jpeg'
              label='Orthopoxvirus'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/corona2.jpeg'
              label='Betacoronavirus'
              path='/services'
            />
            <CardItem
              src='/images/corona2.jpeg'
              label='Custom-one'
              path='/services'
            />
            <CardItem
              src='/images/corona2.jpeg'
              label='Custom-two'
              path='/services'
            />
          </ul>

        </div>
      </div>
    </div>
  );
}

export default withRouter(Cards);