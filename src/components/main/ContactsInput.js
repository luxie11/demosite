import React, { useState } from 'react';

const ContactInput = () =>{
    const [ inputValue, setInputValue ] = useState({
        name:'',
        email:'',
        message: ''
    });
    return(
        <React.Fragment>
            <div className="labeled-input">
                <label className="uppercase">Name</label>
                <input value={inputValue.name} onChange={
                    (e)=>{
                        setInputValue({ name: e.target.value })
                    }
                }/>
            </div>
            <div className="labeled-input">
                <label className="uppercase">Email</label>
                <input value={inputValue.email} onChange={
                    (e)=>{
                        setInputValue({ email: e.target.value })
                    }
                }/>
            </div>
            <div className="labeled-input">
                <label className="uppercase">Message</label>
                <textarea value={inputValue.message} onChange={
                    (e)=>{
                        setInputValue({ message: e.target.value })
                    }
                }/>
            </div>
        </React.Fragment>
    )
}

export default ContactInput;