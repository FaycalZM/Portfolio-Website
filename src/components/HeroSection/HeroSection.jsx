import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import 'animate.css'
import './index.css'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import avatar from '/avatar/_fanart__reapertale_sans_by_sofua_d9n933w.png'
import AnimatedPage from '../AnimatedPage'

const HeroSection = () => {

  const [animatedTextClass,] = useState('overview text-7xl/[4.5rem] tracking-tight font-bold');
  const [salutaion,] = useState(['H', 'i', ',']);
  const [name,] = useState(['a', 'y', 's', 's', 'a', 'l', ',']);
  const [job,] = useState(['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']);



  return (
    <AnimatedPage>
      <div className='w-[90%] m-auto flex justify-around items-center '>
        <div>
          <span
            className='tag block font-LaBelleAurore text-primary-yellow text-xl opacity-75'>&lt;h1&gt;</span>

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
            animatedTextClass={`${animatedTextClass} inline-block text-primary-yellow text-8xl font-LaBelleAurore mr-2 font-light`}
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

          <p className='titles opacity-70 capitalize text-lg tracking-wide'>frontend developer | software engeneering student at esi algiers</p>
          <div className='flex gap-8'>
            <Link
              to={'/contact'}
              className="btn text-primary-yellow text-xl font-bold border-primary-yellow border-2 p-2.5 mt-6 capitalize
            hover:bg-primary-yellow hover:shadow-[4px_4px_0px_#ffd700] hover:text-dark-gray hover:border-dark-gray"
            >
              Contact Me
            </Link>
            <a
              className="btn text-dark-gray text-xl font-bold bg-primary-yellow border-primary-yellow border-2 p-2.5 mt-6 capitalize cursor-pointer
            hover:bg-very-dark-blue hover:shadow-[4px_4px_0px_#ffd700] hover:text-primary-yellow"
            >
              my resume
            </a>
          </div>
        </div>
        <div className='avatar-container'>
          <img
            className='h-[80vh]'
            src={avatar}
            alt="avatar" />
        </div>

      </div>
    </AnimatedPage>

  )
}

export default HeroSection