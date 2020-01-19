import React from 'react';
import About from './Home/About'
// import { render } from 'react-dom';

class Home extends React.Component{
    render(){
        return (
            <div className="Home">
                <About/>
            </div>
        )
    }

}

export default Home;