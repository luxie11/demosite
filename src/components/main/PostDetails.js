import React from 'react';

import TitleContainer from '../TitleContainer';
import TextContainer from '../TextContainer';
import Column from '../Column';
import Loader from '../Loader'

const PostDetails = ({post}) =>{

    if(!post){
        return(
            <Loader />
        )
    }

    return(
        <Column column="1-2">
            <TitleContainer color="black" uppercase={false} title={post.title}/>
            <TextContainer color="grey">
                <label>
                    {post.body}
                </label>
            </TextContainer>
        </Column>
        
    )
}

export default PostDetails;