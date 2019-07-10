import React from 'react';

//Style
import './Header.css';

//Header components
import TopNavigation from './TopNavigation';
import MainNavigation from './MainNavigation';
import TopNavItem from './TopNavItem';

const Header = () =>{
    return(
            <header id="demo-header">
                <div className="header-container">
                    <TopNavigation>
                        <TopNavItem name="Menu"/>
                        <TopNavItem name="Some text"/>
                        <TopNavItem name="Another item"/>
                        <TopNavItem name="One more"/>
                        <TopNavItem name="And last one"/>
                    </TopNavigation>
                    <MainNavigation boldText="Demo" normalText="Site"/>
                </div>
            </header>
    )
}

export default Header