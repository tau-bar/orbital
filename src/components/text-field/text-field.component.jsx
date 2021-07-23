import { TextField } from '@material-ui/core';
import React from 'react';
import './text-field.styles.scss';

const CustomTextField = ({name, color, type, label, helperText, onChange, value }) => {
    return (
        
        <div data-testid = "text-field" className = 'custom-text-field'>
            <TextField  fullWidth value = {value} name = {name} id ="outline-basic" onChange = {e => onChange(e)} helperText = {helperText} label= {label} variant="outlined" type = {type} color = {color}/>
        </div>
    )
}

export default CustomTextField;


