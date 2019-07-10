import React from 'react';

import Dropdown from './Dropdown';

class HeaderMainItem extends React.Component{

    constructor(props){
        super(props);
        this.state = { 
            onAction: false,
            left: 0
         }
    }
    
    componentDidMount(){
        this.setDropdownPosition();
    }

    onDropdownClick(){
        return this.setState({
            onAction:!this.state.onAction
        })
    }

    onMouseOver(){
        return this.setState({ 
            onAction: true
        })
    }

    onMouseLeave(){
        return this.setState({ 
            onAction: false
        })
    }

    setDropdownPosition(){
        const width = this.liItem.clientWidth;
        this.setState({
            left:width
        })
    }

    isDropdownSet(state, version){
        if(!this.props.dropdown){
            return '';
        }
        return (
            <Dropdown 
            state={state} 
            version={version} 
            left={this.state.left}
            dropdownElements={this.props.dropdownElements}/>
        )
    }

    renderList(){
        if(this.props.class === 'header-main-item'){
            const style = {
                color: this.state.onAction ? '#1e2123' : ''
            }
            return(
                <li 
                    className={`${this.props.class}`} 
                    ref={(liItem) => this.liItem = liItem } 
                    onMouseOver={() => { this.onMouseOver() }}
                    onMouseLeave={() => { this.onMouseLeave() }}
                    >
                    <a style={style} href="#">{this.props.name}</a>
                    {this.isDropdownSet(this.state.onAction, "")}
                </li>
            )
        } else{
            const style= {
                liStyle:{
                    backgroundColor: this.state.onAction ? '#448ccb' : ''
                },
                aStyle:{
                    color: this.state.onAction ? '#fff' : ''
                }
            }

            return(
                <li 
                    className={`${this.props.class}`} 
                    ref={(liItem) => this.liItem = liItem } 
                    onClick={()=> { this.onDropdownClick()}}
                    style={style.liStyle}
                    >
                    <a style={style.aStyle} href="#">{this.props.name}</a>
                    {this.isDropdownSet(this.state.onAction, "mobile")}
                </li>
            )
        }
    }

    render(){
        return this.renderList();
    }
}

export default HeaderMainItem;