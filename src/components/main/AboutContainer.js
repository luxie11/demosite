import React from 'react';

//Components
import Button from '../Button';
import TextContainer from '../TextContainer';
import TitleContainer from '../TitleContainer';
import TitleColumn from '../TitleColumn';
import Column from '../Column';

const AboutContainer = () =>{
    return(
        <div className="container">
            <Column column="2-10" class="blue-container">
                <div className="welcome-div">
                    <TitleColumn color="white" uppercase={true} title="Welcome"/>
                    <TextContainer color="blue"> 
                        <label>
                            Praesent interdum est gravida vehicula est node maecenas loareet morbi a dosis luctus novum est praesent. 
                            Magna est consectetur interdum modest dictum. Curabitur est faucibus.
                        </label>
                    </TextContainer>
                    <Button bottom={true} color="white" text="learn more"/>
                </div>
            </Column>
            <Column column="8-10" class="center">
                <div className="inner-container">
                    <div className="image-container">
                        <img alt="futurama" src="https://i.ytimg.com/vi/vI3-kzz4UyE/maxresdefault.jpg" />
                    </div>
                    <div className="grey-container text-box">
                        <TitleContainer color="black" uppercase={true} title="UI/UX Design"/>
                        <TextContainer color="grey">
                            <label>
                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                                sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
                            </label>
                        </TextContainer>
                        <TextContainer color="grey">
                            <label>
                                Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.
                            </label>
                        </TextContainer>
                    </div>
                </div>
            </Column>
        </div>
    )
}

export default AboutContainer;