import React from 'react';

const ColourPicker = ({ label, onChange, name }) => {
    return (
        <div>
            <p>{label}</p>
            <input name = {name} onChange = {onChange} type = 'color'></input>
        </div>
    )
}

export default ColourPicker;