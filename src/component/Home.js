import React from 'react';
import About from './Home/About'
import Experiences from './Home/Experiences_&_Proyects'
import BlogPreview from './Home/blogPreview';

class Home extends React.Component{
    render(){
        return (
            <div className="Home">
                <About/>
                <Experiences/>
                <BlogPreview/>
            </div>
        )
    }

}

export default Home;