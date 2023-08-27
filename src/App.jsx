import { useState } from 'react'
import { Routes, Route } from 'react-router'
import SidebarNav from './components/Sidebar/SidebarNav'
import './App.css'
import HeroSection from './components/HeroSection/HeroSection'
import Skills from './components/Skills/Skills'
import Career from './components/Career/Career'
import Projects from './components/Work/Projects'
import Contact from './components/Contact/Contact'
import NotFound from './components/NotFoundPage/NotFound'
import AnimatedPage from './components/AnimatedPage'

function App() {
  return <main className='main-page w-full h-full bg-very-dark-blue'>
    <SidebarNav />
    <section className='main-content w-[95.5vw] min-h-[100vh] ml-[4.5vw] p-4 text-primary-white relative flex justify-center items-center'>
      <span className='tag font-LaBelleAurore text-xl text-primary-yellow absolute top-2 left-3 opacity-75'>&lt;body&gt;</span>
      <Routes>
        <Route path='/' element={<HeroSection />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/career' element={<Career />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <p className='tag font-LaBelleAurore text-xl text-primary-yellow absolute bottom-0 left-3 opacity-75'>
        <span>&lt;/body &gt;</span>
        <br />
        <span>&lt;/html&gt;</span>
      </p>
    </section>
  </main >
}

export default App
