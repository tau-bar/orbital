import React from 'react';

const ColourPicker = ({ value, label, onChange, name }) => {
    return (
        <div>
            <p>{label}</p>
            <input value = {value} name = {name} onChange = {onChange} type = 'color'></input>
        </div>
    )
}

export default ColourPicker;