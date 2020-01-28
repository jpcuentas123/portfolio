import React from 'react';
import About from './Home/About'
import Experiences from './Home/Experiences_&_Proyects'
// import { render } from 'react-dom';

class Home extends React.Component{
    render(){
        return (
            <div className="Home">
                <About/>
                <Experiences/>
            </div>
        )
    }

}

export default Home;