import React from 'react';
import '../style/App.css';

//App Components
import Header from './header/Header';
import AboutContainer from './main/AboutContainer';
import PostsContainer from './main/PostsContainer';
import ContactsContainer from './main/ContactsContainer';
import Footer from './footer/Footer';


class App extends React.Component{
    render(){
        return(
            <div className="page">
                <Header />
                <main>
                    <AboutContainer />
                    <PostsContainer />
                    <ContactsContainer />
                </main>
                <Footer />
            </div>
        )
    }
}

export default App