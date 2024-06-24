import React from 'react';
import upWork1 from '../assets/img/upwork1.jpg';
import { TestimonialList } from '../helpers/TestimonialList';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpwork } from '@fortawesome/free-brands-svg-icons';

function Testimonials() {
  return (
    <div className='testi bg-[#020617]'>
      <div className='container-fluid spacer mx-auto'>
        <div className="sub-title-container text-center mb-5">
          <p className='subTitle mb-5'> Testimonials </p>
          <h2 className='highlight text-5xl'> What clients say </h2>
        </div>
        <div class="flex flex-wrap justify-center mt-10">
          {TestimonialList.map((item, idx) => (
            <a href={item.link} target="_blank" key={item.id}>
              <div className="p-4 max-w-sm">
                <div className="flex rounded-lg h-full dark:bg-gray-800 p-0 md:p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div
                      className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-green-500 bg-green-500 text-white flex-shrink-0">
                      <FontAwesomeIcon icon={faUpwork} />
                    </div>
                    <h2 className="text-white dark:text-white text-lg font-medium">{item.name}</h2>
                  </div>
                  <div className="flex flex-col justify-between flex-grow">
                    <p className="leading-relaxed text-base text-white dark:text-gray-300">
                      {item.description}
                    </p>
                    <a href="https://www.upwork.com/freelancers/~01d85f6ec70c5d9cfc" target='_blank' className="mt-3 text-white dark:text-white hover:text-blue-600 inline-flex items-center">Learn More
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials