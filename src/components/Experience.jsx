import React from 'react'
import '../assets/scss/base.scss'
import '../assets/scss/experience.scss'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from "@mui/icons-material/Work";
import { ExperienceList } from '../helpers/ExperienceList';

function Experience() {
  return (
    <div className='experience bg-[#020617]'>
      <div className="container mx-auto pt-10">
        <div className="sub-title-container text-center mb-5">
          <p className='subTitle'> About My </p>
          <h2 className='highlight text-5xl'> Experience </h2>
        </div>
        <div className="exp">

          <VerticalTimeline lineColor="#1E88E5">
            {ExperienceList.map((exp) => {
              return (
                <VerticalTimelineElement key={exp.id}
                  className="vertical-timeline-element--education"
                  date={exp.date}
                  address={exp.address}
                  iconStyle={{ background: "#020617", color: "#fff" }}
                  icon={<WorkIcon />}
                >
                  <h3 className="vertical-timeline-element-title">
                    {exp.name}
                  </h3>
                  <p>
                    {exp.address}
                  </p>
                  <ul>
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </div >
    </div>
  )
}

export default Experience