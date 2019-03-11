import React, {
    Component
} from 'react';

const input = (props) => {
    return ( 
    <div className = "form-group" >
    <label className="xs">{props.label}</label>

        <input required type ={props.type}
        className = "form-control input-custom"
        ref = {
            ((input) => props.data(input) )
        }
        /> </div>

    );
}

export default input;