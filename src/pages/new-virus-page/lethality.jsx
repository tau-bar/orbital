import React, { useContext, useState, useEffect } from 'react';
import './new-virus.styles.scss';
import { 
        Slider
      } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { UserContext } from '../../context/UserProvider';
import { createNewVirus, getVirus, updateVirus } from '../../firebase/firebase.utils';
import Final from "../../Emoji";
import CreateCard from './create-card.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { withRouter } from 'react-router';

const NewVirusPage = ({ history }) => {
  
    const [values, setValues] = useState(
        {
            virusName: "",
            virusType: "",
            primary: "",
            size : 50,
            lethality: 50,
        }
    )
    const user = useContext(UserContext);

    const virusTypes = 
      ['coronavirus',
        'flavivirus',
        'mobillivirus',
        'yersinia',
        'ebolavirus',
        'orthopox']

    useEffect(() => {
      const getVirusData = async () => {
        const { state } = history.location
          if (user !== null && state !== undefined && values.id === undefined) {
              const virus = await getVirus(user, state.id);

              setValues({
                id: state.id,
                ...virus
              })
          }
      }
      getVirusData();
  })


    const handleSaveVirus = () => {
      if (values.id === undefined) {
        if (user === undefined) {
          alert('You need to be signed in to create a virus!');
          return;
        }
        const { virusName, virusType, primary } = values;
        if (virusName === "" || virusType === "" || primary === "") {
          alert("You need to enter values in the form!");
          return;
        }
        createNewVirus(user, values)
        .then(alert("Virus Created!"))
        .finally(history.push('/virus'));
        return;
    } else {
        updateVirus(user, values)
        .then(alert("Virus Updated!"))
        .finally(history.push('/virus'));
    }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'virusType') {
          setValues({
            ...values,
            [name]: virusTypes[value - 1],
          })
        } else {
          setValues({
            ...values,
            [name]: value,
            
          })  
        } 
    }

    const handleSliderChange = name => (event, value) => {
      setValues({
        ...values,
        [name]: value,
      })
    }

    const useStyles = makeStyles(theme => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 160,
          },
        modifiergroup: {
            padding: '30px',
            margin: '20px',
            backgroundColor: '#ffffad',
        }
      }));

      const classes = useStyles();

    return (
        <div className = 'new-virus-page'>
            <div className = 'virus-modifiers'>
                   
                    <CreateCard>
                    <div className = "card-title">
                      <h2>Lethality</h2>
                    </div>
                        <Slider 
                        value = {values.lethality}
                        onChange = {handleSliderChange("lethality")}
                        valueLabelDisplay="auto" aria-label="slider"/>
                    </CreateCard>
                    <CustomButton filled onClick = {handleSaveVirus} className ='save-button'>Save!</CustomButton>
            </div>
            <div>
                <Final how={values.lethality}></Final>
            </div>
        </div>
    )
}

export default withRouter(NewVirusPage);