import React from 'react'
import { motion } from 'framer-motion'
import { Suspense } from 'react'

const ContactButton = () => {
  return (
    <motion.div
    style={{ position: "fixed", bottom: "0", right: "0" }}
    className="contactButton"
    animate={{ rotate: [0, 360] }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    <svg viewBox="0 0 200 200" width="150" height="150">
      <circle cx="100" cy="100" r="90" fill="violet" />
      <path
        id="innerCirclePath"
        fill="none"
        d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
      />
      <text className="circleText"
      style={{letterSpacing: '3px', fontSize: '20px', color: 'white'}}
       fill="" fontSize="12">
        <textPath href="#innerCirclePath">Hire Now •</textPath>
      </text>
      <text className="circleText"
       style={{letterSpacing: '3px', fontSize: '20px', color: 'white'}}
       fill="" fontSize="12">
        <textPath href="#innerCirclePath" startOffset="44%">
          <a href='#contact'>
            Contact Me •
          </a>
        </textPath>
      </text>
    </svg>
    <div className="arrow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="50"
        height="50"
        fill="none"
        stroke="black"
        strokeWidth="2"
      >
        <line x1="6" y1="18" x2="18" y2="6" />
        <polyline points="9 6 18 6 18 15" />
      </svg>
    </div>
  </motion.div>
  )
}

export default ContactButton