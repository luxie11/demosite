import React from 'react';
import HeaderMainItem from '../header/HeaderMainItem';

const FooterNavList = () =>{
    return(
        <React.Fragment>
            <HeaderMainItem name="Home" class="header-main-item"/>
            <HeaderMainItem name="Service" class="header-main-item"/>
            <HeaderMainItem name="Works" class="header-main-item"/>
            <HeaderMainItem name="About me" class="header-main-item"/>
            <HeaderMainItem name="Contact" class="header-main-item" />
        </React.Fragment>
    )
}

export default FooterNavList;