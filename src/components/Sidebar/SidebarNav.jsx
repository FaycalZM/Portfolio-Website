import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineHome, AiOutlineUser, AiOutlineMail } from 'react-icons/ai'
import { SlSettings } from 'react-icons/sl'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaMedapps } from 'react-icons/fa'
import './SidebarNav.css'
import 'animate.css'
import { useData } from '../../context/DataProvider'

const SidebarNav = () => {
    const { setMenuOpened } = useData();
    return (
        <div className='
            sidebar-nav w-full h-full max-h-full py-3 bg-very-dark-gray fixed top-0 left-0 z-[30] tablet:flex hidden flex-col justify-between
            desktop:w-[4.5vw] 
            laptop:w-[6vw] 
            tablet:w-[8vw]
        '>
            <a className='logo text-primary-white laptop:text-[3rem] tablet:text-[2.7rem] text-8xl font-light text-center w-full font-LeagueSpartan' href='/'><span className="font-Futura font-semibold text-primary-yellow ">F</span>z</a>
            <nav className='w-80% mx-auto flex flex-col gap-6 desktop::mt-24 items-start tablet:items-center'>
                <NavLink
                    onClick={() => {
                        setMenuOpened(false);
                    }}
                    exact='true'
                    activeclassname='active'
                    to={'/'}>
                    <AiOutlineHome />
                    <span className='tablet:hidden'>Home</span>
                </NavLink>
                <NavLink
                    onClick={() => {
                        setMenuOpened(false);
                    }}
                    exact='true'
                    activeclassname='active'
                    to={'/skills'}>
                    <SlSettings />
                    <span className='tablet:hidden'>Skills</span>
                </NavLink>
                <NavLink
                    onClick={() => {
                        setMenuOpened(false);
                    }}
                    exact='true'
                    activeclassname='active'
                    to={'/career'} >
                    <AiOutlineUser />
                    <span className='tablet:hidden'>About me</span>
                </NavLink>
                <NavLink
                    onClick={() => {
                        setMenuOpened(false);
                    }}
                    exact='true'
                    activeclassname='active'
                    to={'/projects'}>
                    <FaMedapps className='' />
                    <span className='tablet:hidden'>Projects</span>
                </NavLink>
                <NavLink
                    onClick={() => {
                        setMenuOpened(false);
                    }}
                    exact='true'
                    activeclassname='active'
                    to={'/contact'}>
                    <AiOutlineMail />
                    <span className='tablet:hidden'>Contact me</span>
                </NavLink>
            </nav>
            <ul className='social-links w-full text-secondary-gray flex tablet:flex-col flex-row justify-center items-center gap-3 mb-2  '>
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