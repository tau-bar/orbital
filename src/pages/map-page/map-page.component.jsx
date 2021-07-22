import React from 'react';
import './map-page.styles.scss';
import CustomButton from '../../components/custom-button/custom-button.component';
import InfoSection from '../../components/info-section/info-section.component';
import mapbg from '../../assets/images/map.jpg';

const MapPage = ({ history }) => {

    const pandemics = {
      'covid-19': {
        name: "COVID-19",
        data: "story/225979"
      },
      'cholera': {
        name: "Cholera",
        data:"visualisation/6688436",
      },
      'black-plague': {
        name: "Black Plague",
        data:"visualisation/6732910"
      },
      'spanish-flu': {
        name: "Spanish Flu",
        data: "visualisation/6733087"
      }

    }

    return (
        <InfoSection short title = "Pandemic Maps" img = {mapbg}>
        <p>Click on one of the buttons to view the deadly effects of historical pandemics.</p>
          <div className = 'map-buttons'>
          {
            Object.keys(pandemics).map(key => {
              return(
              <CustomButton 
              onClick = {() => {
                history.push({
                  pathname: `/map/${key}`,
                  state: pandemics[key].data
                })
                window.location.reload()
              }}  
              map >
                {pandemics[key].name}
              </CustomButton>
              )
            })
          }
          </div>
          
          </InfoSection>
    );   
}

// /<MapComponent data = { pandemics[current] } />



export default MapPage;