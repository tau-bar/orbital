import { TextField } from '@material-ui/core';
import React from 'react';
import './text-field.styles.scss';
import { makeStyles } from '@material-ui/core/styles';




const CustomTextField = ({color, type, label, helperText, onChange }) => {
    return (
        
        <div className = 'custom-text-field'>
            <TextField border-color = "#0000FF" id ="outline-basic" onChange = {e => onChange(e)} helperText = {helperText} label= {label} variant="outlined" type = {type} color = {color}></TextField>
        </div>
    )
}

export default CustomTextField;

//outline-basic
//standard-error


