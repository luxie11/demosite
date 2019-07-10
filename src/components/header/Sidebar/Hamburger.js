import React from 'react';
import './Hamburger.css';
import Sidebar from './Sidebar';

class Hamburger extends React.Component{
    
    state = { opened: false }

    openSidebar = () =>{
        this.setState({
            opened: true
        })
    }

    closeSidebar = () =>{
        this.setState({
            opened:false
        })
    }
    renderSidebar(){
        if(!this.state.opened){
            return null;
        }
        return <Sidebar close={this.closeSidebar}/>
    }

    render(){
        return(
            <React.Fragment>
                <div id="mobile-nav" onClick={ ()=>{ this.openSidebar() } }>
                    <div className="top-bar"></div>
                    <div className="middle-bar"></div>
                    <div className="bottom-bar"></div>
                </div>
                {this.renderSidebar()}
                
            </React.Fragment>
           
        )
    }
}
   

export default Hamburger;