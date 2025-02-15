import React from 'react'
import { ArrowRightIcon } from 'lucide-react'
import "./about.css";


const AboutMe = () => {
  return (
    <div className="about-container" id='about'>
        {/* <div className="about-content"> */}
        <section className="left-section">
            <div className='image-background'>
                <img src='./salmapic.png' alt='salmaImage' />
            
            <div className='skills'>
                <span>JavaScript</span> <br />
                <span>ReactJs</span>
                <span>NodeJs</span> <br />
                <span>ExpressJs</span>
                <span>MongoDB</span>
                <span>RubyOnRails</span> 
                <span>Postgresql</span>
            </div>
            </div>
            
        </section>
        <section className="right-section">
            <div className="about-text">
            <h1>About Me</h1>
            <h2>Who is 
               <span>Salma Hassan</span>
            </h2>
            <p>
            I am a passionate full-stack developer with expertise in building web applications  
            A graduate of Amoud University in Business IT and Project Management, 
            I thrive on challenges that push my skills further. I’m a creative problem-solver, a dedicated team player, and a strong communicator who values collaboration. 
            My goal is to deliver high-quality, innovative solutions
             that meet client needs while continuously growing as a developer.
            
             </p>
            </div>
            <div className="resume">
                <button>
                    <a href="https://docs.google.com/document/d/13L3twqADwqlVPp_u6h0hobwfnsvXVi5oadwbj_2jdgM/edit?tab=t.0">Download Resume</a>
                </button>
                <ArrowRightIcon className='righ-arrow' />
            </div>
        </section>
      {/* </div> */}
    </div>
  )
}

export default AboutMe