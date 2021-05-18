import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Understanding Viruses</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
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

export default Cards;