import React from 'react'
import stackData from '../../data/stack.json'
import Data from './Data'
import './index.css'
import 'animate.css'
import AnimatedPage from '../AnimatedPage'


const Skills = () => {
  return (

    <AnimatedPage>
      <div className='section-header mt-2 flex items-baseline gap-4'>
        <h1 className='text-primary-white text-4xl font-bold font-Futura capitalize '>my stack</h1>
        <hr className='h-[1px] border-none opacity-80 flex-1 bg-primary-yellow' />
      </div>
      <div className='wrapper flex justify-evenly items-center'>

        <div className='w-1/2 pl-4 py-4 flex flex-col gap-2'>
          {
            Data.map((skill, index) => {
              return <div
                key={index}
                className='skill'
                style={{
                  animationDelay: `${index / 10}s`
                }}
              >
                <div className=' flex items-center gap-2 py-1'>
                  <h5 className='text-lg'>{skill.name}</h5>
                  {skill.icon}
                </div>
                <div className="w-[75%] bg-primary-white rounded-full h-2.5">
                  <div className="bg-primary-yellow h-2.5 rounded-full" style={{ width: skill.progress }}></div>
                </div>
              </div>
            })
          }
        </div>

        <div className='icons p-4 grid grid-cols-3 gap-y-8'>
          {
            stackData.map((icon, index) => {
              return <img
                key={index}
                className='h-[12.5vh] hover:scale-125 transition-transform duration-200 ease-in'
                style={{
                  animationDelay: `${1 + index / 10}s`
                }}
                src={icon}
                alt="skill-icon" />
            })
          }
        </div>
      </div>

    </AnimatedPage>
  )
}

export default Skills