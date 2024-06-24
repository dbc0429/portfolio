import React from 'react'
import '../assets/scss/banner.scss'
import { TypeAnimation } from 'react-type-animation';
import { IconButton } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook, faSkype, faLinkedinIn, faUpwork, faStaylinked } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';


export default function Banner() {
  return (
    <div className="banner">
      <div className="container mx-auto">
        <div className='banner-content text-center'>
          <div className='title-sub-container'>
            <h1 className='subTitle'> Hi, There </h1>
            <h2 className='name'> <b> I'm  <span className="highlight"> Dennis </span>  </b> </h2>
          </div>
          <h3 className='pos'>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "WordPress Developer",
                1000,
                "Frontend Developer",
              ]}
              className=""
              wrapper="span"
              speed={{ type: 'keyStrokeDelayInMs', value: 100 }}
              deletionSpeed={5}
              style={{ display: 'inline-block' }}
              repeat={Infinity}
            />
          </h3>
          <div className="flex gap-4 justify-center mt-10">
            <a href="mailto:dbc049@gmail.com">
              <IconButton size="md" className="rounded bg-[#2C3E50] hover:shadow-[#fff]/20 focus:shadow-[#fff]/20 active:shadow-[#fff]/10">
                <FontAwesomeIcon icon={faEnvelope} />
              </IconButton>
            </a>
            <a href="mailto:09561449646">
              <IconButton size="md" className="rounded bg-[#2C3E50] hover:shadow-[#fff]/20 focus:shadow-[#fff]/20 active:shadow-[#fff]/10">
                <FontAwesomeIcon icon={faPhone} />
              </IconButton>
            </a>
            <a href="https://join.skype.com/invite/mSVqe2Acnhne" target='_blank'>
              <IconButton className="rounded bg-[#2C3E50] hover:shadow-[#fff]/20 focus:shadow-[#fff]/20 active:shadow-[#fff]/10">
                <FontAwesomeIcon icon={faSkype} />
              </IconButton>
            </a>
            <a href="https://www.linkedin.com/in/dennisbello29" target='_blank'>
              <IconButton className="rounded bg-[#2C3E50] hover:shadow-[#fff]/20 focus:shadow-[#fff]/20 active:shadow-[#fff]/10">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </IconButton>
            </a>
            <a href="https://www.upwork.com/freelancers/~01d85f6ec70c5d9cfc" target='_blank'>
              <IconButton className="rounded bg-[#2C3E50] hover:shadow-[#fff]/20 focus:shadow-[#fff]/20 active:shadow-[#fff]/10">
                <FontAwesomeIcon icon={faUpwork} />
              </IconButton>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
