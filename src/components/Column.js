import React from 'react';

const Column = (props) =>{
    return(
        <div className={`column-${props.column} ${props.class ? props.class : ''}`}>
            {props.children}
        </div>
    )
}

export default Column;