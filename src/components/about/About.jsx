import React from 'react'
import './about.css'
import ME from '../../assets/Hana_pinkshirt.jpeg'
import { GiGraduateCap } from 'react-icons/gi'
import { BsStack } from 'react-icons/bs'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
    <h5>Get to Know</h5>
    <h2>About Me</h2>
    
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About image" />
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <GiGraduateCap className='about__icon'/>
            <h5>Education</h5>
            <small>Computer Science Degree</small>
          </article>
          <article className='about__card'>
            <BsStack className='about__icon'/>
            <h5>Tech Stack</h5>
            <small>10+ and learning...</small>
          </article>
          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>42+ Completed</small>
          </article>
        </div>
        <p>
        I’m a US-based Web Developer currently located in Thailand. I have a passion for Web Development which include Front End design down to Backend programming.
        </p>
        <p>
        People recognized me as a problem solver, an initiator, and a detail-orientated person. Which lead to my hobbies of solving puzzle games, badminton, and cooking.
        </p>
        <p>
        Strong interest in automating with computers, and this drives my motivation to become a Full Stack developer.
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About