import React from 'react'
import '../assets/scss/footer.scss'

function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <div className='footer-info'>
      &copy; Copyright {currentYear} | Develop with <span className='heart text-red text-lg text-[#dc2626]'> &hearts;</span> by Dennis
    </div>
  )
}

export default Footer