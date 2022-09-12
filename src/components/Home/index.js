import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'

import depauw from '../../assets/images/depauw.jpeg'






const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['l', 'c', 'o', 'm', 'e', ' ','t','o', ' ',]
  const jobArray = [
 
    'C',
    'h',
    'e',
    'm',
    'W',
    'e',
    'b',
    ':',
    'A',
    ' ',
    '2',
    'D',
    ' ',
    'M',
    'o',
    'l',
    'e',
    'c',
    'u',
    'l',
    'a',
    'r',
    '',
    'B',
    'u',
    'i',
    'l',
    'd',
    'e',
    'r',
    ' ',
    'G',
    'a',
    'm',
    'e'
  ]

  useEffect(() => {
     setTimeout(() => {
		return setLetterClass('text-animate-hover')
    }, 5000)
  }, [])

  const myStyle={
    backgroundImage: "url(https://www.wallpaperflare.com/static/398/638/518/atoms-protons-electrons-digital-art-wallpaper.jpg)",
    // https://images.squarespace-cdn.com/content/v1/5d4cfd87082420000108b311/1566718849902-809OYSILCPJLAKT97XWE/futuristic-technology-abstract-background-beautiful-footage-087637197_prevstill.jpeg?format=2500w)
    height:'110vh',
    marginTop:'-70px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',

};

//https://i.im.ge/2022/07/31/FNxtcF.abstract-glittering-dna-double-helix-with-depth-of-field-science-animation-of-dna-construction-genom-futuristic-footage-conceptual-design-of-genetics-information-4k-computer-generated-animation-motion-background-storyblocks.png


 
  return (
    <div >
      <div className="container home-page"  style={myStyle}  >

        
        <div className="text-zone" >
    

  
          

          <h1>
       
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>W</span>
            <span className={`${letterClass} _14`}>e</span>
        
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={14}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={1}
            />
          </h1>

          <Link to="about" className="flat-button">
            Tutorial 
          </Link>

          <Link to="/contact" className="flat-button2">
            Game 
          </Link>

          <Link to="/portfolio" className="flat-button3">
            Credits 
          </Link>
        </div>

   

      </div>

	  <Loader type="pacman" />
    </div>
  )
}

export default Home
