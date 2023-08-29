import React from 'react'
import AnimatedPage from '../AnimatedPage'
import 'animate.css'
import './career.css'

const Career = () => {
  return (
    <AnimatedPage>
      <div className='laptop:h-[80vh] tablet:h-[85vh]'>
        <div className='section-header flex items-baseline gap-4 -mt-10'>
          <h1 className='text-primary-white text-4xl font-bold font-Futura capitalize '>About me</h1>
          <hr className='laptop:h-[1px] tablet:h-0.5 rounded-lg border-none opacity-80 flex-1 bg-primary-yellow' />
        </div>
        <div className='container flex laptop:flex-row tablet:flex-col laptop:justify-between'>
          <div className='infos laptop:w-[45%] tablet:w-full mt-2 py-2 '>
            <legend className="w-fit ml-[50%] translate-x-[-50%] border-2 border-primary-yellow rounded-3xl py-1 px-8 font-semibold text-xl text-primary-yellow text-opacity-90">
              Education
            </legend>
            <div className='flex gap-8 laptop:mt-8 tablet:mt-6'>
              <div className='flex flex-col items-center'>
                <div className='w-[12px] h-[12px] rounded-full bg-primary-yellow border-2 border-primary-yellow'></div>
                <div className='h-full w-[2px] bg-primary-white opacity-95'></div>
                <div className='w-[12px] h-[12px] rounded-full bg-primary-yellow border-2 border-primary-yellow'></div>
              </div>
              <div
                className='
                border-[1px] border-primary-yellow px-3 py-2.5 capitalize w-full font-LeagueSpartan
                hover:bg-very-dark-blue hover:shadow-[4px_4px_0px_#ffd700] hover:-translate-y-1 transition-all duration-150 ease-in
              '>
                <h1 className='text-2xl'>computer science, software engennering</h1>
                <p className='opacity-60 text-[1.2rem] italic'>the higher school of computer science ESI <span className='normal-case'>ex</span>  INI - Algiers  </p>
                <p className='text-primary-yellow text-xl'>year 2020 - present</p>
                <p className='normal-case opacity-80 tracking-wider text-lg'>
                  As an undergraduate student, I have a good understanding of web development technologies such as HTML,
                  CSS, Tailwind CSS, JavaScript, and React JS. Additionally,
                  I'm proficient in problem solving and DSA using C and JAVA.
                  Finally, I can say that I'm a dedicated and collaborative individual who thrives as both a team player
                  and a diligent worker. Throughout my experiences, I have consistently demonstrated my commitment to
                  achieving common goals through effective teamwork, while also showcasing an unwavering work ethic
                </p>
              </div>
            </div>
          </div>
          <div className='infos laptop:w-[45%] tablet:w-full mt-4 py-2'>
            <legend className="w-fit ml-[50%] translate-x-[-50%] border-2 border-primary-yellow rounded-3xl py-1 px-8 font-semibold text-xl text-primary-yellow text-opacity-90" >
              Internships
            </legend>
            <div className=' flex gap-8 laptop:mt-8 tablet:mt-6'>
              <div className='flex flex-col items-center'>
                <div className='w-[12px] h-[12px] rounded-full bg-primary-yellow border-2 border-primary-yellow'></div>
                <div className='h-full w-[2px] bg-primary-white opacity-95'></div>
                <div className='w-[12px] h-[12px] rounded-full bg-primary-yellow border-2 border-primary-yellow'></div>
              </div>
              <div
                className='
                border-[1px] border-primary-yellow px-3 py-2.5 capitalize w-full font-LeagueSpartan
                hover:bg-very-dark-blue hover:shadow-[4px_4px_0px_#ffd700] hover:-translate-y-1 transition-all duration-150 ease-in
              '>
                <h1 className='text-2xl whitespace-nowrap'>pending...</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>

  )
}

export default Career