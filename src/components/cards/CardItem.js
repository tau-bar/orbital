import React from 'react';

const CardItem = ({ onClick, label, src }) => {
  return (
    <div  
    className = 'card-item'
    onClick = {onClick}>
      <div 
      className = 'background-image'
      style = {{
        backgroundImage: `url(${src})`
      }}
      />
      <div className = "content">
        <span className = "subtitle">
          { label }
        </span>
      </div>
    </div>
  );
}

export default CardItem;