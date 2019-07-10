import React from 'react';

const TopNavItem = (props) =>{
    return(
        <li className="top-nav-item">
            <a>{props.name}</a>
        </li>
    )
}

export default TopNavItem;