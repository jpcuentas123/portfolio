import React from 'react';
import About from './Home/About'
import Experiences from './Home/Experiences_&_Proyects'
import background from '../assets/img/Background.png'
import BlogPreview from './Home/blogPreview';

class Home extends React.Component {
    componentDidMount() {
        document.querySelector("body").style.backgroundImage = `url(${background})`;
    };
    render() {
        return (
            <div className="Home">
                <About />
                <Experiences />
                <BlogPreview />
            </div>
        )
    }

}

export default Home;