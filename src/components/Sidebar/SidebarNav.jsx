import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineHome, AiOutlineUser, AiOutlineMail } from 'react-icons/ai'
import { SlSettings } from 'react-icons/sl'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaMedapps } from 'react-icons/fa'
import './SidebarNav.css'
import 'animate.css'

const SidebarNav = () => {
    return (
        <div className='sidebar-nav w-[4.5vw] h-[100vh] py-3 bg-very-dark-gray fixed top-0 left-0 z-10 flex flex-col justify-between'>
            <a className='logo text-primary-white text-[3rem] font-light text-center w-full font-LeagueSpartan' href='/'><span className="font-Futura font-semibold text-primary-yellow ">F</span>z</a>
            <nav className='w-full flex flex-col gap-6 mt-24 items-center'>
                <NavLink
                    exact='true'
                    activeclassname='active'
                    to={'/'}>
                    <AiOutlineHome />
                </NavLink>
                <NavLink
                    exact='true'
                    activeclassname='active'
                    to={'/skills'}>
                    <SlSettings />
                </NavLink>
                <NavLink
                    exact='true'
                    activeclassname='active'
                    to={'/career'} >
                    <AiOutlineUser />
                </NavLink>
                <NavLink
                    exact='true'
                    activeclassname='active'
                    to={'/projects'}>
                    <FaMedapps className='' />
                </NavLink>
                <NavLink
                    exact='true'
                    activeclassname='active'
                    to={'/contact'}>
                    <AiOutlineMail />
                </NavLink>
            </nav>
            <ul className='social-links w-full text-secondary-gray flex flex-col items-center gap-3 mb-2  '>
                <a href="https://github.com/FaycalZM"
                    target='_blank'
                    rel='noreferrer'>
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/fayssal-zemmouri-2545a0259/"
                    target='_blank'
                    rel='noreferrer'>
                    <FaLinkedin />
                </a>
                <a
                    href="https://twitter.com/FaycalZemmouri"
                    target='_blank'
                    rel='noreferrer'>
                    <FaTwitter />
                </a>
                <a href="https://www.instagram.com/faycal_zemmouri/"
                    target='_blank'
                    rel='noreferrer'>
                    <FaInstagram />
                </a>
            </ul>
        </div>
    )
}

export default SidebarNav;