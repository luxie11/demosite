import React from 'react';

class Drowdown extends React.Component{

    renderDropdown(){
        let _class = "";
        let style = {};
        if(this.props.version === "mobile"){
            style = {
                display: this.props.state ? 'block' : 'none'
            }
            _class = "mobile-dropdown";
        } else{
            style = {
                left: 0-this.props.left,
                display: this.props.state ? 'block' : 'none'
            }
            _class = "dropdown";
        } 
        return (
            <ul className={_class} style={style} onClick={(e)=> e.stopPropagation()}>
                {this.props.dropdownElements}  
            </ul>
        )
    }

    render(){
        return this.renderDropdown();
    }
}
    
export default Drowdown;