import React from 'react';


//Components
import TitleContainer from '../TitleContainer';
import TextContainer from '../TextContainer';
import Column from '../Column';
import PostDetails from './PostDetails';
import posts from '../../api/posts';


class Posts extends React.Component{

    state = {
        posts: [],
        selectedPost: null
    }

    componentDidMount(){
        this.postFetch();
    }

    async postFetch(){
        const postsResults = await posts.get('/posts');
        this.setState({
            posts:postsResults.data.slice(0, 4),
            selectedPost:postsResults.data[0]
        })
    }

    renderPostList(){
        return this.state.posts.map((post)=>{
            return (
                <div 
                    id={post.id} 
                    key={post.id} 
                    className="list-item"
                    onClick={()=>{ this.setState({ selectedPost: post })}}>
                {post.title}
                </div>
            )
        })
    }

    render(){
        return(
            <div className="posts-div">
                <div className="centered-container " style={{width: '90%',padding: '50px 0px', height: '100%', margin:'0 auto'}}>
                    <Column column="1-2">
                        <TitleContainer color="black" uppercase={false} title="Custom list"/>
                        <TextContainer color="grey">
                            <label>
                            Some heading
                            </label>
                        </TextContainer>
                        <div className="list-container">
                            {this.renderPostList()}
                        </div>
                    </Column>
                    <PostDetails post={this.state.selectedPost}/>
                </div>
            </div>
        )
    }
}


export default Posts;