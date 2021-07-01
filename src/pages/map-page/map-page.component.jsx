import React from 'react';
import './map-page.styles.scss';
import MapComponent from '../../components/map/map.component';

const MapPage = () => {
    return (
        <div className = 'map-page'>
          <MapComponent/>
        </div>
    );   
}

export default MapPage;