import React, { useContext, useState, useEffect } from 'react';
import ColourPicker from '../../components/colour-picker/colour-picker.component';
import './new-virus.styles.scss';
import { Card,
         FormControl,
        Typography,
        InputLabel,
        MenuItem,
        Select,
        Slider} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { UserContext } from '../../context/UserProvider';
import { createNewVirus, getVirus, updateVirus } from '../../firebase/firebase.utils';
import CustomTextField from '../../components/text-field/text-field.component';
import Container from '../../ThreeSceneCopy';
import CreateCard from './create-card.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { withRouter } from 'react-router';


const NewVirusPage = ({ history }) => {
  
    const [values, setValues] = useState(
        {
            id: "",
            virusName: "",
            virusType: "",
            primary: "",
            size : 50,
            lethality: 50,
        }
    )
    const user = useContext(UserContext);

    useEffect(() => {
      const getVirusData = async () => {
        const { state } = history.location
          if (user !== null && state !== undefined && values.id === "") {
              const virus = await getVirus(user, state.id);

              setValues({
                id: state.id,
                ...virus
              })
          }
      }
      getVirusData();
  }, [user])
  console.log(values);


    const handleSaveVirus = () => {
      if (values.id === "") {
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
        console.log(event)
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
            
        })  
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

      const Title = ({ children }) => {
        return (<Typography variant="h5" component="h2" style = {{paddingBottom: '30px'}}>
        {children}
        </Typography>)
      }

      const virusTypes = ["coronavirus", "flavivirus", "mobillivirus", "yersinia", "ebola", "orthopox"];

    return (
        <div className = 'new-virus-page'>
            <div className = 'virus-modifiers'>
                    <CreateCard>
                    <div className = "card-title">
                      <h2>Virus Name</h2>
                    </div>
                      
                      <CustomTextField 
                      value = {values.virusName ? values.virusName : ""} 
                      onChange = {handleChange} 
                      name = "virusName" 
                      label = "Name your virus!" />
                    </CreateCard>
                    <CreateCard>
                    <div className = "card-title">
                      <h2>Virus Type</h2>
                    </div>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="virus-select-outlined-label">Choose virus</InputLabel>
                        <Select
                        defaultValue = {0}
                        name = "virusType"
                        labelId="virus-select-outlined-label"
                        id="virus-select-outlined"
                        value={values.virusType ? values.virusType : ""}
                        onChange={handleChange}
                        label="Choose virus"
                        >
                        <MenuItem value="">None</MenuItem>
                        {virusTypes.map((virus, i) => {
                            return(<MenuItem key = {`CreateVirusType${i}`} value={i + 1}>{virus.charAt(0).toUpperCase()+ virus.slice(1)}</MenuItem>); 
                        })}
                        </Select>
                    </FormControl>
                    </CreateCard>
                    <CreateCard>
                    <div className = "card-title">
                      <h2>Colour</h2>
                    </div>
                        <ColourPicker value = {values.primary} name = "primary" onChange = {handleChange}/>
                    </CreateCard>
                    <CreateCard>
                    <div className = "card-title">
                      <h2>Size</h2>
                    </div>
                        <Slider 
                        value = {values.size}
                        onChange = {handleSliderChange("size")}
                        valueLabelDisplay="auto" aria-label="slider"/>
                    </CreateCard>
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
            <div className = "virus-model-container">
                <Container virusType={values.virusType} colorCode={values.primary} sizeCode={values.size}></Container>
            </div>
        </div>
    )
}

export default withRouter(NewVirusPage);
