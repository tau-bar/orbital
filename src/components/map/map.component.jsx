import React, { useEffect, useState } from 'react';
import './map.styles.scss';
import Button from '@material-ui/core/Button';

const useScript = url => {
    useEffect(() => {
      const script = document.createElement('script');

      script.src = url;
      script.async = true;

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      }
    }, [url]);
  };


const MapComponent = ({ history }) => {

    return (
        <div className = 'map-page'>
            <div className = 'map-component'>
                <div class="flourish-embed flourish-map" data-src={history.location.state}>
                    {useScript("https://public.flourish.studio/resources/embed.js")}
                </div>
            </div>    
        </div>
    );   
}

/* 

*/

export default MapComponent;