import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import './header.css'
import { TypeAnimation } from 'react-type-animation'

const Header = () => {
  
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Harshad Pachore</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials/>
    
        <div className="text-light me">
         
          <TypeAnimation
        
            sequence={[
            'This blog reflects my ideas...',
            2000,
            'This blog reflects my projects...',
            2000,
            'This blog reflects my learnings...',
            2000,
            ]}
            speed={50}
            style={{ fontSize: '1em' }}
            wrapper="span" 
            repeat={Infinity} 
          />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header