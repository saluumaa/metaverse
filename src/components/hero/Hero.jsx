import { motion } from "framer-motion";
import "./hero.css"; 
import { Canvas } from "@react-three/fiber";
import { Github, Linkedin, Twitter } from "lucide-react";
import Shape from "./Shape";


const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const rotatingTextVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: 10, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <div className="hero">
      {/* Left Section */}
      <div className="hSection left">
        {/* Title */}
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hTitle"
        >
          Hey There,
          <br />
          <span>I'm Salma!</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="description"
        >
          I'm a passionate <span>Full-Stack Developer</span> with expertise in building scalable web applications, designing intuitive user interfaces, and delivering seamless user experiences. I specialize in modern technologies like React, Node.js, MongoDB, Postgresql and I love turning ideas into reality.
        </motion.p>

        <motion.div
          variants={followVariants}
          initial="initial"
          animate="animate"
          className="follow"
        >
          <motion.a variants={followVariants} href="https://github.com/saluumaa">
            <Github />
          </motion.a>
          <motion.a variants={followVariants} href="https://twitter.com/SalmaHIbrahim20">
             <Twitter/>
          </motion.a>
          <motion.a variants={followVariants} href="https://www.linkedin.com/in/salma-ibrahim-78bb5a14a/">
            <Linkedin />
          </motion.a>
          <motion.div variants={followVariants} className="followTextContainer">
            <div className="followText">FOLLOW ME</div>
          </motion.div>
        </motion.div>

        {/* Scroll SVG */}
        <motion.a
          animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
          href="#about"
          className="scroll"
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <motion.path
              animate={{ y: [0, 5] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </motion.a>
      </div>

      {/* Right Section */}
      <div className="hSection right">
      <div className="animated-bg"></div>

        {/* Floating 3D Shape */}
        <div className="shape-container">
          <Canvas>
            <Shape />
          </Canvas>
          <div className="shape-image">
            <img src="/girl.png" alt="Salma" />
          </div>
        </div>
         
      </div>

    </div>
  );
};

export default Hero;