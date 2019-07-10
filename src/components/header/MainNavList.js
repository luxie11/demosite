import React from 'react';
import HeaderMainItem from './HeaderMainItem';
import Works from './dropdown/Works';

const MainNavList = (props) =>{
    return(
        <React.Fragment>
            <HeaderMainItem name="Home"  class={props.class}/>
            <HeaderMainItem name="Service" class={props.class}/>
            <HeaderMainItem name="Works" class={props.class} dropdown={true} dropdownElements={<Works/>}/>
            <HeaderMainItem name="About me" class={props.class}/>
            <HeaderMainItem name="Contact" class={props.class}/>
        </React.Fragment>
    )
}

export default MainNavList;