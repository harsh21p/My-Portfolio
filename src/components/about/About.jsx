import React from 'react'
import "./about.css"
import Me from '../../assets/me1-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id="about">
      
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <br></br>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={Me}/>
        </div>
      </div>
      
      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
          <a href="#experiance">
          <FiUsers className="about__icon"/>
            <h5>Experiance</h5>
            <small>1+ Year Working</small>
            </a>
          </article>
     
            <article className="about__card">
            <a href="#achievements">
             
              <FaAward className="about__icon"/>
              <h5>Achievements</h5>
              <small>20+ Acknowledgments</small>
              </a>
            </article>
          

            <article className="about__card">
            <a href="#portfolio">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
              </a>
            </article>
         
        </div>
    

        <p>
        Hey there, I'm Harshad, a fullstack software developer. I enjoy developing well-designed, responsive, and functional web applications and android applications. I am proficient in Kotlin, Java, JavaScript, TypeScript and the React ecosystem. I also have experience in developing REST API backends using Flask (Python), and Spring Boot (Java). I can leverage the power of AWS and Azure Cloud Services to deploy web applications that can scale. I'm always up for learning a new technology and exploring how it solves common problems.
        I'm currently working as a software developer at forhealth Solution's pvt. ltd.
        </p>

      <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About