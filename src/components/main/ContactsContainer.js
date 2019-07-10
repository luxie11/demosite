import React from 'react';

//Components
import Button from '../Button';
import TextContainer from '../TextContainer';
import TitleColumn from '../TitleColumn';
import Column from '../Column';
import ContactsInput from './ContactsInput';

const ContactsContainer = () =>{
    return(
        <div className="container">
            <TitleColumn color="black" uppercase={true} title="contact"/>
            <Column column="1-2">
                <TextContainer color="grey">
                    <label>
                        Cras feugiat est in pulvinar placerat. Morbi sagittis eros mauris, in tincidunt ex vestibulum hendrerit.
                        Suspendisse sollicitudin tempor mi non suscipit.
                        Duis posuere pharetra ex, sit amet euismod sem ultricies in.
                    </label>
                </TextContainer>
                <TextContainer color="grey">
                    <label>
                        Cras feugiat est in pulvinar placerat. Morbi sagittis eros mauris, in tincidunt ex vestibulum hendrerit.
                        Suspendisse sollicitudin tempor mi non suscipit.
                        Duis posuere pharetra ex, sit amet euismod sem ultricies in.
                    </label>
                </TextContainer>
                <TextContainer color="grey">
                    <label>
                        Cras feugiat est in pulvinar placerat. Morbi sagittis eros mauris, in tincidunt ex vestibulum hendrerit.
                        Suspendisse sollicitudin tempor mi non suscipit.
                        Duis posuere pharetra ex, sit amet euismod sem ultricies in.
                    </label>
                </TextContainer>
            </Column>
            <Column column="1-2">
                <ContactsInput />
                <Button color="blue" text="send" />
            </Column>
        </div>
    )
}

export default ContactsContainer;