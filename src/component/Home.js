import React from 'react';
import About from './Home/About'
import Experiences from './Home/Experiences_&_Proyects'
import background from '../assets/img/Background1-min.png'
import backgroundMb from '../assets/img/Background1-mb.jpg'

import BlogPreview from './Home/blogPreview';

class Home extends React.Component {
    componentDidMount() {
        if (window.screen.width > 800)
            document.querySelector("body").style.backgroundImage = `url(${background})`;
        else if (window.screen.width < 800)
            document.querySelector("body").style.backgroundImage = `url(${backgroundMb})`;


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