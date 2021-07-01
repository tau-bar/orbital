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

const links = [
    6562563,
    6593126
]

const pandemics = ["covid-19", "ebola", "black plague"]

const MapComponent = () => {
    const [current, setCurrent] = useState(1);
    return (
        <div className = 'map-component'>
            <div class="flourish-embed flourish-map" data-src={`visualisation/${links[current]}`}>
            {useScript("https://public.flourish.studio/resources/embed.js")}
            </div>
            <div className = 'map-settings'>
            {pandemics.map((p, i) => {
             if (i === current) {
                 return (
                     <div className = 'map-buttons'>
                         <Button color = "secondary" variant = "contained">{p}</Button>
                     </div>
                 )
             } else {
                 return (
                    <div className = 'map-buttons'>
                         <Button onClick = {() => setCurrent(i)} color = "primary" variant = "contained" >{p}</Button>
                     </div>
                    )
                 }
            })}
         </div>
        </div>
    );   
}

export default MapComponent;