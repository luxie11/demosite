import React from 'react';

const Button = (props) =>{
    return(
        <div className={ props.bottom ? 'button-div-bottom': 'button-div'}>
            <button className={`btn uppercase ${props.color}-button`}>
                {props.text}
            </button>
        </div>
    )
}

export default  Button;