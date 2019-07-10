import React from 'react';

//Components
import TextContainer from '../TextContainer';
import TitleContainer from '../TitleContainer';
import Column from '../Column';
import Posts from './Posts';
import FullWidthContainer from './FullWidthContainer'

const PostsContainer = () =>{
    return(
        <FullWidthContainer>
            <div className="container">
                <Column column="2-10">
                    <TitleContainer color="white" uppercase={true} title="WEB DEVELOPMENT"/>
                    <TextContainer color="blue">
                        <label>
                        Praesent interdum est gravida vehicula est node maecenas loareet morbi a dosis luctus novum est praesent. 
                        Magna est consectetur interdum modest dictum. Curabitur est faucibus.
                        </label>
                    </TextContainer>
                    <TextContainer color="blue">
                        <label>
                        Praesent interdum est gravida vehicula est node maecenas loareet morbi a dosis luctus novum est praesent. 
                        Magna est consectetur interdum modest dictum. Curabitur est faucibus.
                        </label>
                    </TextContainer>
                </Column>
                <Column column="8-10">
                    <div className="inner-container">
                        <TitleContainer color="white" uppercase={true} title="Wireframe"/>
                        <TextContainer color="blue">
                            <label>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                                Aenean commodo ligula eget dolor.
                            </label>
                        </TextContainer>
                    </div>
                    <Posts />                               
                </Column>
            </div>
        </FullWidthContainer>
    )
}

export default PostsContainer;