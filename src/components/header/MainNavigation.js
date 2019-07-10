import React from 'react'

//Components
import Column from '../Column';
import Hamburger from './Sidebar/Hamburger';
import MainNavList from './MainNavList';

class MainNavigation extends React.Component{

    state = {
        windowWidth: window.innerWidth
    }

    componentDidMount() {
        window.addEventListener("resize", this.onWindowChange);
    }

    componentWillUnmount() {
        window.addEventListener("resize", null);
    }
  
    onWindowChange =() =>{
        this.setState({
            windowWidth: window.innerWidth
        })
    }

    renderHeaderMain(){
        if(this.state.windowWidth <= 1024){
            return (
                <Hamburger />
            )
        } else {
           return(
            <ul>
                <MainNavList  class="header-main-item"/>
            </ul>
            )
        }
    }

    render(){
        return(
            <div id="header-main">
                <Column column="1-4">
                    <div id="site-title">
                        <div className="bold-text">{this.props.boldText}</div>
                        <div className="normal-text">{this.props.normalText}</div>
                    </div>
                </Column>
                <Column column="3-4" class={`${ this.state.windowWidth <= 1024 ? 'hamburger-right' : 'header-right'}`}>
                    {this.renderHeaderMain()}
                </Column>
            </div>
        )
    }
}

export default MainNavigation;