import React from 'react'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import 'animate.css'


const Project = ({ project, index }) => {
    return (
        <div className='card tablet:snap-center mb-4 tablet:mb-0' style={{ animationDelay: `${0.7 + index / 10}s` }}>
            <div
                className="project-card max-h-[40vh] laptop:h-[32.5vh] tablet:h-[37.5vh] h-[30vh] laptop:w-auto tablet:w-[81vw]  relative overflow-y-hidden cursor-pointer rounded-md hover:rounded-none
                after:content-[''] after:h-full after:w-full after:bg-very-dark-blue after:bg-opacity-90 after:absolute after:top-full
                hover:after:top-0 hover:after:transition-all hover:after:duration-300 hover:shadow-[3px_3px_0px_#ffd700] hover:border-primary-yellow hover:border-[1px] hover:transition-all"
            >
                <img
                    className='absolute h-full w-full z-0'
                    src={project.backdrop_img}
                    alt="project_img" />
                <div className='project-details opacity-0 h-full w-full relative z-10 p-4 text-center flex flex-col justify-center'>
                    <p className='capitalize desktop:text-xl mb-3 font-light'>
                        {project.description}
                    </p>
                    <div className='flex justify-center gap-8'>
                        <a
                            href={project.live_URL}
                            target='_blank'
                            className="text-dark-gray text-lg bg-primary-yellow border-primary-yellow border-[1px] flex gap-2 items-center py-1 px-2 capitalize cursor-pointer transition-all duration-150 ease-in
                                hover:bg-very-dark-blue hover:shadow-[4px_4px_0px_#ffd700] hover:text-primary-yellow">
                            <BsBoxArrowUpRight className='inline' />
                            <span>live</span>
                        </a>
                        <a
                            href={project.github_repo}
                            target='_blank'
                            className='text-primary-yellow text-lg border-primary-yellow border-[1px]  flex gap-2 items-center py-1 px-2 capitalize transition-all duration-150 ease-in
                                hover:bg-primary-yellow hover:shadow-[4px_4px_0px_#ffd700] hover:text-dark-gray hover:border-dark-gray'>
                            <FaGithub className='inline' />
                            <span>repo</span>
                        </a>
                    </div>
                </div>
            </div>
            <h1 className='text-center mt-2 text-2xl capitalize'>
                {project.name}
            </h1>
        </div>

    )
}

export default Project