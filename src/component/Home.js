import React, { useEffect } from 'react'
import About from './Home/About'
import background from '../assets/img/Background1-min.png'
import backgroundMb from '../assets/img/Background1-mb.jpg'

import HomeExperiences from './Home/Experiences&Projects'

const Home = () => {
  useEffect(() => {
    if (window.screen.width > 800)
      document.querySelector(
        'body'
      ).style.backgroundImage = `url(${background})`
    else if (window.screen.width < 800)
      document.querySelector(
        'body'
      ).style.backgroundImage = `url(${backgroundMb})`
  }, [])

  return (
    <div className="Home">
      <About />
      <HomeExperiences />
    </div>
  )
}

export default Home
