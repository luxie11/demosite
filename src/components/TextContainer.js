import React from 'react';

const TextContainer = (props) =>{
    return(
        <div className={`container-text text-${props.color}`}>
            {props.children}
        </div>
    )
}

export default TextContainer;