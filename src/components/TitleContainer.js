import React from 'react';

const TitleContainer = (props) =>{
    return(
        <div className={`container-title ${props.color}-color ${props.uppercase ? 'uppercase' : ''}`}>
            {props.title}
        </div>
    )
}

export default TitleContainer;