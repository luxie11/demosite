import React from 'react';

const TopNavigation = (props) =>{
    return(
        <div id="top-nav-wrapper">
            <ul>
                {props.children}
            </ul>
        </div>
    )
}

export default TopNavigation;