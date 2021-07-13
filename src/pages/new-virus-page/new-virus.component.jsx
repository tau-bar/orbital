import React, { useContext, useState } from 'react';
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
import { createNewVirus } from '../../firebase/firebase.utils';


import Container from '../../ThreeSceneCopy';
import CustomButton from '../../components/custom-button/custom-button.component';


const NewVirusPage = () => {
    const [values, setValues] = useState(
        {
            virusType: "",
            primary: "",
            size : 20,
            lethality: 20,
        }
    )
    const user = useContext(UserContext);

    const handleCreateVirus = () => {
      if (user === undefined) {
        alert('You need to be signed in to create a virus!');
        return;
      }
      const { virusType, primary } = values;
      if (virusType === "" || primary === "") {
        alert("You need to enter values in the form!");
        return;
      }
      createNewVirus(user, values)
      .then(alert("Virus Created!"))
      // .finally();
      return;
    }

    const handleChange = (event) => {
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
                    <Card className = {classes.modifiergroup}>
                    <Title>Type</Title>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="virus-select-outlined-label">Choose virus</InputLabel>
                        <Select
                        defaultValue = {0}
                        name = "virusType"
                        labelId="virus-select-outlined-label"
                        id="virus-select-outlined"
                        value={values.virusType}
                        onChange={handleChange}
                        label="Choose virus"
                        >
                        {virusTypes.map((virus, i) => {
                            return(<MenuItem value={i}>{virus.charAt(0).toUpperCase()+ virus.slice(1)}</MenuItem>); 
                        })}
                        </Select>
                    </FormControl>
                    </Card>
                    <Card className = {classes.modifiergroup}>
                        <Title>Colours</Title>
                        <ColourPicker name = "primary" onChange = {handleChange} label = "Primary colour"/>
                    </Card>
                    <Card className = {classes.modifiergroup}>
                        <Title>Size</Title>
                        <Slider 
                        value = {values.size}
                        onChange = {handleSliderChange("size")}
                        valueLabelDisplay="auto" aria-label="slider"/>
                    </Card>
                    <Card className = {classes.modifiergroup}>
                        <Title>Lethality</Title>
                        <Slider 
                        value = {values.lethality}
                        onChange = {handleSliderChange("lethality")}
                        valueLabelDisplay="auto" aria-label="slider"/>
                    </Card>
                    <CustomButton onClick = {handleCreateVirus} className ='save-button'>Save!</CustomButton>
            </div>
            <div className = "virus-model-container">
                <Container virusType={values.virusType} colorCode={values.primary} sizeCode={values.size}></Container>
                {values.primary}
                {values.virusType}
                {values.size}
                "spac"
                {values.availableVaccine}
                
            </div>
        </div>
    )
}

export default NewVirusPage;
