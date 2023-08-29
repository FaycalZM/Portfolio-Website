import React from 'react'
import AnimatedPage from '../AnimatedPage'
import projectsData from './projectsData.json'
import GridContainer from './GridContainer'
import './work.css'
import 'animate.css'
const Projects = () => {
  return (
    <AnimatedPage>
      <div className='flex flex-col justify-evenly h-full'>
        <div className='section-header flex items-baseline gap-4 -mt-4'>
          <h1 className='text-primary-white text-4xl font-bold font-Futura capitalize '>my projects</h1>
          <hr className='laptop:h-[1px] tablet:h-0.5 rounded-lg border-none opacity-80 flex-1 bg-primary-yellow' />
        </div>
        <GridContainer list={projectsData} />
      </div>
    </AnimatedPage>
  )
}

export default Projects