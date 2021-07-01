import React, { useState } from 'react';
import ColourPicker from '../../components/colour-picker/colour-picker.component';
import './new-virus.styles.scss';
import { Card,
         FormControl,
        Typography,
        InputLabel,
        MenuItem,
        Select,
        Slider, 
        Radio,
        RadioGroup,
        FormControlLabel} from '@material-ui/core';
import { red, green } from '@material-ui/core/colors';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const NewVirusPage = () => {
    const [values, setValues] = useState(
        {
            virusType: "",
            primary: "",
            secondary: "",
            size : 20,
            lethality: 20,
            availableVaccine: "true",
        }
    )

    const handleUpdateVirus = () => {
      console.log("Code to update the characteristics on the virus.")
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
            padding: '20px',
            margin: '20px',
            backgroundColor: '#ffffad',
        }
      }));

      const classes = useStyles();

      const Title = ({ children }) => {
        return (<Typography variant="h5" component="h2">
        {children}
        </Typography>)
      }

      const virusTypes = ["coronavirus", "flaviviridae", "morbillivirus", "yersinia", "ebolavirus", "orthopoxvirus", "betacoronavirus"];

      // const PrettoSlider = withStyles({
      //   root: {
      //     color: 'red',
      //     marginTop: 40,
      //   },
      //   thumb: {
      //     height: 24,
      //     width: 24,
      //     backgroundColor: '#fff',
      //     border: '2px solid currentColor',
      //     marginTop: -8,
      //     marginLeft: -12,
      //     '&:focus, &:hover, &$active': {
      //       boxShadow: 'inherit',
      //     },
      //   },
      //   active: {},
      //   valueLabel: {
      //     left: 'calc(-50% + 4px)',
      //   },
      //   track: {
      //     height: 8,
      //     borderRadius: 4,
      //   },
      //   rail: {
      //     height: 8,
      //     borderRadius: 4,
      //   },
      // })(Slider);


    const GreenRadio = withStyles({
      root: {
        color: green[400],
        '&$checked': {
          color: green[600],
        },
      },
      checked: {},
    })((props) => <Radio color="default" {...props} />);

    const RedRadio = withStyles({
      root: {
        color: red[400],
        '&$checked': {
          color: red[600],
        },
      },
      checked: {},
    })((props) => <Radio color="default" {...props} />);


    return (
        <div className = 'new-virus-page'>
            <div className = 'virus-modifiers'>
                    <Card className = {classes.modifiergroup}>
                    <Title>Type</Title>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Choose virus</InputLabel>
                        <Select
                        name = "virusType"
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={values.virusType}
                        onChange={handleChange}
                        label="Choose virus"
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {virusTypes.map(virus => {
                            return(<MenuItem value={virus}>{virus.charAt(0).toUpperCase()+ virus.slice(1)}</MenuItem>); 
                        })}
                        </Select>
                    </FormControl>
                    </Card>
                    <Card className = {classes.modifiergroup}>
                        <Title>Colours</Title>
                        <ColourPicker name = "primary" onChange = {handleChange} label = "Primary colour"/>
                        <ColourPicker name = "secondary" onChange = {handleChange} label = "Secondary colour"/>
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
                    <Card className = {classes.modifiergroup}>
                        <Title>Available Vaccine</Title>
                        <FormControl component="fieldset">
                          <RadioGroup defaultValue="true" aria-label="vaccine" name="customized-radios">
                            <FormControlLabel onChange = {handleChange} name = "availableVaccine" checked = {values.availableVaccine === "false"} value = "false" control={<RedRadio/>} label="No" />
                            <FormControlLabel onChange = {handleChange} name = "availableVaccine" checked = {values.availableVaccine === "true"} value = "true" control={<GreenRadio/>} label="Yes" />
                          </RadioGroup>
                        </FormControl> 
                    </Card>
            </div>
            <div className = "virus-model-container">
                Insert the interactive model of the virus here.
                {values.primary}
                {values.secondary}
                {values.virusType}
                {values.size}
                "space"
                {values.availableVaccine}
            </div>
        </div>
    )
}

export default NewVirusPage;