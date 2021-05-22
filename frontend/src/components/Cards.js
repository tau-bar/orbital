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
              src='/images/img-1.jpeg'
              label='Coronavirus'
              path='../Coronovirus'
              onClick={() => props.history.push('/virus')}
            />
            <CardItem
              src='/images/img-1.jpeg'
              label='Flavivirus'
              path='/services'
            />
            <CardItem
              src='/images/img-1.jpeg'
              label='Mobillivirus'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/img-1.jpeg'
              label='Coronavirus'
              path='/services'
            />
            <CardItem
              src='/images/img-1.jpeg'
              label='Flavivirus'
              path='/services'
            />
            <CardItem
              src='/images/img-1.jpeg'
              label='Mobillivirus'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/img-1.jpeg'
              label='Coronavirus'
              path='/services'
            />
            <CardItem
              src='/images/img-1.jpeg'
              label='Flavivirus'
              path='/services'
            />
            <CardItem
              src='/images/img-1.jpeg'
              label='Mobillivirus'
              path='/services'
            />
          </ul>

        </div>
      </div>
    </div>
  );
}

export default withRouter(Cards);