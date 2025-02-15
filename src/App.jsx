import Hero from './components/hero/Hero'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import ContactButton from './components/ContactButton'
import AboutMe from './components/about/AboutMe'

const App = () => {
  return (
    <div className='container'>
      <section id="#home">
        <Hero />
      </section>
      <section id="#about">
        <AboutMe />
      </section>
      <section id="#services">
        <Services />
      </section>
      {/* <section id="#portfolio"> */}
        <Portfolio />
      {/* </section> */}
      <section id="#contact">
        <Contact />
      </section>


      <ContactButton />
      
    </div>
  )
}

export default App