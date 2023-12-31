import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import 'animate.css'
import './hero.css'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import avatar from '/avatar/_fanart__reapertale_sans_by_sofua_d9n933w.png'
import AnimatedPage from '../AnimatedPage'

const HeroSection = () => {

  const [animatedTextClass,] = useState('overview desktop:text-7xl/[4.5rem] laptop:text-6xl/[3.75rem] tablet:text-5xl/[3.5rem] text-[2.85rem] leading-[2.95rem] tracking-tight font-bold');
  const [salutaion,] = useState(['H', 'i', ',']);
  const [name,] = useState(['a', 'y', 's', 's', 'a', 'l', ',']);
  const [job,] = useState(['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']);



  return (
    <AnimatedPage>
      <div className='laptop:w-[90%] tablet:w-[97%] h-fit m-auto flex flex-col-reverse tablet:flex-row justify-around items-center '>
        <div className='flex flex-col items-center tablet:block'>
          <div>
            <span
              className='tag block font-LaBelleAurore text-primary-yellow text-xl opacity-75 -ml-4'>&lt;h1&gt;</span>

            <AnimatedLetters
              animatedText={salutaion}
              animatedTextClass={animatedTextClass}
              startingIndex={0}
            />
            <AnimatedLetters
              animatedText={['I', '\'', 'm']}
              animatedTextClass={`${animatedTextClass} inline-block mr-4`}
              startingIndex={3}
            />
            <AnimatedLetters
              animatedText={['F']}
              animatedTextClass={`${animatedTextClass} inline-block text-primary-yellow desktop:text-8xl laptop:text-7xl text-6xl font-LaBelleAurore mr-2 font-light`}
              startingIndex={6}
            />
            <AnimatedLetters
              animatedText={name}
              animatedTextClass={`${animatedTextClass} inline-block`}
              startingIndex={7}
            />
            <AnimatedLetters
              animatedText={job}
              animatedTextClass={animatedTextClass}
              startingIndex={14}
            />
            <span
              className='tag font-LaBelleAurore text-primary-yellow text-xl opacity-75 -ml-4'>&lt;/h1&gt;</span>
          </div>

          <p className='titles opacity-70 text-center w-[87.5%] mt-2 tablet:text-left capitalize laptop:text-lg tablet:w-[90%] tracking-wide'>frontend developer | software engeneering student at esi algiers</p>

          <div className='flex px-6 tablet:px-0 w-full gap-8 text-center mb-14 tablet:mb-2'>
            <Link
              to={'/contact'}
              className="btn flex-1 tablet:flex-none text-primary-yellow laptop:text-xl tablet:text-lg font-bold border-primary-yellow border-2 p-2.5 mt-6 capitalize transition-all duration-150 ease-in
            hover:bg-primary-yellow hover:shadow-[4px_4px_0px_#ffd700] hover:text-dark-gray hover:border-dark-gray"
            >
              Contact Me
            </Link>
            <a
              className="btn flex-1 tablet:flex-none text-dark-gray laptop:text-xl tablet:text-lg font-bold bg-primary-yellow border-primary-yellow border-2 p-2.5 mt-6 capitalize cursor-pointer transition-all duration-150 ease-in
            hover:bg-very-dark-blue hover:shadow-[4px_4px_0px_#ffd700] hover:text-primary-yellow"
            >
              my resume
            </a>
          </div>

        </div>
        <div className='avatar-container'>
          <img
            className='desktop::h-[80vh] laptop:h-[60vh] tablet:h-[35vh] h-[40vh]'
            src={avatar}
            alt="avatar" />
        </div>

      </div>
    </AnimatedPage>

  )
}

export default HeroSection