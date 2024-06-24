import React from 'react'
import '../assets/scss/base.scss'
import SchoolIcon from "@mui/icons-material/School"

function About() {

  const currentYear = new Date().getFullYear();

  return (
    <div className="about">
      <div className='container mx-auto lg:container-xl lg:mx-auto spacer'>
        <div className='sub-title-container'>
          <p className='subTitle'> About Me</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          <div className='left-content'>
            <h2 className='text-3xl mb-3'> <b> Full Stack Developer</b></h2>
            <p>
              I have <span className="highlight">{currentYear - 2018} years</span> of experience as a Fullstack WordPress Developer with on page <span className="highlight"> SEO skills </span>. I have honed my skills in customization and page builder development. I have worked with various clients across different industries, providing effective solutions that meet their unique needs.
            </p>
            <p> I use either <span className="highlight"> FileZilla </span> or <span className="highlight">XAMP/Git </span> when developing Website.</p>
            <p>Usually, Clients provide Mockup Design via <span className="highlight">Figma</span>, <span className="highlight">Sketch</span>, <span className="highlight">Adobe XD</span>, <span className="highlight">Invision</span>, or <span className="highlight">Photoshop</span>.</p>
          </div>
          <div className='right-content'>
            <h2 className='text-3xl mb-3'><b> <SchoolIcon /> Education </b> </h2>
            <p>Bachelor of Science in Information Systems
              <span> </span> <strong className='highlight'>(BSIS)</strong>, <br />City College,<br /> Bachelor's degree, <br />  Year <strong>2013 – 2017</strong>
            </p>
            <h2 className='text-3xl mb-3'> <b> Location </b> </h2>
            <p><b> Philippines</b>
              <br />
              Angeles City
              <br />
              Province Pampanga
            </p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default About