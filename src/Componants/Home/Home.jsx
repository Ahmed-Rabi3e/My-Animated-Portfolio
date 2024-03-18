
import '../Home/Home.scss';

import { useEffect, useState } from 'react'
import LogoTitle from "../../assets/images/a.r-png.png"
import AnimatedLetters from "../AnimatedLetters/index"
import Logo from "./Logo/Logo"
import {Link} from "react-router-dom"
import Loader from 'react-loaders'



function Home() {
  const [letterClass , setLetterClass] = useState('text-animate')
  const nameArray = ['A','h','m','e','d',' ','R','a','b','i','e']
  const jobArray = ['W','e','b',' ','D','e','v','e','l','o','p','e','r']
  

  useEffect(() => {
    (async () => {
   
       //Put logic here
       return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
   
     })();
   
     }, [])
   

  return (
    <>
   <div className="container home-page">
    <div className='text-zone'>
        <h1>
        <span className={letterClass}>H</span>
        <span className={`${letterClass} _12`}>i,</span>
        <br />
        <span className={`${letterClass} _13`}>I</span>
        <span className={`${letterClass} _14`}>'m</span>
        <img  
          src={LogoTitle} 
          alt='developer'
        />
        <AnimatedLetters    
          letterClass={letterClass}
          strArray={nameArray}
          idx={15}
        />
        <br/>
        <AnimatedLetters  
          letterClass={letterClass}
          strArray={jobArray}
          idx={22}
        />
        </h1>
        <h2>Front End Developer / Java Script Expert</h2>
        <Link to="/contact" className="flat-button">CONTACT ME</Link>
    </div>
    <div className="ll-go">
    <Logo />
    </div>
    </div>
    <Loader type='pacman'/>
    </>
  );
}

export default Home;
