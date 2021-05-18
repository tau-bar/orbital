import { TextField } from '@material-ui/core';
import React from 'react';
import './text-field.styles.scss';

const CustomTextField = ({ type, label, helperText, onChange }) => {
    return (
        <div className = 'custom-text-field'>
            <TextField id="outlined-basic" onChange = {e => onChange(e)} helperText = {helperText} label= {label} variant="outlined" type = {type} ></TextField>
        </div>
    )
}

export default CustomTextField;