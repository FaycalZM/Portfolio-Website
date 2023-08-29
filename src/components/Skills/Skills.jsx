import React from 'react'
import stackData from '../../data/stack.json'
import Data from './Data'
import './skills.css'
import 'animate.css'
import AnimatedPage from '../AnimatedPage'


const Skills = () => {
  return (

    <AnimatedPage>
      <div className='section-header laptop:mt-2 tablet:mt-6 mt-12 flex items-baseline gap-4'>
        <h1 className='text-primary-white laptop:text-[2rem] tablet:text-[1.7rem] text-[2rem] font-bold font-Futura capitalize '>my stack</h1>
        <hr className='laptop:h-[1px] tablet:h-0.5 h-1 rounded-lg border-none opacity-80 flex-1 bg-primary-yellow' />
      </div>
      <div className='wrapper flex laptop:flex-row flex-col justify-evenly items-center '>

        <div className='laptop:w-1/2 px-2 w-full py-4 tablet:mb-8 mb-6 laptop:mb-0 flex flex-col gap-2'>
          {
            Data.map((skill, index) => {
              return <div
                key={index}
                className='skill laptop:mb-4 mb-1'
                style={{
                  animationDelay: `${index / 10}s`
                }}
              >
                <div className=' flex items-center gap-2 '>
                  <h5 className='laptop:text-2xl tablet:text-[1.35rem]'>{skill.name}</h5>
                  {skill.icon}
                </div>
                <div className="laptop:w-[75%] tablet:w-full bg-primary-white rounded-full h-2.5">
                  <div className="bg-primary-yellow h-full rounded-full" style={{ width: skill.progress }}></div>
                </div>
              </div>
            })
          }
        </div>

        <div className='icons pr-4 grid grid-cols-3 justify-center gap-y-8 mb-14 tablet:w-auto mx-auto w-full'>
          {
            stackData.map((icon, index) => {
              return <img
                key={index}
                className='tech-icon laptop:h-[12.5vh] tablet:h-[10vh] h-[10vh] hover:scale-125 transition-transform duration-150 ease-in justify-self-center'
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