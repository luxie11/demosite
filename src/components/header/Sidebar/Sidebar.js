import React from 'react';

import './Sidebar.css'
import MainNavList from '../MainNavList';

class Sidebar extends React.Component{

    render(){
        return (
            <div className="mobile-menu-background" onClick={this.props.close}>
                <div className="mobile-menu-content" onClick={(e) => e.stopPropagation() }>
                    <ul>
                       <MainNavList class="mobile-menu-item"/>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar;