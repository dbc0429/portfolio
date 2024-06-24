import './App.css'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import Banner from './components/Banner';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className='main'>
      <Banner />
      <ParallaxProvider>
        <Parallax speed={5} style={{ background: '#FFF' }}>
          <About />
        </Parallax>
        <Parallax speed={-5}>
          <Experience />
        </Parallax>
        <Parallax speed={5} style={{ background: '#FFF' }}>
          <Projects />
        </Parallax>
        <Parallax speed={-5}>
          <Testimonials />
        </Parallax>
      </ParallaxProvider>
      <Footer />
    </div>
  )
}

export default App
