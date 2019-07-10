import React from 'react';

const TitleColumn = (props) =>{
    return(
        <div className="full-width-container">
            <div className={`column-title title-${props.color} ${props.uppercase ? 'uppercase' : ''}`}>
                {props.title}
            </div>
        </div>
    )
}

export default TitleColumn;